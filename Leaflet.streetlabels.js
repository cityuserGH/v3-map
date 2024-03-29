L.LabelTextCollision = L.Canvas.extend({
  options: { collisionFlg: true },
  initialize: function (options) {
    options = L.Util.setOptions(this, options);
  },
  _updateTransform: function (center, zoom) {
    L.Canvas.prototype._updateTransform.call(this, center, zoom);
    var scale = this._map.getZoomScale(zoom, this._zoom),
      position = L.DomUtil.getPosition(this._container),
      viewHalf = this._map.getSize().multiplyBy(0.5 + this.options.padding),
      currentCenterPoint = this._map.project(this._center, zoom),
      destCenterPoint = this._map.project(center, zoom),
      centerOffset = destCenterPoint.subtract(currentCenterPoint),
      topLeftOffset = viewHalf
        .multiplyBy(-scale)
        .add(position)
        .add(viewHalf)
        .subtract(centerOffset);
    if (L.Browser.any3d) {
      L.DomUtil.setTransform(this._containerText, topLeftOffset, scale);
    } else {
      L.DomUtil.setPosition(this._containerText, topLeftOffset);
    }
  },
  _initContainer: function (options) {
    L.Canvas.prototype._initContainer.call(this);
    this._containerText = document.createElement("canvas");
    L.DomEvent.on(
      this._containerText,
      "mousemove",
      L.Util.throttle(this._onMouseMove, 32, this),
      this
    )
      .on(
        this._containerText,
        "click dblclick mousedown mouseup contextmenu",
        this._onClick,
        this
      )
      .on(this._containerText, "mouseout", this._handleMouseOut, this);
    this._ctxLabel = this._containerText.getContext("2d");
    L.DomUtil.addClass(this._containerText, "leaflet-zoom-animated");
    this.getPane().appendChild(this._containerText);
  },
  _update: function () {
    this._textList = [];
    L.Renderer.prototype._update.call(this);
    var b = this._bounds,
      container = this._containerText,
      size = b.getSize(),
      m = L.Browser.retina ? 2 : 1;
    L.DomUtil.setPosition(container, b.min);
    container.width = m * size.x;
    container.height = m * size.y;
    container.style.width = size.x + "px";
    container.style.height = size.y + "px";
    container.style.zIndex = "4";
    this._container.style.zIndex = "3";
    if (L.Browser.retina) {
      this._ctxLabel.scale(2, 2);
    }
    this._ctxLabel.translate(-b.min.x, -b.min.y);
    L.Canvas.prototype._update.call(this);
  },
  _updatePoly: function (layer, closed) {
    L.Canvas.prototype._updatePoly.call(this, layer, closed);
    this._text(this._ctxLabel, layer);
  },
  _updateCircle: function (layer) {
    L.Canvas.prototype._updateCircle.call(this, layer);
    this._text(this._ctxLabel, layer);
  },
  _getCenter: function (points) {
    var i,
      halfDist,
      segDist,
      dist,
      p1,
      p2,
      ratio,
      len = points.length;
    if (!len) {
      return null;
    }
    for (i = 0, halfDist = 0; i < len - 1; i++) {
      halfDist += points[i].distanceTo(points[i + 1]) / 2;
    }
    if (halfDist === 0) {
      return points[0];
    }
    for (i = 0, dist = 0; i < len - 1; i++) {
      p1 = points[i];
      p2 = points[i + 1];
      segDist = p1.distanceTo(p2);
      dist += segDist;
      if (dist > halfDist) {
        ratio = (dist - halfDist) / segDist;
        var resutl = [
          p2.x - ratio * (p2.x - p1.x),
          p2.y - ratio * (p2.y - p1.y),
        ];
        return L.point(resutl[0], resutl[1]);
      }
    }
  },
});

L.StreetLabels = L.LabelTextCollision.extend({
  options: { // none of this really seems to change much, if anything?
    propertyName: "name",
    showLabelIf: null,
    interactive: true,
    fontStyle: {
      dynamicFontSize: false,
      fontSize: 10,
      fontSizeUnit: "px",
      lineWidth: 10,
      fillStyle: "black",
      strokeStyle: "white",
    },
  },
  _handleMouseOut: function (e) {
    var layer = this._hoveredLayer;
    if (layer) {
      this._map._mapPane.style.cursor = "grab";
      this._fireEvent([layer], e, "mouseout");
      this._hoveredLayer = null;
      this._mouseHoverThrottled = false;
    }
  },
  _handleMouseHover: function (e, point) {
    if (this._mouseHoverThrottled) {
      return;
    }
    var layer, candidateHoveredLayer;
    for (var order = this._drawFirst; order; order = order.next) {
      layer = order.layer;
      if (layer.options.interactive && layer._containsPoint(point)) {
        candidateHoveredLayer = layer;
      }
    }
    if (candidateHoveredLayer !== this._hoveredLayer) {
      this._handleMouseOut(e);
      if (candidateHoveredLayer) {
        this._map._mapPane.style.cursor = "pointer";
        this._fireEvent([candidateHoveredLayer], e, "mouseover");
        this._hoveredLayer = candidateHoveredLayer;
      }
    }
    if (this._hoveredLayer) {
      this._fireEvent([this._hoveredLayer], e);
    }
    this._mouseHoverThrottled = true;
    setTimeout(
      L.Util.bind(function () {
        this._mouseHoverThrottled = false;
      }, this),
      32
    );
  },
  _fireEvent: function (layers, e, type) {
    this._map._fireDOMEvent(e, type || e.type, layers);
  },
  initialize: function (options) {
    L.LabelTextCollision.prototype.initialize.call(this, options);
    L.Util.stamp(this);
    this._layers = this._layers || {};
  },
  _initContainer: function (options) {
    L.LabelTextCollision.prototype._initContainer.call(this, options);
    if (this._map) {
      var handleLayerChanges = function () {
        this._reset();
        this._redraw();
      }.bind(this);
      this._map.on(
        "layerremove",
        L.Util.throttle(handleLayerChanges, 32, this)
      );
    }
  },
  _text: function (ctx, layer) {
    if (
      layer &&
      layer.feature &&
      layer.feature.properties &&
      layer.feature.properties[this.options.propertyName] !== "undefined"
    ) {
      if (this.options.showLabelIf) {
        if (this.options.showLabelIf.call(this, layer.feature) === false) {
          return;
        }
      }
      var layerText = layer.feature.properties[this.options.propertyName];
      ctx.globalAlpha = 1;
      var p;
      if (layer._parts.length === 0 || layer._parts[0].length === 0) {
        return;
      }
      if (layer instanceof L.Polygon && this._map.hasLayer(layer)) {
        p = this._getCentroid(layer);
      } else {
        p = this._getCenter(layer._parts[0]);
      }
      if (!p) {
        return;
      }
      var offsetX = 0;
      var offsetY = 0;
      ctx.lineWidth = this.options.fontStyle.lineWidth;
      var fontSize = this.options.fontStyle.fontSize;
      if (this._map && this.options.fontStyle.dynamicFontSize === true) {
        fontSize = this._getDynamicFontSize();
      }
      ctx.font =
        fontSize +
        this.options.fontStyle.fontSizeUnit +
        " 'Helvetica Neue',Helvetica,Arial,sans-serif";
      var textWidth = ctx.measureText(layerText).width + p.x;
      var textHeight = p.y + offsetY + 20;
      var bounds = L.bounds(
        L.point(p.x + offsetX, p.y + offsetY),
        L.point(textWidth, textHeight)
      );
      if (this.options.collisionFlg) {
        for (var index in this._textList) {
          var pointBounds = this._textList[index];
          if (pointBounds.intersects(bounds)) {
            return;
          }
        }
      }
      this._textList.push(bounds);
      ctx.fillStyle = this.options.fontStyle.fillStyle;
      ctx.strokeStyle = this.options.fontStyle.strokeStyle;
      if (layer instanceof L.Polygon || layer instanceof L.CircleMarker) {
        var textLength = ctx.measureText(layerText).width;
        ctx.strokeText(
          layerText,
          p.x + offsetX - textLength / 2,
          p.y + offsetY
        );
        ctx.fillText(layerText, p.x + offsetX - textLength / 2, p.y + offsetY);
      } else if (layer instanceof L.Polyline) {

        var startCoords = layer.getLatLngs()[0];
        var stopCoords = layer.getLatLngs()[layer.getLatLngs().length - 1];
        if (this._getBearing(startCoords, stopCoords) < 0)
          layer = this._getLineStringReverse(layer);
        if (layer._parts) {
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.lineWidth = 3; // this is for the text stroke width
          layer._parts.forEach(function (part) {
            var pathPoints = [];
            for (var i = 0; i < part.length; i++) {
              var linePart = part[i];
              pathPoints.push(linePart.x);
              pathPoints.push(linePart.y);
            }
            ctx.textPath(layerText, pathPoints);
          });
        }
      }
    }
  },
  _getBearing: function (startCoords, stopCoords) {
    var rad = Math.PI / 180,
      lat1 = startCoords.lat * rad,
      lat2 = stopCoords.lat * rad,
      lon1 = startCoords.lng * rad,
      lon2 = stopCoords.lng * rad,
      y = Math.sin(lon2 - lon1) * Math.cos(lat2),
      x =
        Math.cos(lat1) * Math.sin(lat2) -
        Math.sin(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1);
    var bearing = ((Math.atan2(y, x) * 180) / Math.PI + 360) % 360;
    return bearing >= 180 ? bearing - 360 : bearing;
  },
  _getLineStringReverse: function (polyline) {
    var latLngs = polyline.getLatLngs().slice(0).reverse();
    polyline.setLatLngs(latLngs);
    return polyline;
  },
  _getDynamicFontSize: function () {
    return parseInt(this._map.getZoom());
  },
  _getCentroid: function (layer) {
    if (layer && layer.getCenter && this._map) {
      var latlngCenter = layer.getCenter();
      var containerPoint = this._map.latLngToContainerPoint(latlngCenter);
      return this._map.containerPointToLayerPoint(containerPoint);
    }
  },
});
