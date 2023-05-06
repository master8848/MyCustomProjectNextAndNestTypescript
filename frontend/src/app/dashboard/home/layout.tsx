import HomeNav from "@/component/global/HomeNav";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <HomeNav>{children}</HomeNav>
    </>
  );
};

export default layout;
