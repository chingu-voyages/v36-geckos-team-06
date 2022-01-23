// Get random avatar for landlord & occupant
const getAvatar = () => {
  const randomNumber = Math.floor(Math.random() * 2000 + 1);
  return `https://avatars.dicebear.com/api/open-peeps/${randomNumber}.svg`;
};

export default getAvatar;
