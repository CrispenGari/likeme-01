import "./Menu.css";
import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import { IoIosPeople } from "react-icons/io";
import { AiOutlineSetting } from "react-icons/ai";
import { MdPowerSettingsNew } from "react-icons/md";
import { RiChatSmile3Line } from "react-icons/ri";
const Menu = ({ open }) => {
  return (
    <div className={"menu"}>
      <MenuItem withUser subTitle="open your profile" />
      <MenuItem
        title="chats"
        Icon={RiChatSmile3Line}
        subTitle="open your chats"
      />
      <MenuItem
        title="friends"
        Icon={IoIosPeople}
        subTitle="discover new friends"
      />
      <MenuItem
        title="settings"
        Icon={AiOutlineSetting}
        subTitle="open your settings"
        dot
      />
      <MenuItem
        title="sign out"
        Icon={MdPowerSettingsNew}
        subTitle="sign out of the app"
        dot
      />
    </div>
  );
};

export default Menu;