const GarageDetails = (props) => {
  console.log(props.garageDetails);
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
              <th scope="col">address</th>
              <th scope="col">garageName</th>
              <th scope="col">description</th>
              <th scope="col">availableSpots</th>
              <th scope="col">images</th>
              <th scope="col">pricePerHour</th>
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
    </div>
  );
};

export default GarageDetails;
