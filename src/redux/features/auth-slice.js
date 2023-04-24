import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage, setLocalStorage } from "../../utils/localstorage";

const initialState = {
  allUsers: [],
  user: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    add_user: (state, { payload }) => {
      state.allUsers.push(payload);
      state.user = payload;
      setLocalStorage("user", state.user);
    },
    set_id_profile: (state, { payload }) => {
      const {
        idPerfil,
        idTipoPerfil,
        userName,
        avatar,
        nameProfile: name,
      } = payload;

      state.user = {
        ...state.user,
        idPerfil,
        idTipoPerfil,
        userName,
        avatar,
        name,
      };
      setLocalStorage("user", state.user);
    },

    set_data_supplementary: (state, { payload }) => {
      const {
        name: nameUser,
        lastNamePaternal,
        lastNameMaternal,
        mobileNumber,
        userName,
        birthDate,
      } = payload;

      const name = nameUser + " " + lastNamePaternal + " " + lastNameMaternal;

      state.user = {
        ...state.user,
        name,
        lastNamePaternal,
        lastNameMaternal,
        mobileNumber,
        userName,
        birthDate,
      };
      setLocalStorage("user", state.user);
    },
    user_info: (state, { payload }) => {
      state.user = payload;
      setLocalStorage("user", state.user);
    },
    sign_out: (state, { payload }) => {
      state.user = {};
      setLocalStorage("user", state.user);
    },
    get_user: (state, { payload }) => {
      state.user = getLocalStorage("user");
    },
  },
});

export const {
  user_info,
  add_user,
  set_id_profile,
  sign_out,
  get_user,
  set_data_supplementary,
} = authSlice.actions;

export default authSlice.reducer;
