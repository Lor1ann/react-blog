import React from "react";
import Drawer from "../Drawer";
import SidePosts from "../SidePosts";
import Nav from "../Nav";

const Layout = () => {
  return (
    <>
      <div className="nav-flex">
        <Nav />
        <SidePosts />
      </div>
      <Drawer />
    </>
  );
};

export default Layout;
