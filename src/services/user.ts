import Axios, { AxiosPromise } from 'axios';
import queryString from 'query-string';
import { API_ROOT } from './_utils/api-config';

interface ITokenResponse {
  access_token: string;
  expires_in: string;
  refresh_token: string;
  scope: string;
  token_type: string;
}

export const getToken = (username: string, password: string): AxiosPromise<ITokenResponse> => {
  return Axios.post<ITokenResponse>(
    `${API_ROOT}/auth/oauth/token`,
    queryString.stringify({
      username,
      password,
      scope: 'ui',
      grant_type: 'password'
    }),
    { headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic YnJvd3Nlcjo='
      },
    }
  )
};