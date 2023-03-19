import httpClient from "./httpClient";

const END_POINT = "/profile";

export const getProfile = async () => {
  // TODO: Remove this after implementing the API
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    data: {
      name: "John Doe",
      email: "john@doe.com",
      phone: "1234567890",
      address: "123, Main Street, New York, NY, 10001",
    },
  };
};

export const updateProfile = (profile) => {
  return httpClient.put(END_POINT, profile);
};
