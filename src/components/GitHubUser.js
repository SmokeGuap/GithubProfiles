import React from 'react';
import useFetch from '../hooks/useFetch';

function GitHubUser({ login }) {
  const { data, loading, error } = useFetch(
    `https://api.github.com/users/${login}`
  );

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
        <div className='mx-5 col-span-2 md:col-span-1 md:row-span-2 text-2xl justify-self-center md:justify-self-start'>
          <img
            className='rounded-full'
            src={data.avatar_url}
            alt={data.login}
            style={{ width: 200 }}
          />
          <div>
            <h1>Login: {data.login}</h1>
            {data.name && <p>Name: {data.name}</p>}
            {data.location && <p>Location: {data.location}</p>}
          </div>
        </div>
      )}
    </>
  );
}

export default GitHubUser;
