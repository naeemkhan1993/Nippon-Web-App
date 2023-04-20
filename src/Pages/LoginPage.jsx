import React, { useState } from "react";

import useResponsivesizes from "../Hooks/useResponsivesizes";
import {
  Stack,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
} from "@mui/material";
import { useDataContext } from "../Contexts/DataContext";

export const LoginPage = () => {
  const { font_size, lg, md, sm, xl } = useResponsivesizes();
  const [id, setID] = useState("");
  const [pass, setPass] = useState("");
  const { setCurrentUser } = useDataContext();

  const handle_submit = (e) => {
    e.preventDefault();
    setCurrentUser({});
    console.log("Submitted");
  };

  return (
    <form onSubmit={handle_submit}>
      <Stack
        className="Login_Body"
        justifyContent={"space-around"}
        sx={{
          height: "100vh",
          width: md ? "500px" : "80vw",
          // backgroundColor: "blue",
        }}
      >
        <Stack>
          <p style={{ fontSize: font_size }}>Welcome</p>
          <p>Nippon Steel Engineering</p>
        </Stack>
        <Stack spacing={2}>
          <TextField
            type="text"
            required
            label="User ID"
            value={id}
            onChange={(e) => setID(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            required
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Remamber Me"
          />
        </Stack>
        <Stack>
          <Button type="submit" variant="contained" sx={{ padding: 2 }}>
            Login
          </Button>
        </Stack>
      </Stack>
    </form>
  );
};
export default LoginPage;
