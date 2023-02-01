function initMap() {
  new google.maps.Map(document.getElementById("map"), {
    mapId: "ecc6ef3ca4958083",
    center: { lat: 48.85, lng: 2.35 },
    zoom: 12,
  });
}

window.initMap = initMap;