import React, { useEffect } from 'react';
import useIterator from '../hooks/useIterator';
import RepositoryReadme from './RepoReadme';

function RepoMenu({ login, repositories, onSelect }) {
  const [{ name }, previous, next] = useIterator(repositories);
  useEffect(() => {
    if (!name) return;
    onSelect(name);
  }, [name]);
  return (
    <>
      <div>
        <button onClick={previous}>&lt;</button>
        <p>{name}</p>
        <button onClick={next}>&gt;</button>
      </div>
      <RepositoryReadme login={login} repo={name} />
    </>
  );
}
export default RepoMenu;
