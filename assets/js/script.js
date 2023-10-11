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
        ipElement.textContent = data.query;
        regionElement.textContent = data.regionName;
        cityElement.textContent = data.city;
        countryElement.textContent = data.country;
        ispElement.textContent = data.isp;
        hostElement.textContent = data.host;
    }

    // Function to fetch IP data from the API and update the page
    function fetchIPDataAndDisplay() {
        fetch("http://ip-api.com/json")
            .then((response) => response.json())
            .then((data) => {
                // Call the function to update the page with the retrieved JSON data
                updatePageWithIPData(data);
            })
            .catch((error) => {
                console.error("Failed to fetch IP data: " + error);
            });
    }

    // Fetch IP data and update the page
    fetchIPDataAndDisplay();


});
