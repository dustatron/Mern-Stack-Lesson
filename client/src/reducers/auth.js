import { REGISTER_SUCCESS, REGISTER_FAIL } from '../actions/types';

const intialState = {
  token: localStorage.getItem('token'),
  isAuthenicated: null,
  loading: true,
  user: null,
};

export default function (state = intialState, action) {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isAuthenicated: true,
        loading: false,
      };
    case REGISTER_FAIL:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        ...payload,
        isAuthenicated: false,
        loading: false,
      };
    default:
      return state;
  }
}
