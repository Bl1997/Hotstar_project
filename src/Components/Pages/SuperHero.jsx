import React, { useEffect, useState } from "react";
import axios from "axios";
import {  Text } from "@chakra-ui/react";


const SuperHero = () => {
  const API_KEY = "AIzaSyAGlOnz0IKoW_2xtOU61nkADfnlhZEqrkc";

  const [data, setData] = useState([]);
  

  useEffect(() => {
    axios
      .get(
        ` https://www.googleapis.com/youtube/v3/search?q= Thor+Avengers+Spiderman full
         Movies &key=${API_KEY}&part=snippet&maxResults=50&order=title`
      )

      .then((res) => setData(res.data.items));
  }, []);

  console.log(data);
  console.log(data);

  return (
    <div>
      <div>
        <Text
          marginLeft={"25px"}
          fontSize={"2xl"}
          fontWeight="bold"
          color={"white"}
          textAlign="left"
        >
          Best Of Super Heros
        </Text>
      </div>

      <div className="display_grid">
        {data.map((item, index) => {
          return (
            <div key={index}>
              <img
                className="image_hover"
                style={{
                  width: "300px",
                  height: "200px",
                  borderRadius: "10px",
                  marginTop: "10px",
                }}
                src={item.snippet.thumbnails.high.url}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SuperHero;
