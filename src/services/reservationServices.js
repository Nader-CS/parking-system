import axios from "axios";
import { FirebaseCollections } from "../utilities/FirebaseCollections";
export const listenToValueChange = (snapshot) => {
  const users = snapshot.val();
  // console.log(users);
  const currentTime = new Date().getTime();
  Object.keys(users).forEach((userId) => {
    const user = users[userId];
    const reservedGarages = user["reserved-garages"];
    if (reservedGarages)
      Object.keys(reservedGarages).forEach((reservedGarageId) => {
        const reservedGarage = reservedGarages[reservedGarageId];
        if (reservedGarage.leavingOn) {
          const leavingOnTime = new Date(reservedGarage.leavingOn).getTime();
          // console.log(
          //   `leavingOnTime ${leavingOnTime} currentTime ${currentTime} reservedGarage ${reservedGarage}`
          // );
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
                      console.log("updated");
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

export const getAdminData = async () => {
  const uid = localStorage.getItem("uid");
  const url = `${FirebaseCollections.baseURL}/ipark-admin.json`;
  const res = await axios.get(url);
  const data = res.data;
  const user = data.find((value) => value.adminId === uid);
  return user;
};

export const getAllGarages = async () => {
  let approvedGarages = [];
  let unApprovedGarages = [];
  const url = `${FirebaseCollections.baseURL}/${FirebaseCollections.garagesCollection}.json`;
  const res = await axios.get(url);
  Object.keys(res.data).map((key) => {
    let garage = { id: key, ...res.data[key] };
    if (garage.approved) {
      approvedGarages.push({...garage});
    } else {
      unApprovedGarages.push({ ...garage });
    }
  });
  console.log(`${approvedGarages.length} ${unApprovedGarages.length}`);
  return { approvedGarages, unApprovedGarages };
};
