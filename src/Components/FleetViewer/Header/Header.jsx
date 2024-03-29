import React from "react";
import "./Header.css";
import { Avatar, IconButton } from "@material-ui/core";
import { FiMoreVertical } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";
import helperFunctions from "../../../utils/helperfunctions";
import { useSelector } from "react-redux";
const Header = ({
  setDisplayName,
  fleets,
  setCurrentFleetIndex,
  currentFleetIndex,
}) => {
  const user = useSelector((state) => state.users).filter(
    (user) => fleets[currentFleetIndex]?.displayName === user?.displayName
  )[0];
  const currentUser = useSelector((state) => state.user);
  return (
    <div className="fleet__header">
      <div className="fleet__header__bottom">
        <div className="fleet__header__bottom__left">
          <Avatar
            src={user?.photoURL}
            alt={user?.displayName}
            className="fleet__header__avatar"
          />
          <div className="fleet__info">
            <p>
              @
              {currentUser?.displayName ===
              fleets[currentFleetIndex]?.displayName
                ? "you"
                : fleets[currentFleetIndex]?.displayName}
            </p>
            {fleets[currentFleetIndex]?.timestamp ? (
              <span>
                {helperFunctions.timeString(
                  helperFunctions.timestampToTime(
                    fleets[currentFleetIndex]?.timestamp
                  )
                )}
              </span>
            ) : null}
          </div>
        </div>
        <div className="fleet__header__bottom__controls">
          <IconButton title="more">
            <FiMoreVertical className="fleet__header__bottom__icon" />
          </IconButton>
          <IconButton
            title="close"
            onClick={() => {
              setDisplayName("");
              setCurrentFleetIndex(0);
            }}
          >
            <AiFillCloseCircle className="form__close__button__icon" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
