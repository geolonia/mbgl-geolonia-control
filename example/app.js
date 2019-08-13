import ForkMe from "@geolonia/mbgl-fork-me-control";
import GeoloniaControl from "../src/";

const map = new mapboxgl.Map({
  container: "map",
  style: "https://geolonia.github.io/tiny-tileserver/style.json",
  attributionControl: true,
  hash: true,
  localIdeographFontFamily: ["sans-serif"]
});

map.addControl(new mapboxgl.NavigationControl());
map.addControl(new mapboxgl.GeolocateControl());
map.addControl(new ForkMe({ url: "https://github.com/geolonia/mbgl-geolonia-control" }));

map.addControl(new GeoloniaControl());
