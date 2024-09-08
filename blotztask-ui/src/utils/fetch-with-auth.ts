import Cookies from "js-cookie"; // Use js-cookie for client-side cookies

export const fetchWithAuth = async (url: string, options: RequestInit = {}) => {
  // Get the auth token from client-side cookies
  const accessToken = Cookies.get('authToken');
  console.log('accessToken', accessToken);

  if (!accessToken) {
    throw new Error('Access token is missing');
  }

  // Merge headers and include Authorization
  const authHeaders = {
    ...options.headers,
    'Authorization': `Bearer ${accessToken}`,
  };

  // Return the fetch call with the attached headers
  return fetch(url, {
    ...options,
    headers: authHeaders,
  });
};
