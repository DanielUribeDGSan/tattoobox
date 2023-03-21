import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_user } from "../redux/features/auth-slice";
import Router from "next/router";

export const useUser = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(get_user());
  }, [dispatch]);

  const verifyLoggedUser = () => {
    if (user?.email) Router.push("/");
  };

  return {
    user,
    verifyLoggedUser,
  };
};
