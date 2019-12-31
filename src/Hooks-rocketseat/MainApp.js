import React, { useState, useEffect } from 'react';

export function MainApp() {

  // Define state with 'useState()':
  const [repositories, setRepositories] = useState([]);
  const [numberOfFavs, setNumberOfFavs] = useState(0);

  // EXAMPLE OF FUNCTION
  // function addRepository() {
  //   setRepositories([
  //     ...repositories,
  //     { 
  //       id: Math.random(),
  //       name: 'New repo'
  //     }
  //   ]);
  // }

  // useEffect to execute a function when the dependecy "[]" changes
  useEffect(() => {
    async function getRepositories() {
      const response = await fetch(`https://api.github.com/users/thiagojacinto/repos`);
      const data = await response.json();

      setRepositories(data);
    }
    getRepositories();
  }, []); // empty dependecy = one load (like componentDidMount() )

  // Mark as favourite
  function handleFavourite(id) {
    const newRepositories = repositories.map(
      repo => {
        return (repo.id === id) ?
          {
            ...repo,
            isFavourite: !repo.isFavourite  // It changes its value, true -> false -> true...
          }
          : repo; 
      }
    );
    return setRepositories(newRepositories);
  }

  // counting number of favs:
  useEffect(() => {
    const filteredRepos = repositories.filter(repo => repo.isFavourite);
    setNumberOfFavs(filteredRepos.length); 
  }, [repositories])

  return (
    <>
      <h3>Selected favourites: {numberOfFavs}</h3>
      <ul>
        {repositories && repositories.map(repo => (
          <li key={repo.id}>
            {repo.name}
            {repo.isFavourite && <span> (is fav!)</span>}
            <button onClick={() => handleFavourite(repo.id)}>
              Fav
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
