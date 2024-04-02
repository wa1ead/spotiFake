import { gql, useQuery } from "@apollo/client";

const GET_PLAYLISTS = gql`
  query GetPlaylist($playlistId: ID!) {
    playlist(id: $playlistId) {
      id
      name
      description
    }
  }
`;

function Playlist() {
  const { loading, error, data } = useQuery(GET_PLAYLISTS, {
    variables: {
      playlistId: "6LB6g7S5nc1uVVfj00Kh6Z",
    },
  });

  console.log({ data });
  if (loading) return "Loading...!";
  if (error) return `Error ${error.message}`;
  const playlist = data.playlist as any;
  return (
    <div>
      <div>
        <h1>{playlist.name}</h1>
        <p>{playlist.description}</p>;
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <Playlist />
    </>
  );
}

export default App;
