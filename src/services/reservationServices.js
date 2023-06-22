import axios from "axios";
import { FirebaseCollections } from "../utilities/FirebaseCollections";
export const listenToValueChange = (snapshot) => {
    const users = snapshot.val();
    console.log(users);
    const currentTime = new Date().getTime();
    Object.keys(users).forEach((userId) => {
      const user = users[userId];
      const reservedGarages = user["reserved-garages"];
      if (reservedGarages)
        Object.keys(reservedGarages).forEach((reservedGarageId) => {
          const reservedGarage = reservedGarages[reservedGarageId];
          if (reservedGarage.leavingOn) {
            const leavingOnTime = new Date(reservedGarage.leavingOn).getTime();
            console.log(
              `leavingOnTime ${leavingOnTime} currentTime ${currentTime} reservedGarage ${reservedGarage}`
            );
              if (leavingOnTime < currentTime) {
                  if (!reservedGarage.isUpdated) {
                    console.log("change");
                    let garageId = reservedGarage.garageId;
                    const url = `${FirebaseCollections.baseURL}/${FirebaseCollections.garagesCollection}/${garageId}.json`;
                    axios.get(url).then((value) => {
                      console.log(value.data.availableSpots);
                      axios
                        .patch(url, {
                          availableSpots: value.data.availableSpots + 1,
                        })
                          .then((v) => {
                              const userUrl = `${FirebaseCollections.baseURL}/user-collection/${userId}/reserved-garages/${reservedGarageId}.json`;
                              axios.patch(userUrl, { isUpdated: true }).then((v) => {
                                  console.log("updated")
                              });
                        });
                    });
                  }
            }
          }
        });
    });
//   });
};
