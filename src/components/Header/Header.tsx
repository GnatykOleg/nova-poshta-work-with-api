import React from "react";
import { Link } from "react-router-dom";
import { Button, AppBar, Toolbar } from "@mui/material";
import { useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between" }} component={"ul"}>
        <li>
          <Button
            sx={{ textAlign: "center" }}
            component={Link}
            to="/"
            color={pathname === "/" ? "warning" : "inherit"}
          >
            Перевірити ТТН
          </Button>
        </li>
        <li>
          <Button
            sx={{ textAlign: "center" }}
            component={Link}
            to="/departments"
            color={pathname === "/departments" ? "warning" : "inherit"}
          >
            Список відділень
          </Button>
        </li>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
