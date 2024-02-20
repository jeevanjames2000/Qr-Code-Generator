import { Grid } from "@mui/material";
import QrCodeGenerator from "./components/Projects/QrcodeGenerator";
import LoadMoreData from "./components/Projects/LoadmoreData";
import CenteredTabs from "./components/Projects/ProjectTabs";

export default function App() {
  return (
    <Grid container>
      <Grid item>
        {/* <QrCodeGenerator /> */}
        <CenteredTabs />
      </Grid>
    </Grid>
  );
}
