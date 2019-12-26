import React from 'react';

import {Joke} from './Joke.js';

export const Comedy = () => {
  return (
    <div>
      <Joke 
        question = "Guest to the waiter: “Can you bring me what the lady at the next table is having?” " 
        punchLine = "Waiter: “Sorry, sir, but I’m pretty sure she wants to eat it herself.”"
      />
      <Joke 
        question = "My old aunts would come and tease me at weddings, “Well Sarah? Do you think you’ll be next?” " 
        punchLine = "We’ve settled this quickly once I’ve started doing the same to them at funerals."
      />
      <Joke 
        question = "Job interviewer: 'And where would you see yourself in five years’ time Mr. Jeffries?'"  
        punchLine = "Mr. Jeffries: 'Personally I believe my biggest weakness is in listening.' "
      />
      <Joke  
        punchLine = "I dreamed I was forced to eat a giant marshmallow. When I woke up, my pillow was gone."
      />
    </div>
  );
}