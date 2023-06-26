import { useEffect, useState } from "react";
import ReservedGarages from "../Reserved-garages-details/ReservedGarages";

const GarageDetails = (props) => {
  const [garageCollection, setGarageCollection] = useState(null);
  let [ownGarage, setOwnGarage] = useState([]);
  let usersReservations = [];
  console.log("users is : ", props.users);
  console.log(props.currentUser);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const garage_response = await fetch(
          "https://parking-system-eaece-default-rtdb.firebaseio.com/garage-collection.json"
        );
        if (!garage_response.ok) {
          throw new Error("Error fetching collection");
        }
        const garages = await garage_response.json();
        setGarageCollection(Object.entries(garages));
      } catch (e) {
        console.error("Error fetching collection:", e);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (garageCollection) {
      const filteredGarages = garageCollection.filter(
        (garage) => garage[1].ownerId === props.currentUser.ownerId
      );
      setOwnGarage(filteredGarages);
    }
  }, [garageCollection, props.currentUser.ownerId]);
  if (ownGarage.length >= 1) {
    props.users.map((user) => {
      if (ownGarage.length >= 1)
        if (user["reserved-garages"]) {
          let user2 = Object.values(user["reserved-garages"]);
          for (let id of user2) {
            console.log(id);
            console.log(ownGarage);
            //   //بقي معايا كل ال id  بتاعتت كل الجراجات ال اتعملها حجز
            if (id.garageId == ownGarage[0][0]) {
              usersReservations.push(user);
            }
          }
        }
    });
  }
  return (
    <div>
      <div
        className="text-primary bg-light"
        style={{
          width: "50%",
          margin: "1rem auto",
          textAlign: "center",
          fontSize: "1.5rem",
          border: "0.2rem solid black",
        }}
      >
        Your Garage info
      </div>
      <div style={{ overflow: "scroll" }}>
        <table className="table" style={{ textAlign: "center" }}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Address</th>
              <th scope="col">GarageName</th>
              <th scope="col">Description</th>
              <th scope="col">AvailableSpots</th>
              <th scope="col">Images</th>
              <th scope="col">PricePerHour</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>{props.garageDetails.address}</td>
              <td>{props.garageDetails.garageName}</td>
              <td>{props.garageDetails.description}</td>
              <td>{props.garageDetails.availableSpots}</td>
              <td>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "0.5rem",
                  }}
                >
                  <div>
                    <a target="_blank" href={props.garageDetails.imagesURL[0]}>
                      <img
                        style={{ width: "3rem" }}
                        src={props.garageDetails.imagesURL[0]}
                      />
                    </a>
                  </div>
                  <div>
                    <a target="_blank" href={props.garageDetails.imagesURL[0]}>
                      <img
                        style={{ width: "3rem" }}
                        src={props.garageDetails.imagesURL[1]}
                      />
                    </a>
                  </div>
                  <div>
                    <a target="_blank" href={props.garageDetails.imagesURL[0]}>
                      <img
                        style={{ width: "3rem" }}
                        src={props.garageDetails.imagesURL[2]}
                      />
                    </a>
                  </div>
                  <div>
                    <a target="_blank" href={props.garageDetails.imagesURL[0]}>
                      <img
                        style={{ width: "3rem" }}
                        src={props.garageDetails.imagesURL[3]}
                      />
                    </a>
                  </div>
                </div>
              </td>
              <td>{props.garageDetails.pricePerHour}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="users-reservations">
        <div
          className="text-primary bg-light"
          style={{
            width: "50%",
            margin: "1rem auto",
            textAlign: "center",
            fontSize: "1.5rem",
            border: "0.2rem solid black",
          }}
        >
          Your Garage Users
        </div>
        <div style={{ overflow: "scroll" }}>
          <table className="table" style={{ textAlign: "center" }}>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">PlateNumber</th>
              </tr>
            </thead>
            <tbody>
              {usersReservations.length >= 1 ? (
                usersReservations.map((user, index) => {
                  return (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{user.ownerName}</td>
                      <td>{user.ownerEmail}</td>
                      <td>{user.plateNumber}</td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="4">
                    <p
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        verticalAlign: "center",
                        marginTop: "1rem",
                        color: "red",
                      }}
                    >
                      There is no users
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GarageDetails;
