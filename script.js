// script.js

function checkLocationPermission() {
  let permissionGranted = false;

  function checkPermission() {
    navigator.permissions.query({ name: 'geolocation' }).then(function (result) {
      if (result.state === 'granted') {
        permissionGranted = true;
        document.body.classList.remove('hidden'); // Show the body content
        clearInterval(permissionInterval); // Stop the interval
      } else if (result.state === 'denied') {
        alert('Location permission denied. Please enable it to use this feature.');
        clearInterval(permissionInterval); // Stop the interval
      }
    });
  }

  // Check permission every 2 seconds
  const permissionInterval = setInterval(checkPermission, 2000);
}

// Call the function to start checking for location permission
checkLocationPermission();
