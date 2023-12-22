import Cookies from 'js-cookie';

const COOKIE_NAME = 'lucia_cookie';

export const setCookie = (value, expirationDays) => {
  Cookies.set(COOKIE_NAME, value, { expires: expirationDays });
};

export const getCookie = () => {
  return Cookies.get(COOKIE_NAME);
};

export const deleteCookie = () => {
  Cookies.remove(COOKIE_NAME);
};
