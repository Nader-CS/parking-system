export default async function closestGarage(
  originLati,
  originLong,
  distance = 10000
) {
  const NearestGarages = [];
  const google = window.google;
  const service = new google.maps.DistanceMatrixService();
  const origin = new google.maps.LatLng(originLong, originLati);

  try {
    const response = await fetch(
      `https://parking-system-eaece-default-rtdb.firebaseio.com/garage-collection.json`
    );
    const garages = await response.json();
    const data = await garages;
    const travelMode = google.maps.TravelMode.WALKING;
    console.log(data);
    const requests = Object.keys(data).map((key) => {
      let garage = { id: key, ...data[key] };

      return new Promise((resolve) => {
        const destination = new google.maps.LatLng(garage.lon, garage.lat);
        const request = {
          origins: [origin],
          destinations: [destination],
          travelMode: travelMode,
          unitSystem: google.maps.UnitSystem.METRIC,
        };

        service.getDistanceMatrix(request, (response, status) => {
          if (status === google.maps.DistanceMatrixStatus.OK) {
            console.log(response);
            const distanceValue = response.rows[0].elements[0].distance?.value;
            const durationText = response.rows[0].elements[0].duration?.text;

            if (distanceValue !== undefined && durationText !== undefined) {
              if (distanceValue <= distance) {
                NearestGarages.push({
                  garage: garage,
                  distance: `${distanceValue} Meter`,
                  duration: `${durationText} in ${travelMode}`,
                });
              }
            } else {
              console.error("Error: Distance or duration not available.");
            }
          } else {
            console.error("Error:", status);
          }
          resolve();
        });
      });
    });

    await Promise.all(requests);
  } catch (error) {
    console.log(error);
  }
  console.log(`return ${NearestGarages}`);
  return NearestGarages;
}
