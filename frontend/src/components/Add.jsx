import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Add = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  var [inputs, setInputs] = useState({
    title: "",
    content: "",
    img_url: "",
  });
  const inputHandler = (e) => {
    console.log(e.target.value);
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    console.log("in", inputs);
  };

  useEffect(() => {
    if (location.state !== null) {
      setInputs({
        title: location.state.val.title,
        content: location.state.val.content,
        img_url: location.state.val.img_url
      });
    }
  }, [location]);
  const addData = () => {
    if (location.state !== null) {
      axios.put("http://localhost:3001/update/" + location.state.val._id, inputs)
        .then((res) => {
          console.log("Data Updated");
          navigate("/");
          window.location.reload(); 
        })
        .catch((err) => {
          console.log("Error updating data:", err);
        });
    }
    else {
      axios.post("http://localhost:3001/add", inputs)
        .then((res) => {
          console.log("Data Added");
          navigate("/");
          window.location.reload();
        })
        .catch((err) => {
          console.log("Error fetching data:", err);
          alert("Error adding blog post. Please try again.");
        });
    }
  }

  return (
    <div>
      <div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "90vh",
          }}
        >
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: "600px",
            }}
          >
            <TextField
              variant="outlined"
              placeholder="Title"
              onChange={inputHandler}
              name="title"
              value={inputs.title}
              fullWidth
            />
            <TextField
              variant="outlined"
              placeholder="content"
              onChange={inputHandler}
              name="content"
              value={inputs.content}
              multiline={4}
            />
            <TextField
              variant="outlined"
              placeholder="image url"
              onChange={inputHandler}
              name="img_url"
              value={inputs.img_url}
            />

            <Button variant="contained" color="secondary" onClick={addData}>
              Submit
            </Button>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Add;
