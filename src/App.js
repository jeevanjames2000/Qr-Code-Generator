import { Grid } from "@mui/material";
import QrCodeGenerator from "./components/QrcodeGenerator";

export default function App() {
  return (
    <Grid container>
      <Grid item>
        <QrCodeGenerator />
      </Grid>
    </Grid>
  );
}
