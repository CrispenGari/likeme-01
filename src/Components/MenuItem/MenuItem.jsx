import "./MenuItem.css";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Avatar } from "@material-ui/core";
const MenuItem = ({ withUser, title, Icon, subTitle, dot }) => {
  const history = useHistory();
  const user = useSelector((state) => state.user);

  if (withUser) {
    return (
      <div className="menuitem" title={user?.displayName}>
        <Avatar
          className="menuitem__avatar"
          src={user?.photoURL}
          alt={user?.displayName}
        />
        <div>
          <h1>{user?.displayName}</h1>
          <p>{subTitle}</p>
        </div>
      </div>
    );
  }
  return (
    <div
      className={`menuitem ${!withUser && "menuitem--without-user"}`}
      title={title}
    >
      <div className="menuitem__icon__button__badge">
        {dot ? (
          <span className={dot && "menuitem__icon__button__badge__dot"}></span>
        ) : (
          <span>10</span>
        )}
        <Icon className="menuitem__icon" />
      </div>
      <div>
        <h1>{title}</h1>
        <p>{subTitle}</p>
      </div>
    </div>
  );
};

export default MenuItem;