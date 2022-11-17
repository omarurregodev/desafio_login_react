import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    navigate("/logout");
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
      <button onClick={handleLogOut}>Log Out</button>
      {loading ? (
        <>Loading...</>
      ) : (
        <>
          {" "}
          este es el username:{data.username} Esta es la contraseña
          {data.password}
        </>
      )}
    </div>
  );
};
