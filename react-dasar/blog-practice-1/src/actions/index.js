import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from "lodash";

export const fetchPostAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPost());

  const userIds = _.uniq(_.map(getState().posts, "userId"));
  console.log(userIds);

  userIds.forEach((id) => dispatch(fetchUsers(id)));
};

export const fetchPost = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUsers = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};
