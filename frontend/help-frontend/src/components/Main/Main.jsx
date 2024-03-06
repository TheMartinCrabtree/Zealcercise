import React from "react";
import { UserScreen } from "../UserScreen";
import { AdminScreen } from "../AdminScreen";

const Main = (props) => {
  return (
    <div>
      <div>This is Main</div>
      <UserScreen />
      <AdminScreen />
    </div>
  );
};

export default Main;
