import { makeReduxDuck } from './_utils';
import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { getToken as getData } from '../services/user';

interface IState {
  currentUser: null | IUser;
  isFetching: boolean;
  error: null | Error;
}

export interface IUser {
  username: string;
  authDetails: IAuthDetails;
}

export interface IAuthDetails {
  accessToken: string;
  refreshToken: string;
  tokenType: string;
}

export const initialState: IState = {
  currentUser: null,
  isFetching: false,
  error: null,
};

const duck = makeReduxDuck('user', initialState);

const getUserBegin = duck.defineAction<{}>(
  'GET_USER_BEGIN',
  () => ({
    isFetching: true,
    error: null,
  }),
);

const getUserSuccess = duck.defineAction<{user: IUser}>(
  'GET_USER_SUCCESS',
  (_, { user }) => ({
    currentUser: user,
    isFetching: false,
    error: null,
  }),
);

const getUserFail = duck.defineAction<{ error: Error }>(
  'GET_USER_FAIL',
  (_, { error }) => ({
    error,
    isFetching: false,
  }),
);

export default duck.getReducer();

export const getUser =
  (username: string, password: string): ThunkAction<void, null, null, Action> =>
    (dispatch) => {
      dispatch(getUserBegin({}));
      getData(username, password)
        .then((response) => {
          const { access_token, refresh_token, token_type } = response.data;
          dispatch(getUserSuccess({
            user: {
              username,
              authDetails: {
                accessToken: access_token,
                tokenType: token_type,
                refreshToken: refresh_token,
              },
            },
          }));
        })
        .catch((error) => {
          dispatch(getUserFail({ error: error.response.data.error_description }));
        });
    };
