// Get random avatar for landlord
const getAvatar = () => {
  const randomNumber = Math.floor(Math.random() * 2000 + 1);
  return `https://avatars.dicebear.com/api/big-smile/${randomNumber}.svg`;
};

export default getAvatar;
