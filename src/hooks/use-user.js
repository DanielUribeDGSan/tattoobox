import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_user } from "../redux/features/auth-slice";

export const useUser = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(get_user());
  }, [dispatch]);

  return {
    user,
  };
};
