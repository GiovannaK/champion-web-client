/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-duplicate-props */
import { Box, Grid, Hidden, Toolbar, Typography } from "@mui/material";
import React from "react";
import { ButtonLG } from "../Buttons/ButtonLG";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const Banner = () => {
  return (
    <Hidden mdDown>
      <Box sx={{ position: "relative", textAlign: "center" }}>
        <Grid container>
          <Grid item xs={12}>
            <img
              alt="banner do something great"
              src="/banner.png"
              style={{
                width: "100%",
                height: "120%",
                opacity: "0.3",
                position: "relative",
              }}
            />
            <Grid
              container
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
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  Apoie criadores e Acesse os melhores conteúdos
                </Typography>
              </Grid>
              <Toolbar sx={{ paddingTop: "15rem" }} />
              <Grid item xs={12}>
                <ButtonLG
                  text="Apoie Já"
                  variant="contained"
                  width={"30%"}
                  fontWeight={800}
                  isUppercase={true}
                  isEndIcon={true}
                  icon={<ArrowForwardIosIcon />}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Hidden>
  );
};
