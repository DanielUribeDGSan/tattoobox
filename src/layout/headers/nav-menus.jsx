import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import menu_data from "./menu-data";
import { get_user } from "../../redux/features/auth-slice";
import useTattoboxApi from "../../hooks/use-tattobox-api";

const NavMenus = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { logout } = useTattoboxApi();
  // get_user
  useEffect(() => {
    dispatch(get_user());
  }, [dispatch]);
  return (
    <ul>
      {menu_data.map((menu, i) => (
        <li
          key={i}
          className={`${menu.has_dropdown ? "has-dropdown" : ""}
      ${menu.mega_menu ? "has-mega-menu" : ""}`}
        >
          <Link href={menu.link}>
            <a>
              {menu.title}{" "}
              {menu.has_dropdown && <i className="fal fa-angle-down"></i>}
            </a>
          </Link>
          {menu.has_dropdown && (
            <ul className="submenu text-start">
              {menu.sub_menus.map((sub_m, i) => (
                <li key={i}>
                  <Link href={sub_m.link}>
                    <a>{sub_m.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
      {!user?.email && (
        <>
          <li>
            <Link href="/login">
              <a>Login</a>
            </Link>
          </li>
          <li>
            <Link href="/registro">
              <a>Registro</a>
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
  );
};

export default NavMenus;
