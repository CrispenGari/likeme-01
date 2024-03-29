import "./Reset.css";

import React from "react";
import { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import firebase from "../../../../backend";
import { ActivityIndicator } from "../../../Common";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
const Reset = () => {
  const user = useSelector((state) => state.user);
  const [email, setEmail] = useState(user?.email ? user?.email : "");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [localUser, setLocalUser] = useState(null);

  const reset = (e) => {
    e.preventDefault();
    if (email) {
      setLoading(true);
      if (email) {
        firebase.db
          .collection("users")
          .where("email", "==", email.trim().toLowerCase())
          .get()
          .then((user) => {
            if (user.docs.length !== 0) {
              setLocalUser({ id: user?.docs[0]?.id, ...user?.docs[0]?.data() });
            } else {
              setLocalUser(null);
            }
          });
      } else {
        setLocalUser(null);
      }
      firebase.auth
        .sendPasswordResetEmail(email.trim().toLocaleLowerCase())
        .then(() => {
          setLoading(false);
          setError("");
          setMessage(
            `The reset password link has been sent to ${email}. Please check your email and reset your password.`
          );
          setEmail("");
        })
        .catch((error) => {
          setLoading(false);
          setMessage("");
          setError(error.message);
        });
    } else {
      setError("Email address is required.");
    }
  };
  return (
    <form className="settings__reset">
      {localUser ? (
        <div className="login__avatar__container">
          <p>The reset password link will be sent to this user's email</p>
          <Avatar
            alt={localUser ? localUser?.displayName : "LikeMe"}
            src={localUser ? localUser?.photoURL : null}
            className="login__avatar"
          />
        </div>
      ) : (
        localUser
      )}
      <div className="settings__reset__input">
        <p>Your password reset link will be send to this email.</p>
        <div
          className={`settings__reset__input__field ${
            error && "settings__reset__input__form--error"
          }`}
        >
          <HiOutlineMail className="settings__reset__input__icon" />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="email"
          />
        </div>
      </div>
      <p className="settings__reset__message">{message}</p>
      <p className="settings__reset__error">{error}</p>

      <button type="submit" onClick={reset}>
        RESET {loading ? <ActivityIndicator /> : null}
      </button>
    </form>
  );
};

export default Reset;
