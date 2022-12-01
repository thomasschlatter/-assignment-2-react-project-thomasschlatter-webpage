import "./App.css";

import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import {
  MemoryRouter,
  Route,
  Routes,
  Link,
  matchPath,
  useLocation,
} from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import { Helmet } from "react-helmet";
import { Flashcard } from "./components/Flashcard";
import { Translate } from "./components/Translate";
import { About } from "./components/About";
import { Home } from "./components/Home";

function Router(props) {
  const { children } = props;
  if (typeof window === "undefined") {
    return <StaticRouter location="/home">{children}</StaticRouter>;
  }

  return (
    <MemoryRouter initialEntries={["/home"]} initialIndex={0}>
      {children}
    </MemoryRouter>
  );
}

Router.propTypes = {
  children: PropTypes.node,
};

function useRouteMatch(patterns) {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
}

function MyTabs() {
  // You need to provide the routes in descendant order.
  // This means that if you have nested routes like:
  // users, users/new, users/edit.
  // Then the order should be ['users/add', 'users/edit', 'users'].
  const routeMatch = useRouteMatch([
    "/home",
    "/flashcard",
    "/translate",
    "/about",
  ]);
  const currentTab = routeMatch?.pattern?.path;

  return (
    <Tabs value={currentTab}>
      <Tab label="Home" value="/home" to="/home" component={Link} />
      <Tab
        label="Flashcard"
        value="/flashcard"
        to="/flashcard"
        component={Link}
      />
      <Tab
        label="Translate"
        value="/translate"
        to="/translate"
        component={Link}
      />
      <Tab label="About" value="/about" to="/about" component={Link} />
    </Tabs>
  );
}

function CurrentRoute() {
  const location = useLocation();

  return (
    <Typography variant="body2" sx={{ pb: 2 }} color="text.secondary">
      Current route: {location.pathname}
    </Typography>
  );
}

export function App() {
  return (
    <div>
      <Helmet>
        {" "}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        ></meta>
      </Helmet>
      <Router>
        <Box sx={{ width: "100%" }}>
          <MyTabs />
          <Routes>
            <Route path="*" element={<CurrentRoute />} />
            <Route path="home" element={<Home />} />
            <Route path="flashcard" element={<Flashcard />} />
            <Route path="translate" element={<Translate />} />
            <Route path="about" element={<About />} />
          </Routes>
        </Box>
      </Router>
    </div>
  );
}

export default App;
