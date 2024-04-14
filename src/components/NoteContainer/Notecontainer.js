import React from "react";
import Note from "../Notes/note";
// import TestCard from '../testCard/TestCard'

function NoteContainer(props) {
  const [children, setChildren] = React.useState([{ id: 1 }]);

  // const notes = reverArray(props.notes);
  const handleDelete = (idToDelete) => {
    if (children.length >= 1) {
      setChildren(children.filter((child) => child.id !== idToDelete));
    }
  };

  const addNotes = () => {
    if (children.length >= 1) {
      // console.log(children.length);
      setChildren([...children, { id: children[children.length - 1].id + 1 }]);
    } else if (children.length === 0) {
      let test = [];
      test.push({ id: 1 });
      // console.log(children.length);
      setChildren(test);
    }
    // console.log(children.length)
  };

  return (
    <div 
    style={{
      fontsize:'x-large',
      fontWeight:700
    }} className="note-container">
      <h2>Notes</h2>

      <div className=" note-container_notes custom-scroll">
        <div>
          <button 
          style={{
            border:'none',
            borderRadius:'20%',
            width :80,
            height:50,
            fontSize:'x-large',
            fontWeight:600,
            backgroundColor:'darksalmon',
            color:'khaki'
          }}
          onClick={addNotes}>ADD</button>
        </div>
        <div
          className="b"
          // This is how we make the display grid 
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(370px, 1fr))",
            justifyContent: "center",
            justifyItems: "center",
          }}
        >
          {children.map((child) => (
            <Note
              id={child.id}
              key={child.id}
              child={child}
              onDelete={() => handleDelete(child.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default NoteContainer;
