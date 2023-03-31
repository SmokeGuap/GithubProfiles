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
      <div className='mx-auto w-full text-center text-xl'>
        <p className=''>Repository: {name}</p>
        <div className='flex justify-between'>
          <button className='p-4 border rounded-md hover:bg-purple-700' onClick={previous}>
            &lt;
          </button>
          <button className='p-4 border rounded-md hover:bg-purple-700' onClick={next}>
            &gt;
          </button>
        </div>
      </div>
      {login && name && <RepositoryReadme login={login} repo={name} />}
    </>
  );
}
export default RepoMenu;
