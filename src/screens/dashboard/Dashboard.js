import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { FirebaseCollections } from "../../utilities/FirebaseCollections";
import GarageDetails from "../../components/Garage-details/GarageDetails";
import ReservedGarages from "../../components/Reserved-garages-details/ReservedGarages";

const Dashboard = () => {
  const [userCollectionData, setUserCollectionData] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [garageCollection, setGarageCollection] = useState([]);
  const [userOwnGarage, setUserOwnGarage] = useState(null);
  const [reservedGarages, setReservedGarages] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const users_response = await fetch(
          `${FirebaseCollections.baseURL}/${FirebaseCollections.userCollection}`
        );
        const garage_response = await fetch(
          "https://parking-system-eaece-default-rtdb.firebaseio.com/garage-collection.json"
        );
        if (!users_response.ok || !garage_response.ok) {
          throw new Error("Error fetching collection");
        }

        const users = await users_response.json();
        const garages = await garage_response.json();
        setUserCollectionData(Object.values(users));
        setGarageCollection(Object.values(garages));
      } catch (error) {
        console.error("Error fetching collection:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (userCollectionData.length >= 1) {
      setCurrentUser(
        userCollectionData.find(
          (user) => user.ownerId === localStorage.getItem("uid")
        )
      );
    }
  }, [userCollectionData]);
  useEffect(() => {
    if (garageCollection.length >= 1) {
      setUserOwnGarage(
        garageCollection.find(
          (garage) => garage.ownerId === localStorage.getItem("uid")
        )
      );
    }
  }, [garageCollection]);
  useEffect(() => {
    if (currentUser && currentUser["reserved-garages"])
      setReservedGarages(Object.values(currentUser["reserved-garages"]));
  }, [garageCollection, userCollectionData, currentUser]);
  const isLogged = localStorage.getItem("token");

  if (!isLogged) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      {currentUser && currentUser.garageOwner && (
        <GarageDetails
          garageDetails={userOwnGarage}
          users={userCollectionData}
          currentUser={currentUser}
        />
      )}
      {currentUser && currentUser.CarOwner && (
        <ReservedGarages
          reservedGarages={
            reservedGarages
              ? Object.values(currentUser["reserved-garages"])
              : []
          }
        />
      )}
    </div>
  );
};

export default Dashboard;
