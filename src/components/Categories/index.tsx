/* eslint-disable @next/next/no-img-element */
import { Box, Card, Grid } from "@mui/material";
import React from "react";
import { Typography } from "../Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { categories } from "../../utils/categories";
import { useTheme } from "@themes/useTheme";
import { Image } from "./styles";

export const Categories = () => {
  const [theme] = useTheme();
  return (
    <Box mt={5} sx={{ position: "relative", textAlign: "center" }}>
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
                <Image
                  src={category.img}
                  alt={category.name}
                />
                <Grid
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <Grid item xs={12}>
                    <Typography
                      variant="subtitle1"
                      fontSizeMd={3}
                      fontSizeSm={2.6}
                      fontWeight={600}
                      color={theme.palette.text.primary}
                      isUppercase={false}
                      alignText="center"
                      text={category.name}
                    />
                  </Grid>
                </Grid>
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      </Grid>
    </Box>
  );
};
