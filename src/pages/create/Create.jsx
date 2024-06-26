import {
  Box,
  Button,
  InputAdornment,
  TextField,
  styled,
  useTheme,
} from "@mui/material";
import "./Create.css";
import { ChevronRight } from "@mui/icons-material";
import { purple } from "@mui/material/colors";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  // @ts-ignore
  backgroundColor: theme.palette.favColour.main,
  "&:hover": {
    backgroundColor: purple[700],
  },
}));
function Create() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [Price, setPrice] = useState(0);
  const theme = useTheme();
  return (
    <Box component={"form"} sx={{ width: "300px" }} autoComplete="off">
      <TextField
        label={"Title"}
        onChange={(eo) => {
          setTitle(eo.target.value);
        }}
        fullWidth
        sx={{ m: 1, display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">👉</InputAdornment>,
        }}
        variant="filled"
      />
      <TextField
        label={"Amount"}
        onChange={(eo) => {
          setPrice(Number(eo.target.value));
        }}
        fullWidth
        sx={{ m: 1, display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        variant="filled"
      />
      <ColorButton
        onClick={() => {
          fetch("http://localhost:3100/mydata", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, Price }),
          }).then(() => {
            navigate("/");
          });
        }}
        variant="contained"
        // @ts-ignore
        sx={{ mt: "5px", ml: "5px", bgcolor: theme.palette.textColour.main }}
      >
        submit <ChevronRight />
      </ColorButton>
    </Box>
  );
}

export default Create;
