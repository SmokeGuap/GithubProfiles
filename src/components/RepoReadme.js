import React, { useState, useEffect, useCallback } from 'react';

import ReactMarkdown from 'react-markdown';

export default function RepositoryReadme({ login, repo }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    if (!repo || !login) return;
    loadReadme(login, repo).catch(setError);
  }, [repo]);

  const loadReadme = useCallback(async (login, repo) => {
    setLoading(true);
    const uri = `https://api.github.com/repos/${login}/${repo}/readme`;
    const { download_url } = await fetch(uri).then((res) => res.json());
    const markdown = await fetch(download_url).then((res) => res.text());
    setMarkdown(markdown);
    setLoading(false);
  }, []);

  if (error) alert(error);
  if (loading) return <p>Loading...</p>;

  return (
    <div className='my-5 col-start-2 border rounded-md px-4 py-4'>
      <ReactMarkdown className='' children={markdown} />
    </div>
  );
}
