import Axios from "axios";
import SignupValidations from "../../../services/SignupValidations";
import {
  AUTH_ACTION,
  LOGIN_ACTION,
  LOGOUT_ACTION,
  SIGNUP_ACTION,
  AUTO_LOGIN_ACTION,
  AUTO_LOGOUT_ACTION,
  SET_AUTO_LOGOUT_MUTATION,
  SET_USER_TOKEN_DATA_MUTATION,
} from "../../storeconstants";

let timer = "";
export default {
  [LOGOUT_ACTION](context) {
    context.commit(SET_USER_TOKEN_DATA_MUTATION, {
      email: null,
      token: null,
      tokenNovo: null,
      usuarioId: null,
      isEnglish: false,
    });
    localStorage.removeItem("userData");
    if (timer) {
      clearTimeout(timer);
    }
  },

  [AUTO_LOGOUT_ACTION](context) {
    context.dispatch(LOGOUT_ACTION);
    context.commit(SET_AUTO_LOGOUT_MUTATION);
  },

  async [SIGNUP_ACTION](context, payload) {
    return context.dispatch(AUTH_ACTION, {
      ...payload,
      url: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA9HEOZrRHZP026VQObeDz2PVD_GLpMV50`,
    });
  },

  async [LOGIN_ACTION](context, payload) {
    return context.dispatch(AUTH_ACTION, {
      ...payload,
      url: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA9HEOZrRHZP026VQObeDz2PVD_GLpMV50`,
    });
  },

  [AUTO_LOGIN_ACTION](context) {
    let userDataString = localStorage.getItem("userData");

    if (userDataString) {
      let userData = JSON.parse(userDataString);

      context.commit(SET_USER_TOKEN_DATA_MUTATION, userData);
    }
  },

  async [AUTH_ACTION](context, payload) {
    let postData = {
      email: payload.email,
      password: payload.password,
      returnSecureToken: true,
    };
    let response = "";
    try {
      response = await Axios.post(payload.url, postData);
    } catch (err) {
      let errorMessage = SignupValidations.getErrorMessageFromCode(
        err.response.data.error.errors[0].message
      );
      throw errorMessage;
    }

    if (response.status === 200) {
      let tokenData = {
        email: response.data.email,
        token: response.data.idToken,
        tokenNovo: response.data.tokenNovo,
        usuarioId: response.data.localId,
        isEnglish: Math.floor(Math.random() * 100 + 1) > 50 ? true : false,
      };
      localStorage.setItem("userData", JSON.stringify(tokenData));
      context.commit(SET_USER_TOKEN_DATA_MUTATION, tokenData);
    }
  },
};
