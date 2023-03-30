import React from 'react';
import useFetch from '../hooks/useFetch';

function GitHubUser({ login }) {
  // const [data, setData] = useState();
  // const [error, setError] = useState();
  // const [loading, setLoading] = useState(false);

  const { data, loading, error } = useFetch(
    `https://api.github.com/users/${login}`
  );

  // useEffect(() => {
  //   if (!login) return;
  //   setLoading(true);
  //   fetch(`https://api.github.com/users/${login}`)
  //     .then((response) => response.json())
  //     .then(setData)
  //     .then(() => setLoading(false))
  //     .catch((error) => {
  //       alert(error);
  //     });
  // }, [login]);

  if (loading) return <h1>loading...</h1>;
  if (!data) return null;
  if (error) {
    alert(error);
  }

  return (
    <>
      {data.length == 2 ? (
        <div>{data.message}</div>
      ) : (
        <div className='githubUser'>
          <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
          <div>
            <h1>{data.login}</h1>
            {data.name && <p>{data.name}</p>}
            {data.location && <p>{data.location}</p>}
          </div>
        </div>
      )}
    </>
  );
}

export default GitHubUser;
