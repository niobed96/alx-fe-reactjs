import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) throw new Error("Failed to fetch posts");
  return response.data;
};
function PostsComponent() {
  const { data, isLoading, error } = useQuery({
    queryFn: fetchPosts,
    queryKey: ["posts"],
  });
  if (isLoading) {
    return <div>Post Loading...</div>;
  }
  if (error) {
    return <div>error fetching post:{error.message}</div>;
  }
  return (
    <>
      <h1>Posts</h1>
      <button onclick={() => refetch()}>Refresh</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default PostsComponent;
