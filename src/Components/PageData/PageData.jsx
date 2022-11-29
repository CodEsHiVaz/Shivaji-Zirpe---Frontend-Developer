import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { useEffect } from "react";
import { TextField } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderRadius: "15px",
}));

export default function PageData() {
  const [data, setData] = useState([]);
  const [query, setquery] = useState("");

  const fetchDaata = async () => {
    let res = await fetch("https://api.spacexdata.com/v3/launches");
    let ld = await res.json();
    setData(ld);
  };
  useEffect(() => {
    fetchDaata();
  }, []);
  const handelsearch = (e) => {};
  //   console.log(data);

  return (
    <Box sx={{ flexGrow: 1, padding: 8 }}>
      <Box>
        <TextField
          onKeyUp={(e) => handelsearch(e)}
          required
          id="outlined-required"
          label="Search "
        />
      </Box>
      <Grid
        container
        spacing={{ xs: 4, sm: 4, md: 8 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {data &&
          data.map((elem) => {
            return (
              elem.mission_patch_small !== null && (
                <Grid
                  item
                  xs={6}
                  sm={4}
                  md={4}
                  key={`${elem.launch_date_unix} ${elem.flight_number}`}
                >
                  <Item sx={{ height: "400px" }}>
                    <p> {elem.flight_number}</p>
                    <img
                      width={"100%"}
                      src={elem.links.mission_patch_small}
                      alt=""
                    />
                  </Item>
                </Grid>
              )
            );
          })}
      </Grid>
    </Box>
  );
}
