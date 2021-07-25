import "./MenuItem.css";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import firebase from "../../backend";
import { v4 as uuid_v4 } from "uuid";
const MenuItem = ({
  content,
  withUser,
  title,
  Icon,
  subTitle,
  dot,
  setOpen,
}) => {
  const history = useHistory();
  const user = useSelector((state) => state.user);

  if (withUser) {
    return (
      <div
        className="menuitem"
        title={user?.displayName}
        onClick={() => {
          history.push(`/profile/${user?.uid}/${uuid_v4()}`);
          setOpen(false);
        }}
      >
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

  const navigate = (title) => {
    if (title === "sign out") {
      firebase.auth.signOut();
    } else if (title === "notifications") {
    } else if (title === "settings") {
      history.push("/settings");
    } else if (title === "notifications") {
    } else if (title === "friends") {
    } else if (title === "chats") {
    } else {
    }
    setOpen(false);
  };
  return (
    <div
      className={`menuitem ${!withUser && "menuitem--without-user"}`}
      title={title}
      onClick={() => {
        navigate(title);
      }}
    >
      <div className="menuitem__icon__button__badge">
        {dot ? (
          <span className={dot && "menuitem__icon__button__badge__dot"}></span>
        ) : (
          <span>{content}</span>
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
