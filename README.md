# mbgl-geolonia-control

[![Build Status](https://travis-ci.org/geolonia/mbgl-geolonia-control.svg?branch=master)](https://travis-ci.org/geolonia/mbgl-geolonia-control)
[![npm version](https://badge.fury.io/js/%40geolonia%2Fmbgl-geolonia-control.svg)](https://badge.fury.io/js/%40geolonia%2Fmbgl-geolonia-control)

This is a Mapbox GL JS plugin to display our trademark on map.

https://geolonia.github.io/mbgl-geolonia-control/

## Install

```
$ npm install @geolonia/mbgl-geolonia-control --save
```

## How to use

```node
import GeoloniaControl from "@geolonia/mbgl-geolonia-control";

const map = new mapboxgl.Map({
  container: "map",
  style: "https://geolonia.github.io/tiny-tileserver/style.json",
  attributionControl: true,
  hash: true
});

map.addControl(new mapboxgl.NavigationControl());
map.addControl(new mapboxgl.GeolocateControl());
map.addControl(new GeoloniaControl(), "bottom-left");
```
