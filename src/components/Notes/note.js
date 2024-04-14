import React from 'react'
import './note.css'
import PopupTextarea from '../PopupTextarea/PopupTextarea'

function Note({onDelete}) {

    const [head,setHead] = React.useState('text');
    const [text,setText] = React.useState('text');
    const [time,setTime] = React.useState('text');
    const [open,setOpen] = React.useState(false);
    
    const handlePopup=()=>{
      setOpen((prev)=>!prev);   
    }

    const handleDeleteNote=()=>{
        onDelete();
    }

    

  return (
    <div className='note'>
        <div className="note_content">
            <div className='note_head'>
                {head}
            </div>
            <br></br>
            <br></br>
            <div className="note_textArea">
            {text}
            </div>
            <div 
            style={{
                fontSize:'smaller',
                fontWeight:500
                }}>time</div>
            
            </div>
            <button className= "note_editbutton" onClick={handlePopup}>EDIT</button>

            <PopupTextarea
                trigger={open}
                setHead={setHead}
                setTime={setTime}
                setText={setText}
                Head={head}
                Text={text}
                setOpen={setOpen}
            />

            <button className='note_deleteButton' onClick={handleDeleteNote}> Delete</button>     

    </div>
  )
}

export default Note
