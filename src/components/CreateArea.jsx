import React, { useState } from "react";

function CreateArea(props) {
  const [inputTitle, setTitle] = useState("");
  const [inputContent, setContent] = useState("");

  function handleTitle(event) {
    const newTitle = event.target.value;

    setTitle(newTitle);
  }

  function handleContent(event) {
    const newContent = event.target.value;
    setContent(newContent);
  }

  return (
    <div>
      <form>
        <input
          onChange={handleTitle}
          value={inputTitle}
          name="title"
          type="text"
          placeholder="Title"
        ></input>
        <input
          onChange={handleContent}
          value={inputContent}
          name="Content"
          type="text"
          placeholder="Take a note"
        ></input>
        <button
          onClick={(event) => {
            props.onAdd(event, inputTitle, inputContent);
            setTitle("");
            setContent("");
            event.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
