import useSWR from 'swr'

function App() {
  const url = "https://httpstat.us/200?sleep=2000";
  const headers = { Accept: "application/json" };

  const fetcher = (url) => fetch(url, { headers }).then((res) => res.json());
  const { data, error, isLoading } = useSWR(url, fetcher)

  if (error) return <p>Failed to load.</p>
  if (isLoading) return <p>Loading...</p>

  const status = data.description;

  return <>{status && <p>Status : {status}</p>}</>;
}

export default App;
