import React, { useState, useEffect } from "react";
import { NavItem, NavLink, DropdownToggle, UncontrolledDropdown, DropdownMenu, DropdownItem } from "reactstrap";
import axios from "axios";

import style from "./style.scss";

const Header = (props) => {
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const fetchUserId = async () => {
      const { data } = await axios.get("/api/account/id");
      setUserId(data);
    };
    fetchUserId();
  }, []);

  const signOut = () => {
    window.location.href = "/api/account/signout";
  };

  return (
    <div className={style.Header}>
      <UncontrolledDropdown>
        <DropdownToggle caret tag="a" className={style.Header__dropdown}>
          {userId}
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem onClick={() => props.setView("file")}>파일매니저</DropdownItem>
          <DropdownItem onClick={() => props.setView("chatting")}>채팅</DropdownItem>
          <DropdownItem onClick={signOut}>로그아웃</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </div>
  );
};

export default Header;
