import React, { useEffect } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import QRCode from "react-qr-code";
import {
  useLocalStorageGetItem,
  useLocalStorageSetItem,
} from "../CustomHooks/useLocalStorage";

const QrCodeGenerator = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  let value = useLocalStorageGetItem("hiir");
  console.log("value: ", value);
  useLocalStorageSetItem("oio", "09209230");

  function handleGenerateQrCode() {
    setQrCode(input);
    setInput("");
  }
  return (
    <>
      <Grid container>
        <Grid
          item
          container
          xs={12}
          display={"flex"}
          justifyContent={"center"}
          spacing={4}
        >
          <Grid item container justifyContent={"center"} xs={12}>
            <h1>QR CODE GENERATOR</h1>
          </Grid>
          <Grid
            item
            container
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            xs={12}
            spacing={2}
          >
            <Grid item alignItems={"center"}>
              <TextField
                onChange={(e) => setInput(e.target.value)}
                type="text"
                name="qr-code"
                value={input}
                placeholder="Enter your value here"
              />
            </Grid>
            <Grid item>
              <Button
                disabled={input && input.trim() !== "" ? false : true}
                variant="outlined"
                onClick={handleGenerateQrCode}
              >
                Generate
              </Button>
            </Grid>
          </Grid>
          <Grid
            item
            container
            xs={12}
            spacing={2}
            justifyContent={"center"}
            display={"flex"}
          >
            <Grid item>
              <QRCode
                id="qr-code-value"
                value={qrCode}
                size={400}
                bgColor="#fff"
              />
              <Typography variant="h4" align="center">
                Scan to View
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default QrCodeGenerator;
