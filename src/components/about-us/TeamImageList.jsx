import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  ImageListItem,
  ImageList,
} from "@mui/material";
import { cards } from "./constatnts";

const teamImageList = cards.map((card) => (
  <Grid item key={card.id} xs={12} sm={6} md={4}>
    <Card
      className="grayscale "
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "black",
        gap: 8,
      }}
    >
      {card.multiImage ? (
        <ImageList cols={2}>
          {card.photo.map((item) => (
            <ImageListItem key={item.src}>
              <img
                src={`${item.src}?w=164&h=164&fit=crop&auto=format`}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      ) : (
        <CardMedia
          component="div"
          sx={{
            // 16:9
            pt: "100%",
          }}
          className="grayscale "
          image={card.photo.src}
        />
      )}

      <CardContent sx={{ flexGrow: 1 }} className="bg-dark text-light-gray ">
        <h3 className="md:text-xl font-bold xs:text-md  text-center mb-1">
          {card.multiImage ? card.name.map((item) => `${item}، `) : card.name}
        </h3>
        <h3 className="text-xl text-center ">{card.field}</h3>
        <p className="  text-justify mt-6">{card.info}</p>
      </CardContent>
    </Card>
  </Grid>
));

export default teamImageList;
