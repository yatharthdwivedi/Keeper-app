import React, { useState } from "react";
import Heading from "./Header";
import Footer from "./Footer";
import Note from "./Note";
// import notes from "../notes";
import CreateArea from "./CreateArea";
import notes from "../notes";

// function note(notes) {
//    return ( <Note
//     key = {notes.key}
//     title = {notes.title}
//     content = {notes.content} />);
// }

function App() {
  const [item, setItem] = useState([]);

  function addItem(event, title, content) {
    setItem((prevItem) => {
      return [
        ...prevItem,
        {
          title: title,
          content: content,
        },
      ];
    });
    event.preventDefault();
  }

  function deleteItem(id) {
    console.log("Deleting");
    setItem((prevItem) => {
      return prevItem.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Heading />

      <CreateArea onAdd={addItem} />
      {item.map((notes, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={notes.title}
            content={notes.content}
            onDelete={deleteItem}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
