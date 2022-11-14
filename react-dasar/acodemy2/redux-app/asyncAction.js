const redux = require("redux");
const applyMiddleware = redux.applyMiddleware;
const middlewareThunk = require("redux-thunk").default;
const axios = require("axios");

// action creator

const FETCH_USER_REQ = "FETCH_USER_REQ";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_ERROR = "FETCH_USER_ERROR";

const initialUsers = {
  loading: false,
  user: [],
  error: "",
};

// action creator

const fetchUserReq = () => {
  return {
    type: FETCH_USER_REQ,
  };
};

const fetchUserSuccess = (user) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: user,
  };
};

const fetchUserError = (error) => {
  return {
    type: FETCH_USER_ERROR,
    payload: error,
  };
};

const fetchUser = () => {
  return async (dispatch) => {
    dispatch(fetchUserReq());

    try {
      const { data } = await axios.get(
        "https://jsonplaceholdesr.typicode.com/users"
      );
      dispatch(fetchUserSuccess(data));
    } catch (e) {
      dispatch(fetchUserError(e));
    }
    // axios
    //   .get(`https://jsonplaceholder.typicode.com/users`)
    //   .then((res) => {
    //     dispatch(fetchUserSuccess(res.data));
    //   })
    //   .catch((err) => dispatch(fetchUserError(err.message)));
  };
};

// reducer
const userReducer = (state = initialUsers, action) => {
  switch (action.type) {
    case FETCH_USER_REQ:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };

    case FETCH_USER_ERROR:
      return {
        loading: false,
        error: action.payload,
        user: [],
      };

    default:
      return state;
  }
};

// store

const store = redux.createStore(userReducer, applyMiddleware(middlewareThunk));

store.subscribe(() => console.log(store.getState()));

store.dispatch(fetchUser());
