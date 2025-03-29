import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_GITHUB_API_URL || "https://api.github.com",
  headers: {
    Authorization: import.meta.env.VITE_APP_GITHUB_API_KEY
      ? `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`
      : undefined,
    Accept: "application/vnd.github.v3+json",
  },
});

export const fetchUserData = async (username) => {
  try {
    const response = await api.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};
