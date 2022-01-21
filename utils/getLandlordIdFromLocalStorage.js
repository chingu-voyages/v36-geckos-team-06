const getLandlordIdFromLocalStorage = () => {
  let authLandlord;
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('authLandlord');
    if (saved != null) {
      authLandlord = JSON.parse(saved);
    }
  }
  return authLandlord;
};

export default getLandlordIdFromLocalStorage;
