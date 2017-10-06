import axios from 'axios';

import { API_BASE, ACCESSTOKEN_VALUE_PREFIX } from './constants';

class HttpRequest {
  constructor(headers, options) {
    this.axios = axios.create({
      baseURL: API_BASE,
      timeout: 3000,
      headers,
      ...options
    });
    this.catchError = this.catchError.bind(this);
  }

  catchError(error) {
    throw new Error(error);
  }

  get({ url, params, adapter }) {
    return this.axios.get(url, { params, adapter }).catch(this.catchError);
  }

  post({ url, params, adapter }) {
    return this.axios.post(url, params, { adapter }).catch(this.catchError);
  }

  put({ url, params, adapter }) {
    return this.axios.put(url, params, { adapter }).catch(this.catchError);
  }

  delete({ url, params, adapter }) {
    return this.axios.delete(url, params, adapter).catch(this.catchError);
  }

  patch({ url, params, adapter }) {
    return this.axios.patch(url, params, { adapter }).catch(this.catchError);
  }
}

export const AuthenticatedRequest = (getState, options = {}) =>
  new HttpRequest(
    {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Auth-Token': `${ACCESSTOKEN_VALUE_PREFIX} ${getState().auth.token}`
    },
    options
  );

export const UnauthenticatedRequest = () =>
  new HttpRequest({
    Accept: 'application/json',
    'Content-Type': 'application/json'
  });

export const AuthenticatedFormDataRequest = (getState, options = {}) =>
  new HttpRequest(
    {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
      'X-Auth-Token': `${ACCESSTOKEN_VALUE_PREFIX} ${getState().auth.token}`
    },
    options
  );

export const UnauthenticatedFormDataRequest = (options = {}) =>
  new HttpRequest(
    {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data'
    },
    options
  );
