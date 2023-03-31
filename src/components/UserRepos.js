import React from 'react';
import useFetch from '../hooks/useFetch';
import RepoMenu from './RepoMenu';

function UserRepos({ login, onSelect }) {
  const { data, loading, error } = useFetch(
    `https://api.github.com/users/${login}/repos`
  );
  if (loading) return <h1>loading...</h1>;
  if (!data) return null;
  if (error) {
    alert(error);
  }
  return <RepoMenu login={login} repositories={data} onSelect={onSelect} />;
}
export default UserRepos;
