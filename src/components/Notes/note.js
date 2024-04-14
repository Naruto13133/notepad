import React from "react";
import "./note.css";
import PopupTextarea from "../PopupTextarea/PopupTextarea";

function Note({ onDelete }) {
  const [head, setHead] = React.useState("Heading");
  const [text, setText] = React.useState("Notes...");
  const [time, setTime] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handlePopup = () => {
    setOpen((prev) => !prev);
  };

  const handleDeleteNote = () => {
    onDelete();
  };

  return (
    <div className="note">
      <div className="note_content">
        <div className="note_head">{head}</div>
        <br></br>
        <br></br>
        <div className="note_textArea">{text}</div>
        <div
          style={{
            fontSize: "smaller",
            fontWeight: 500,
          }}
        >
          {time}
        </div>
      </div>
      <button className="note_button note_editButtonPosition" onClick={handlePopup}>
        EDIT
      </button>

      <PopupTextarea
        trigger={open}
        setHead={setHead}
        setTime={setTime}
        setText={setText}
        Head={head}
        Text={text}
        setOpen={setOpen}
      />

      <button className="note_button note_deleteButtonPosition" onClick={handleDeleteNote}>
        Delete
      </button>
    </div>
  );
}

export default Note;
