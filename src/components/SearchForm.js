import React, { useRef } from 'react';

function SearchForm({ setLogin }) {
  const inputRef = useRef(null);

  const handleSearch = () => {
    setLogin(inputRef.current.value);
  };
  return (
    <div className='mx-auto py-20 w-2/3 sm:w-1/2 lg:w-1/4 flex justify-center'>
      <input
        placeholder='Enter user'
        className='border rounded-md w-3/4 px-4 py-2 bg-inherit focus:outline-none placeholder-gray-500'
        ref={inputRef}
      ></input>
      <button
        className='ml-2 w-1/4 border rounded-md hover:bg-purple-700'
        onClick={handleSearch}
      >
        Choose
      </button>
    </div>
  );
}
export default SearchForm;
