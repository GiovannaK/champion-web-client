import { Button } from "@mui/material";
import { PaperComponent } from "../components/CustomPaper";
import { Layout } from "../components/Layout";
import { Topbar } from "../components/Topbar";

export default function Home() {
  return (
    <PaperComponent>
      <Topbar />
      <Layout title="Champion | Apoie artistas">

      </Layout>
    </PaperComponent>
  );
}
