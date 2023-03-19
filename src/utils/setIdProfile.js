import { useEffect } from "react";
import useTattoboxApi from "../hooks/use-tattobox-api";
import { getUser } from "./getUser";

export const setIdProfile = () => {
  const user = getUser();
  const { getIdProfile } = useTattoboxApi();

  useEffect(() => {
    if (user.idParte && !user?.perfil) {
      getIdProfile(user.idParte);
    }
  }, []);
};
