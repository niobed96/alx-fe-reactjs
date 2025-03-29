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

export const searchUsersAdvanced = async ({
  query = "",
  location = "",
  minRepos = "",
}) => {
  try {
    let searchQuery = query;
    if (location) searchQuery += ` location:${location}`;
    if (minRepos) searchQuery += ` repos:>=${minRepos}`;

    const response = await api.get("/search/users", {
      params: {
        q: searchQuery.trim(),
        per_page: 10, // Limit results per page
        page: 1, // Initial page
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error searching users:", error);
    throw error;
  }
};
