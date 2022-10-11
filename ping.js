/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable prettier/prettier */
const axios = require('axios');
const pings = require('ping');

const ping = async () => {
  const response = await axios({
    method: 'get',
    url: 'https://reactmastery.dev/',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  //console.log(response);
};
const ping2 = async () => {
  var hosts = ['https://reactmastery.dev/'];

  for (let host of hosts) {
    let res = await pings.promise.probe(host);

    return res;
  }
};

const main = async (l) => {
  for (let i = 0; i <= l; i++) {
    i == 1 && console.log(i);
    ret = await ping2();
    console.log(i);
    i == l && console.log('fin');
  }
};

main(10000);
