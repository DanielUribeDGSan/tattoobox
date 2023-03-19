import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useTattoboxApi from "../../../hooks/use-tattobox-api";
import menu_data from "../../../layout/headers/menu-data";
import { get_user } from "../../../redux/features/auth-slice";

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
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { logout } = useTattoboxApi();

  const openMobileMenu = (menu) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };

  useEffect(() => {
    dispatch(get_user());
  }, [dispatch]);

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
          <div className="tpoffcanvas__content d-none d-sm-block">
            <p>{title}</p>
          </div>
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
                    <button onClick={logout} style={{ cursor: "pointer" }}>
                      <a>Cerrar sesión</a>
                    </button>
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div className="tpoffcanvas__contact">
            <span>Contact us</span>
            <ul>
              <li>
                <i className="fas fa-star"></i>{" "}
                <a
                  href="https://goo.gl/maps/abHegV4AoiJA6Syd8"
                  rel="noreferrer"
                  target="_blank"
                >
                  Melbone st, Australia, Ny 12099
                </a>
              </li>
              <li>
                <i className="fas fa-star"></i>
                <a href="tel:8180012345678">+81 800 123 456 78</a>
              </li>
              <li>
                <i className="fas fa-star"></i>
                <a href="mailto:Collaxmail@gmail.com">Collaxmail@gmail.com</a>
              </li>
            </ul>
          </div>
          <div className="tpoffcanvas__input d-none d-sm-block">
            <p>Get UPdate</p>
            <form className="p-relative" action="#">
              <input type="text" placeholder="Enter mail" />
              <button type="submit">
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
          <div className="tpoffcanvas__instagram d-none d-sm-block">
            <p>Check Instagram POst</p>
            <div className="tp-insta">
              <div className="row">
                {inst_imgs.map((img, i) => (
                  <div key={i} className="col-3 col-sm-3">
                    <a href="#">
                      <img src={img} alt="" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
