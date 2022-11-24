const apiClientFactory = (axiosClient) => {
  const doPost = async ({ url = '', data = null }) => {
    try {
      const response = await axiosClient.post(url, data);
      return response.data;
    } catch (e) {
      throw e;
    }
  };

  const doGet = async ({ url = '' }) => {
    try {
      const response = await axiosClient.get(url);
      return response.data;
    } catch (e) {
      throw e;
    }
  };

  const doPut = async ({ url = '', data = null }) => {
    try {
      const response = await axiosClient.post(url, data);
      return response.data;
    } catch (e) {
      throw e;
    }
  };

  const doDelete = async ({ url = '', data = null }) => {
    try {
      const response = await axiosClient.post(url, data);
      return response.data;
    } catch (e) {
      throw e;
    }
  };

  return { doPost, doGet, doPut, doDelete };
};

export default apiClientFactory