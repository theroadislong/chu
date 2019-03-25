const getData = () => {
  const url = '/chu/data.json';
  return fetch(url)
    .then(response => response.json())
    .catch(error => console.log(error));
};

export default getData;
