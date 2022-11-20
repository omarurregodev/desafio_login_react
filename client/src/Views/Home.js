import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const handleLogOut = async () => {
    try {
      const {data:response} = await axios.get(
        "http://localhost:8000/api/logout"
      );
      console.log(response);
      navigate("/logout");
    } catch (e) {
      
    }
  };

  const [data, setData] = useState();
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);
      try {
        const { data: response } = await axios.get(
          "http://localhost:8000/api/user"
        );
        console.log("respuesta", response);
        setData(response);
      } catch (e) {
        console.log(e);
      }
      setIsLoading(false);
    };
    fetchUser();
  }, []);
  return (
    <div>
      {loading ? (
        <>Loading...</>
        ) : (
          <>
          {" "}
          Bienvenido {data}!
        </>
      )}
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  );
};
