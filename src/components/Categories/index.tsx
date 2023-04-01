/* eslint-disable @next/next/no-img-element */
import { Box, Card, Grid } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { categories } from "../../utils/categories";

export const Categories = () => {
  return (
    <Box mt={20}>
      <Grid
        container
        direction={"row"}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Swiper
            spaceBetween={15}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                slidesPerGroup: 1,
              },
              768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              928: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
              1080: {
                slidesPerView: 4,
                slidesPerGroup: 4,
              },
            }}
          >
            {categories.map((category) => (
              <SwiperSlide key={category.id}>
                <img src={category.img} alt={category.name} style={{width: '100%', height: 300}}/>
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      </Grid>
    </Box>
  );
};
