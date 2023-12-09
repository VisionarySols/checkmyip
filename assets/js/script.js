document.addEventListener("DOMContentLoaded", () => {
    // Function to update the HTML with IP information
    function updatePageWithIPData(data) {
        // Get HTML elements to update
        const ipElement = document.getElementById("ip");
        const regionElement = document.getElementById("region");
        const cityElement = document.getElementById("city");
        const countryElement = document.getElementById("country");
        const ispElement = document.getElementById("isp");
        const hostElement = document.getElementById("host");
        // Add more elements here for additional information

        // Update the elements with the data
        ipElement.textContent = data.ip;
        regionElement.textContent = data.region_name;
        cityElement.textContent = data.city;
        countryElement.textContent = data.country_name;
        ispElement.textContent = data.isp;
        hostElement.textContent = data.host;
    }

    function initMap(data) {
        // Coordinates for the location (latitude and longitude)
        var location = { lat: data.lat, lng: data.lon };

        // Create a map centered at the specified location
        var map = new google.maps.Map(document.getElementById('map'), {
            center: location,
            zoom: 15 // Adjust the zoom level as needed
        });

        // Create a marker for the location
        var marker = new google.maps.Marker({
            position: location,
            map: map,
            title: 'My Location' // Optional marker title
        });
    }

    // Function to fetch IP data from the API and update the page
    function fetchIPDataAndDisplay() {
        fetch("https://api.ipbase.com/v1/json", {
            referrerPolicy: "unsafe-url"
        })// Use "http" here
            .then((response) => response.json())
            .then((data) => {
                // Call the function to update the page with the retrieved JSON data
                updatePageWithIPData(data);
                // Call the initMap function when the page loads
                //                google.maps.event.addDomListener(window, 'load', initMap(data));
            })
            .catch((error) => {
                console.error("Failed to fetch IP data: " + error);
            });
    }

    // Fetch IP data and update the page
    fetchIPDataAndDisplay();
});
