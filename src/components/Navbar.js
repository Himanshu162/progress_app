import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Button } from "@mui/material";
import { useKeycloak } from "@react-keycloak/web";

const Navbar = () => {
  const { keycloak } = useKeycloak();
  console.log("Keycloack", keycloak);

  // keycloak.init({ onLoad: "login-required" }).then(function (authenticated) {
  //   if (!authenticated) {
  //   } else {
  //   }
  // });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "#21201E" }}>
        <Toolbar variant="dense">
          {/* {!keycloak.authenticated && (
            <Button
              variant="outlined"
              style={{ color: "white", borderColor: "gray" }}
              onClick={() => keycloak.login()}
            >
              Login
            </Button>
          )} */}
          {keycloak.authenticated && (
            <Button
              variant="outlined"
              style={{
                color: "white",
                borderColor: "gray",
                justifyContent: "space-around",
              }}
              onClick={() => keycloak.logout()}
            >
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;
