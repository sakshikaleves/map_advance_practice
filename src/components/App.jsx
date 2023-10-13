// import React from "react";
// import Card from './Card'
// import emojipedia from "../emojipedia"

// function Createemoji (entry)
// {
//   return (
//   <Card
//   key = {entry.id}
//   emoji = {entry.emoji}
//   name={entry.name}
//   />
//   )
// }

// function App()
// {

//   return (
//     <div>
//       <h1> <span>emojipedia</span></h1>
//       <dl className ="dictionary" {emojipedia.map(Createemoji)}</dl>
//     </div>
//   );
// }

// export default App;

import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";

function Createemoji(entry) {
  return (
    <Card
      key={entry.id}
      emoji={entry.emoji}
      name={entry.name}
      description={entry.description}
      meaning={entry.meaning}
    />
  );
}

function App() {
  const emojiComponents = emojipedia.map(Createemoji); // Map the data to components

  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojiComponents}</dl>
    </div>
  );
}

export default App;
