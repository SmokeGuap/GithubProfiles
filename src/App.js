import React, { useState } from 'react';
import GitHubUser from './components/GitHubUser';
import SearchForm from './components/SearchForm';
import UserRepos from './components/UserRepos.js';

function App() {
  const [login, setLogin] = useState('');
  const [repo, setRepo] = useState('');

  return (
    <div className='min-h-screen bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 text-white'>
      <SearchForm setLogin={setLogin} />
      <div className='container mx-auto grid grid-cols-2 gap-x-5'>
        {login && <GitHubUser login={login} />}
        {login && <UserRepos login={login} onSelect={setRepo} />}
      </div>
    </div>
  );
}
export default App;
