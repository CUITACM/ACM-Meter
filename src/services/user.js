import { requestWithToken } from 'utils/request';
import { API_ROOT } from 'src/config';
import { withParams } from 'utils/qs';

export function fetchUsers(page, per, params = {}) {
  const query = { page, per, ...params };
  return requestWithToken(withParams(`${API_ROOT}/users`, query));
}

export function fetchUser(id) {
  return requestWithToken(`${API_ROOT}/users/${id}`);
}

export function updateUser(id, params) {
  const data = new FormData();
  Object.keys(params).forEach(key => { data.append(key, params[key]); });
  return requestWithToken(`${API_ROOT}/users/${id}`, {
    method: 'POST', body: data,
  });
}
