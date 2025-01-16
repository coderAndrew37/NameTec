document.addEventListener("DOMContentLoaded", () => {
  const locationElement = document.getElementById("cta-location");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;

      try {
        const response = await fetch(
          `https://geocode.xyz/${latitude},${longitude}?json=1`
        );
        const data = await response.json();
        const userCity = data.city || "your location";

        // Update CTA text with user's location
        locationElement.textContent = `Start Building Your Dream Home in ${userCity} Today!`;
      } catch (error) {
        console.error("Error fetching geolocation data:", error);
        locationElement.textContent = `Start Building Your Dream Home with Us Today!`;
      }
    });
  } else {
    locationElement.textContent = `Start Building Your Dream Home with Us Today!`;
  }
});
