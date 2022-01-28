/* eslint-disable no-undef */
// When a landlord signs in or creates an account, some of his information is stored in local storage. This function gets those details from local storage
const getUserFromLocalStorage = (user) => {
  let authUser;
  // This ensures that we are in the browser environment before we access local storage, without this check we would always be returning redefined from local storage
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(user);
    if (saved != null) {
      authUser = JSON.parse(saved);
    }
  }
  // We are returning the parsed value from local storage so we cn access the values in the client
  return authUser;
};

export default getUserFromLocalStorage;
