const apiConnect = apiKey => {

  let counter = 0;

  const getData = route => {
    return axios.get(`${route}?key=${apiKey}`);
  };

  const postData = (route, params) => {
    return axios.post(route, {
      body: JSON.stringify(params),
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
  };

  const increment = () => {
    counter += 1;
  }
  const readCounter = () => counter;
  return { getData, postData, increment, readCounter, counter };
};

const api = apiConnect('my-secret-key');

// No need to include the apiKey anymore
// api.getData('http://www.example.com/get-endpoint');
// api.postData('http://www.example.com/post-endpoint', { name: 'Joe' });

api.increment();
api.increment();
api.increment();
api.increment();

console.log(api)