import {
  SET_AUTO_LOGOUT_MUTATION,
  SET_USER_TOKEN_DATA_MUTATION,
} from "../../storeconstants";

export default {
  [SET_USER_TOKEN_DATA_MUTATION](state, payload) {
    state.autoLogout = false;
    state.email = payload.email;
    state.token = payload.token;
    state.tokenNovo = payload.tokenNovo;
    state.usuarioId = payload.usuarioId;
  },

  [SET_AUTO_LOGOUT_MUTATION](state) {
    state.autoLogout = true;
  },
};
