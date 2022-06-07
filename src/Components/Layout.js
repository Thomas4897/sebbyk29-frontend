import React from "react";
import Header from "./Header";
import "../App.css";

const Layout = (props) => {
  const { children } = props;
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        background: "#1C1B1F",
        // backgroundImage:
        //   'url("https://pbs.twimg.com/profile_banners/933728575714406400/1603965953/1500x500")',
        // backgroundRepeat: "no-repeat",
        // overflow: "scroll",
        // backgroundSize: "cover",
      }}
    >
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
