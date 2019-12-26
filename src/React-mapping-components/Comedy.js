import React from 'react';

import {Joke} from './Joke.js';
import {Jokes} from './JokesData';

export const Comedy = () => {
  
  var jokeComponents = Jokes.map((joke) => {
    return (
      <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />
    );
  })

  return (
    <div>
      {jokeComponents}
    </div>
  );
}