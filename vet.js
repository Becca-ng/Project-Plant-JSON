let map; //A variable representing the google map
let coords; //A variable representing your coordinates

let service; //A service used to find places, might remove later
let infoWindow; //An infoWindow used for place searching, might remove later

function getUserLocation() {
    /**
     * Reference link to where I got this code
     * https://stackoverflow.com/questions/42973785/how-to-prompt-location-sharing-permission-in-browser-using-javascript
     */

    //This is a simple object that contains two attributes.
    coords = {
        latitude: -33.8665433,
        longitude: 151.1956316
    }

    //This calls the popup that asks for the user's location
    navigator.geolocation.getCurrentPosition(function (position) {
        coords.latitude = position.coords.latitude;
        coords.longitude = position.coords.longitude;

        //Creates a new updated map with the user location
        map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: coords.latitude, lng: coords.longitude },
            zoom: 10,
        });
    });
}

/**
 * This fires off whenever the maps thing finishes loading
 */
function initMap() {
    getUserLocation();
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: coords.latitude, lng: coords.longitude },
        zoom: 12,
    });
}

//This will take an existing google Maps map and search for local vets
// The following code is almost entirely copy pasted from the links below
// https://developers.google.com/maps/documentation/javascript/places#place_search_requests
// https://developers.google.com/maps/documentation/javascript/examples/place-search
function getVets() {
    var userLoc = new google.maps.LatLng(coords.latitude, coords.longitude);
    var request = {
        location: userLoc,
        radius: '5000',
        type: ['veterinary_care'],
        fields: ["name", "geometry"]
      };
      infoWindow = new google.maps.InfoWindow();
      service = new google.maps.places.PlacesService(map);
      service.nearbySearch(request, callback);
}

function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }
    }
  }

  function createMarker(place) {
    if (!place.geometry || !place.geometry.location) return;
  
    const marker = new google.maps.Marker({
      map,
      position: place.geometry.location,
    });
  
    google.maps.event.addListener(marker, "click", () => {
      infoWindow.setContent(place.name || "");
      infoWindow.open(map);
      console.log("clicked")
    });
  }