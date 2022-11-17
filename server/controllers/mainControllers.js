//import la base de datos
import fs from "fs";

export const loginUser = (req, res) => {
  const body = req.body;
  // guardar datos en alguna parte
  fs.writeFile("./Data/Data.json", JSON.stringify(body, null, 2), (error) => {
    if (error) {
      console.log("An error has occurred ", error);
      return;
    }
    console.log("Data written successfully to disk");
  });
  res.status(200).json({ mesage: "success" });
};

export const getUser = (req, res) => {
  fs.readFile("./Data/Data.json", "utf8", (error, data) => {
    if (error) {
      console.log(error);
      return;
    }
    res.status(200).json(JSON.parse(data));
  });
};
