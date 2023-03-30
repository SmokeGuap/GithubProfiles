import React from 'react';
import useFetch from '../hooks/useFetch';
import RepoMenu from './RepoMenu';

function UserRepositories({ login, selectedRepo, onSelect }) {
  const { data, loading, error } = useFetch(
    `https://api.github.com/users/${login}/repos`
  );
  if (loading) return <h1>loading...</h1>;
  if (!data) return null;
  if (error) {
    alert(error);
  }
  return (
    <RepoMenu
      login={login}
      repositories={data}
      selectedRepo={selectedRepo}
      onSelect={onSelect}
    />
  );
}
export default UserRepositories;
