// /**
//  * Get the nearest garages subject to passed origin coordinates
//  * @param {number} originLong The origin longitude default is 30.075039276195568
//  * @param {number} originLati The origin latitude default is 31.22181733648843
//  * @param {number} distance optional and the default is 500 M
//  * @returns {Array} promise with NearestGarages list
//  * @author	"Nader"
//  */
export default async function closestGarage(
  originLong = 31.2486498,
  originLati = 30.0505454,
  distance = 500
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
    const travelMode = google.maps.TravelMode.DRIVING;
    // this
    const requests = Object.keys(data).map((key) => {
      let garage = { id: key, ...data[key] };
      //
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
            //
            const distanceValue = response.rows[0].elements[0].distance
              ? response.rows[0].elements[0].distance.value
              : 1000;
            //
            if (distanceValue <= distance) {
              NearestGarages.push({
                garage: garage,
                distance: `${distanceValue} Meter`,
                duration: `${response.rows[0].elements[0].duration.text} in ${travelMode}`,
              });
              console.log(NearestGarages);
            }
          } else {
            console.error("Error:", status);
          }
          resolve(); // Resolve the promise after processing the response
        });
      });
    });

    await Promise.all(requests);
  } catch (error) {
    // console.log(error);
  }
  console.log(`return ${NearestGarages}`);
  return NearestGarages;
}

/* how to use it */

/*
  closestGarage().then((result) => {
    console.log(result);
  });

*/
