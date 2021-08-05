import { Avatar } from "@material-ui/core";
import React from "react";

import "./AdminNotifications.css";
const AdminNotifications = () => {
  return (
    <div className="admin__notifications">
      <Avatar className="admin__avatar" />
      <div className="admin__notifications__center">
        <h1>Verification</h1>
        <p>You are verified to this application</p>
      </div>
      <div className="admin__notifications__right">
        <h1>Admin</h1>
        <p>time</p>
      </div>
    </div>
  );
};

export default AdminNotifications;
