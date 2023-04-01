import { Button } from "@mui/material";
import { Banner } from "../components/Banner";
import { Categories } from "../components/Categories";
import { PaperComponent } from "../components/CustomPaper";
import { Layout } from "../components/Layout";
import { Topbar } from "../components/Topbar";

export default function Home() {
  return (
    <PaperComponent>
      <Topbar />
      <Layout title="Champion | Apoie artistas">
        <Banner />
        <Categories />
      </Layout>
    </PaperComponent>
  );
}
