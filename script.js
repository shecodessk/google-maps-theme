function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.76432910263944, lng: -122.44670030095159},
    zoom: 14,
    mapId: 'ecc6ef3ca4958083',
  });


  const markers = [[
    "Mario's Choice: FRESCA",
    37.76484303435829,
    -122.46434270593578,
    "images/mario.svg",
    50,
    50
  ],
  [
    "Luigi's Choice: LIMON",
    37.7648515934807,
    -122.42224633155307,
    "images/luigi.svg",
    50,
    50
  ],
  [
    "Toad's Choice: SANGUCHON",
    37.75547031997654,
    -122.42053882282005,
    "images/mushroom.svg",
    50,
    50
  ],
  [
    "Super Mario's Choice: Lomo Libre Cantina",
    37.76541404628794,
    -122.47796237815434,
    "images/fort.svg",
    50,
    50
  ]
];
  for(let i = 0; i< markers.length; i++){
    const currentMarker = markers[i];
    const marker = new google.maps.Marker({
      position: {lat: currentMarker[1], lng: currentMarker[2] },
      map,
      title: currentMarker[0],
      icon: {
        url: currentMarker[3],
        scaledSize: new google.maps.Size(currentMarker[4],currentMarker[5]),
      },
      animation: google.maps.Animation.DROP
    });
  
    const infoWindow = new google.maps.InfoWindow({
      content: currentMarker[0],
    });
    marker.addListener("click", () => {
      infoWindow.open(map, marker);
      });
  }
  
}

//37.7648515934807,