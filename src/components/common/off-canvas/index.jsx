import Link from "next/link";
import React, { useState } from "react";
import useTattoboxAuthRegister from "../../../hooks/use-tattobox-auth-register";
import { useUser } from "../../../hooks/use-user";
import menu_data from "../../../layout/headers/menu-data";
import { Profile } from "./profile";

const sidebar_contents = {
  title: (
    <>
      We deploy world-class Creative <br /> on demand.
    </>
  ),
  inst_imgs: [
    "/assets/img/offcanvas/insta-1.jpg",
    "/assets/img/offcanvas/insta-2.jpg",
    "/assets/img/offcanvas/insta-4.jpg",
    "/assets/img/offcanvas/insta-4.jpg",
  ],
};
const { inst_imgs, title } = sidebar_contents;

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [navTitle, setNavTitle] = useState("");
  const { user } = useUser();

  const { logout } = useTattoboxAuthRegister();

  const openMobileMenu = (menu) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };

  return (
    <>
      <div className="tp-offcanvas-area">
        <div className={`tpoffcanvas ${isOpen ? "opened" : ""}`}>
          <div className="tpoffcanvas__logo">
            <Link href="/">
              <a>
                <img src="/assets/img/logo/logo_tattoobox.png" alt="" />
              </a>
            </Link>
          </div>
          <div
            className="tpoffcanvas__close-btn"
            onClick={() => setIsOpen(false)}
          >
            <button className="close-btn">
              <i className="fal fa-times-hexagon"></i>
            </button>
          </div>
          {/* <div className="tpoffcanvas__content d-none d-sm-block">
            <p>{title}</p>
          </div> */}
          <div className="mobile-menu d-lg-none">
            <div className="mm-menu">
              <ul>
                {menu_data.map((menu, i) => (
                  <li
                    key={i}
                    className={
                      !menu.has_dropdown
                        ? ""
                        : navTitle === menu?.title
                        ? "has-droupdown active"
                        : "has-droupdown"
                    }
                  >
                    {/* {menu.has_dropdown && (
                      <button onClick={() => openMobileMenu(menu.title)}>
                        {menu.title}{" "}
                      </button>
                    )}
                    <ul
                      className={
                        navTitle === menu?.title
                          ? "sub-menu active"
                          : "sub-menu"
                      }
                    >
                      {menu?.sub_menus?.map((sub, i) => (
                        <li key={i}>
                          <Link href={`${sub.link}`}>{sub.title}</Link>
                        </li>
                      ))}
                    </ul> */}
                    {!menu.has_dropdown && (
                      <Link href={menu.link}>{menu.title}</Link>
                    )}
                  </li>
                ))}
                {!user?.email && (
                  <>
                    <li>
                      <Link href="/registro">
                        <a>Registro - Login</a>
                      </Link>
                    </li>
                  </>
                )}
                {user?.email && (
                  <li>
                    <button
                      onClick={logout}
                      style={{ cursor: "pointer", padding: 0 }}
                    >
                      <a>Cerrar sesión</a>
                    </button>
                  </li>
                )}
              </ul>
            </div>
          </div>
          {user?.email && (
            <div className="tpoffcanvas__contact">
              <Profile />
            </div>
          )}
        </div>
      </div>

      {/* overlay start */}
      <div
        onClick={() => setIsOpen(false)}
        className={`body-overlay ${isOpen ? "apply" : ""}`}
      ></div>
      {/* overlay end */}
    </>
  );
};

export default Sidebar;
