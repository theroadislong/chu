const getData = () => {
  const url = "http://localhost:3000/data.json";
  return fetch(url)
    .then(response => response.json())
    .catch(error => console.log(error));
};

export default getData;
