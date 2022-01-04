navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log("내 위치는", lat, lng);
}

function onGeoError() {
  alert("날씨 정보를 찾을수 없다.");
}
