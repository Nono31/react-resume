import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const resume =  require('./resume.json');


class ResumeApi {
  static getResume() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign({}, resume));
      }, delay);
    });
  }
}

export default ResumeApi;
