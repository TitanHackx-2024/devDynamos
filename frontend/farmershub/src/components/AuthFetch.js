// authFetch.js
export const authFetch = async (url, options = {}) => {
  const token = localStorage.getItem("authToken");

  const authHeaders = {
    Authorization: `Bearer ${token}`,
    ...options.headers,
  };

  return fetch(url, {
    ...options,
    headers: authHeaders,
  });
};
