// import React from "react";

// const Carousel = () => {
//   return <div>Carousel</div>;
// };

// export default Carousel;

import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Container, Box, CssBaseline } from "@mui/material";
import Home from "@mui/icons-material/Home";
import AlbumIcon from "@mui/icons-material/Album";
export function MyCarousel(props) {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      image:
        "https://www.spacex.com/static/images/backgrounds-2022/crs-26/post-launch/Homepage_Desktop.jpg",
    },

    {
      name: "Random Name #2",
      description: "Hello World!",
      image:
        "https://media.istockphoto.com/id/613320160/photo/international-space-station-in-outer-space.jpg?s=612x612&w=0&k=20&c=PQSutAlO3koC4YFDMgJm9KvnRu0l03PQRr3PMCggJ3I=",
    },
    {
      name: "Random Name #3",
      description: "hi World!",
      image: "https://www.spacex.com/static/images/locations/kennedy.jpg",
    },
  ];

  return (
    <Carousel
      IndicatorIcon={<AlbumIcon />} // Previous Example
      indicatorIconButtonProps={{
        style: {
          padding: "10px", // 1
          color: "blue", // 3
        },
      }}
      activeIndicatorIconButtonProps={{
        style: {
          backgroundColor: "red", // 2
        },
      }}
      indicatorContainerProps={{
        style: {
          marginTop: "50px", // 5
          textAlign: "center", // 4
        },
      }}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return <img src={props.item.image} alt="" />;
}
