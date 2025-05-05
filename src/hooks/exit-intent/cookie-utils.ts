
/**
 * Utility functions for managing cookies related to exit intent popup
 */

/**
 * Sets a cookie with the specified name, value, and expiration days
 */
export const setCookie = (name: string, value: string, days: number) => {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=/`;
  console.log(`Cookie ${name} set for ${days} days`);
};

/**
 * Gets the value of a cookie by name
 * @returns The cookie value or empty string if not found
 */
export const getCookie = (name: string) => {
  const cookieName = `${name}=`;
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.indexOf(cookieName) === 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }
  return '';
};
