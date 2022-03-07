import React from "react";
import { useSelector } from "react-redux";
import { CgProfile } from "react-icons/cg";
import { MdOutlineEmail } from "react-icons/md";


const UserInfo = ({ sessionUser }) => {
  const userId = useSelector(state => state?.session.user?.id)

  return (
    <div className="drop-downmenu">
        <p className="textProfileDropDown"><CgProfile id='profile-icon' />{sessionUser.username}</p>
        <p className="textProfileDropDown"><MdOutlineEmail id='profile-icon' />{sessionUser.email}</p>
    </div>

  )
}

export default UserInfo