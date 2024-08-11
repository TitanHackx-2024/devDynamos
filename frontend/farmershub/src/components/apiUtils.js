export const apiCall = async (url, options) => {
    try {
      const response = await fetch(url, options);
  
      if (!response.ok) {
        const error = await response.text();
        throw new Error(error || response.statusText);
      }
  
      return await response.json();
    } catch (error) {
      console.error('API call error:', error);
      throw error; 
    }
  };

  export const postRequest = async (url, data) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
  
    return apiCall(url, options);
  };