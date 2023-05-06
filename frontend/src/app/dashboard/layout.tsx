import Navbar from "@/component/global/Navbar";
import React from "react";

const layout = ({ children }) => {
  return <Navbar>{children}</Navbar>;
};

export default layout;
