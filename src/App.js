import React, { useRef, useState } from 'react';
import GitHubUser from './components/GitHubUser';
import UserRepositories from './components/UserRepos.js';

function App() {
  const [login, setLogin] = useState('');
  const [repo, setRepo] = useState('');
  const inputRef = useRef(null);

  const handleSearch = () => {
    setLogin(inputRef.current.value);
  };

  return (
    <div>
      <input ref={inputRef}></input>
      <button onClick={handleSearch}>Set</button>
      {login && <GitHubUser login={login} />}
      {login && (
        <UserRepositories
          login={login}
          selectedRepo={repo}
          onSelect={setRepo}
        />
      )}
    </div>
  );
}
export default App;
