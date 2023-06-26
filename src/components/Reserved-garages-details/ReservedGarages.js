import { useState, useEffect } from "react";
const ReservedGarages = (props) => {
  const [garageCollection, setGarageCollection] = useState(null);
  const reservedGarages = [];
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
      } catch (error) {
        console.error("Error fetching collection:", error);
      }
    };
    fetchData();
  }, []);
  console.log(garageCollection);
  if (props.reservedGarages && garageCollection) {
    for (const i of props.reservedGarages) {
      for (const j of garageCollection) {
        if (i.garageId == j[0]) {
          reservedGarages.push([j]);
        }
      }
    }
  }
  console.log(reservedGarages);
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
        Your Reservation info
      </div>
      <div style={{ overflow: "scroll" }}>
        <table className="table" style={{ textAlign: "center" }}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">address</th>
              <th scope="col">garageName</th>
              <th scope="col">description</th>
              <th scope="col">pricePerHour</th>
            </tr>
          </thead>
          <tbody>
            {reservedGarages.length >= 1 ? (
              reservedGarages.map((garage, index) => {
                return (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{garage[0][1].address}</td>
                    <td>{garage[0][1].garageName}</td>
                    <td>{garage[0][1].description}</td>
                    <td>{garage[0][1].pricePerHour}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="5">
                  <p
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      verticalAlign: "center",
                      marginTop: "1rem",
                      color: "red",
                    }}
                  >
                    There is no Reservations
                  </p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReservedGarages;
