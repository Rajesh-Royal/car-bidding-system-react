export const CustomersList = () => {
  return fetch("https://intense-tor-76305.herokuapp.com/merchants")
    .then((res) => res.json())
    .then((res) => {
      return res;
    })
    .catch((e) => false);
};
