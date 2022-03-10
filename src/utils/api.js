const mocks = {
    auth: { POST: { token: "123456" } },
    "user/me": { GET: { name: "doggo", title: "sir" } }
  };
  
  const apiCall = ({ url, method }) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          resolve(mocks[url][method || "GET"]);
          console.log(`Mocked '${url}' - ${method || "GET"}`);
          console.log("response: ", mocks[url][method || "GET"]);
        } catch (err) {
          reject(new Error(err));
        }
      }, 1000);
    });
  
  export default apiCall;