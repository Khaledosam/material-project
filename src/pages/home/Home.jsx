import { Box, Paper, Typography, IconButton } from "@mui/material";
import "./Home.css";
import React, { useState } from "react";
import { Close } from "@mui/icons-material";
import { useEffect } from "react";

function Home() {
  const [mydata, setMydata] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3100/mydata")
      .then((response) => response.json())
      .then((data) => setMydata(data));
  }, []);
  let totalPrice = 0;
  const HandleDelete = (item) => {
    fetch(`http://localhost:3100/mydata/${item.id}`, {
      method: "DELETE",
    });
    const newArr = mydata.filter((object) => {
      return object.id !== item.id;
    });
    setMydata(newArr);
  };
  return (
    <Box sx={{ width: "300px", mt: "20px" }}>
      {mydata.map((item) => {
        totalPrice += item.Price;
        return (
          <Paper
            key={item.id}
            className="paper"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: "10px",
              position: "relative",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                ml: { xs: "20px", lg: "30px" },
                mt: "20px",
                mb: "20px",
                fontWeight: "bold",
                textTransform: "capitalize",
              }}
            >
              {item.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mr: "30px",
                mt: "20px",
                mb: "20px",
                opacity: 0.8,
              }}
            >
              $ {item.Price}
            </Typography>
            <IconButton
              onClick={() => HandleDelete(item)}
              sx={{ position: "absolute", top: "0", right: "0" }}
            >
              <Close sx={{ fontSize: "15px" }} />
            </IconButton>
          </Paper>
        );
      })}
      <Typography variant="h5" mt={"40px"} textAlign={"center"}>
        👉 You Spend $<span className="price">{totalPrice}</span>
      </Typography>
      ;
    </Box>
  );
}

export default Home;
