import React from "react";

import { Banner } from "../components/Banner";
import { Categories } from "../components/Categories";
import { PaperComponent } from "../components/CustomPaper";
import { Layout } from "../components/Layout";
import { Topbar } from "../components/Topbar";
import { Typography } from "../components/Typography";
import { Container } from "../components/Container";

export const IndexPageWrapper = () => {
  return (
    <PaperComponent>
      <Topbar />
      <Layout title="Champion | Apoie artistas">
        <Banner />
        <Container
          minHeight="30vh"
          maxHeight="30vh"
          mt={15}
          smMt={10}
        >
          <Typography
            alignText="left"
            color="primary"
            fontSizeMd={2.8}
            fontSizeSm={2.5}
            fontWeight={900}
            isUppercase={true}
            text="Seja um Champion"
            variant="h1"
          />
          <Categories />
        </Container>
      </Layout>
    </PaperComponent>
  );
};
