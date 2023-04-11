/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-duplicate-props */
import { Box, Grid, Hidden } from "@mui/material";
import { Typography } from "../Typography";
import * as S from "./styles";
import React from "react";
import { Button } from "../Buttons/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useTheme } from "@themes/useTheme";

export const Banner = () => {
  const [theme] = useTheme();
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
              <Grid
                item
                xs={12}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <Typography
                  variant="subtitle1"
                  fontSizeMd={3.5}
                  fontSizeSm={3}
                  fontWeight={800}
                  color={theme.palette.text.primary}
                  isUppercase={true}
                  alignText="center"
                  text="Apoie criadores e acesse os melhores conteúdos"
                />
              </Grid>
              <S.Toolbar />
              <Grid item xs={12}>
                <Button
                  text="Apoie Já"
                  variant="contained"
                  width={"30%"}
                  fontWeight={800}
                  isUppercase={true}
                  isEndIcon={true}
                  size={2}
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
