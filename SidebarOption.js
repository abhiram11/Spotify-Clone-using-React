import React from "react";
// import Sidebar from "./Sidebar";
import "./SidebarOption.css";

//capital I means we'll pass Icon components!

function SidebarOption({ title, Icon }) {
  return (
    <div className="sidebarOption">
      {/*if we have icon then render Icon with classname */}
      {Icon && <Icon className="sidebarOption_icon"></Icon>}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
}

export default SidebarOption;
