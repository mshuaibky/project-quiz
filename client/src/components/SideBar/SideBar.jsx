import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import User from "../../context/User";
import "./SideBar.css";

function SideBar(PageContent) {
  const [show, setShow] = useState(true);
  const userContext = useContext(User);

  const navigate = useNavigate();

  const path = window.location.pathname;

  return (
    <div className={`SideBar ${show ? "show" : ""}`}>
      <div className="Bar">
        <div className="top">
          <div className="logoSection" onClick={() => setShow(!show)}>
            <img src="/logo.png" alt="" />
            {show && <h2>Quizo</h2>}
          </div>

          <div className="searchBar">
            <input type="text" placeholder="Search" />
          </div>

          <ul className="actions">
            <li className={path === "/" ? "on" : ""} onClick={() => navigate("/")}>
              <span className="material-symbols-outlined">home</span>
              {show && "Home"}
            </li>
            <li className={path === "/projects" ? "on" : ""} onClick={() => navigate("/projects")}>
              <span className="material-symbols-outlined">dataset</span> {show && "Projects"}
            </li>
            <li className={path === "/tasks" ? "on" : ""} onClick={() => navigate("/tasks")}>
              <span className="material-symbols-outlined">task</span> {show && "Tasks"}
            </li>
            <li className={path === "/stared" ? "on" : ""} onClick={() => navigate("/stared")}>
              <span className="material-symbols-outlined">stars</span> {show && "Stared"}
            </li>
          </ul>
        </div>

        <div className="bottom">
          <ul className="actions">
            <li className={path === "/settings" ? "on" : ""} onClick={() => navigate("/settings")}>
              <span className="material-symbols-outlined">settings</span> {show && "Settings"}
            </li>
            <li className={path === "/support" ? "on" : ""} onClick={() => navigate("/support")}>
              <span className="material-symbols-outlined">contact_support</span> {show && "Support"}
            </li>
          </ul>

          {userContext?.user && (
            <div className="userData">
              <img src="/img/Profile-Demo.jpg" alt="img" className="profile-img" />
              {show && (
                <div className="userInfo">
                  <b>{userContext?.user?.name}</b>
                  <p>
                    {userContext?.user?.email?.length > 15
                      ? `${userContext?.user?.email.slice(0, 15)}...`
                      : userContext?.user?.email}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="PageContent">{PageContent.children}</div>
    </div>
  );
}

export default SideBar;
