# mbgl-tilecloud-control

This is a Mapbox GL JS plugin to display our trademark on map.

https://tilecloud.github.io/mbgl-tilecloud-control/

## Install

```
$ npm install @tilecloud/mbgl-tilecloud-control --save
```

## How to use

```node
import TileCloudControl from '@tilecloud/mbgl-tilecloud-control'

const map = new mapboxgl.Map({
  container: 'map',
  style: 'https://tilecloud.github.io/tiny-tileserver/style.json',
  attributionControl: true,
  hash: true
});
map.addControl(new mapboxgl.NavigationControl());
map.addControl(new mapboxgl.GeolocateControl());
map.addControl(new TileCloudControl(), 'bottom-left');
```
