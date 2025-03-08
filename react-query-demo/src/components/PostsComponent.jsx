import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
};
function PostsComponent() {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryFn: fetchPosts,
    queryKey: ["posts"],
    cacheTime: 200000,
    staletime: 30000,
  });
  if (isLoading) {
    return <div>Post Loading...</div>;
  }
  if (isError) {
    return <div>{error.message}</div>;
  }
  return (
    <>
      <h1>Posts</h1>
      <button onClick={() => refetch()}>Refresh</button>
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
