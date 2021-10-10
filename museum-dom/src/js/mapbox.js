mapboxgl.accessToken =
  "pk.eyJ1IjoiYmxhY2tiZXJyeWlkIiwiYSI6ImNrdWxkdDFtbzBpaHQyb21vYXczdXFjeGMifQ.s8yMQhAxIW_jysIcT1d2uA";
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/blackberryid/ckulhps7f2hqy17nsnu4i6win", // style URL
  center: [2.3364, 48.86091], // starting position [lng, lat]
  zoom: 15.7, // starting zoom
});

// Create a default Marker, colored black, rotated 45 degrees.
const marker1 = new mapboxgl.Marker({ color: "#171717" })
  .setLngLat([2.3364, 48.86091])
  .addTo(map);

const marker2 = new mapboxgl.Marker({ color: "#757575" })
  .setLngLat([2.3333, 48.8602])
  .addTo(map);

const marker3 = new mapboxgl.Marker({ color: "#757575" })
  .setLngLat([2.3397, 48.8607])
  .addTo(map);

const marker4 = new mapboxgl.Marker({ color: "#757575" })
  .setLngLat([2.333, 48.8619])
  .addTo(map);

const marker5 = new mapboxgl.Marker({ color: "#757575" })
  .setLngLat([2.3365, 48.8625])
  .addTo(map);

// add navigation control

const nav = new mapboxgl.NavigationControl();
map.addControl(nav, "top-right");
