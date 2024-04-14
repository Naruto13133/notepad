import React from 'react'
import Note from '../Notes/note'
// import TestCard from '../testCard/TestCard'
import './NoteContainer.css'
function NoteContainer(props) {
   

    // const [count , setCount] = React.useState(0);
    // const reverArray = (arr) => {
    //   const array = [];
  
    //   for (let i = arr.length - 1; i >= 0; --i) {
    //     array.push(arr[i]);
    //   }
  
    //   return array;
    // };
  

    const [children, setChildren] = React.useState([
      { id: 1}
    ]);

    // const notes = reverArray(props.notes);
    const handleDelete = (idToDelete)=> {
      setChildren(children.filter(child => child.id !== idToDelete));
    };

    

    const addNotes=()=>{
      setChildren([...children,{id:children[children.length-1].id+1}])
      console.log(children)
    }



    return (
      <div className="note-container">
        <h2>Notes</h2>
        
        <div className=" note-container_notes custom-scroll">
        <div> 
              <button onClick={addNotes}>AddButton</button>
          </div>
        <div className='b' style=
        {{
          display:"grid",
          gridTemplateColumns:'repeat(auto-fill, minmax(370px, 1fr))',
          justifyContent:'center',
          justifyItems:'center'
         }}>

      {children.map(child => (
        <Note 
        id={child.id}
          key={child.id} 
          child={child} 
          onDelete={() => handleDelete(child.id)} 
        />
      ))}

         {/* <Note handleDelete={handleDelete} key={(test) => {setCount(test+1) ; return test;}}/>
         <Note handleDelete={handleDelete} key={(test) => {setCount(test+1) ; return test;}}/>
         <Note handleDelete={handleDelete} key={(test) => {setCount(test+1) ; return test;}}/>
         <Note handleDelete={handleDelete} key={(test) => {setCount(test+1) ; return test;}} desginClassName = "designClass"/>
         <Note handleDelete={handleDelete} key={(test) => {setCount(test+1) ; return test;}} desginClassName = "designClass"/>
         <Note handleDelete={handleDelete} key={(test) => {setCount(test+1) ; return test;}} desginClassName = "designClass"/>
         <Note handleDelete={handleDelete} key={(test) => {setCount(test+1) ; return test;}} desginClassName = "designClass"/>
         <Note handleDelete={handleDelete} key={(test) => {setCount(test+1) ; return test;}} desginClassName = "designClass"/>
         <Note handleDelete={handleDelete} key={(test) => {setCount(test+1) ; return test;}} desginClassName = "designClass"/>
         <Note handleDelete={handleDelete} key={(test) => {setCount(test+1) ; return test;}}  />
         <Note handleDelete={handleDelete} key={(test) => {setCount(test+1) ; return test;}}  />
         <Note handleDelete={handleDelete} key={(test) => {setCount(test+1) ; return test;}}  />
         <Note handleDelete={handleDelete} key={(test) => {setCount(test+1) ; return test;}}  />
         <Note handleDelete={handleDelete} key={(test) => {setCount(test+1) ; return test;}}  />
         <Note handleDelete={handleDelete} key={(test) => {setCount(test+1) ; return test;}}  />
         <Note handleDelete={handleDelete} key={(test) => {setCount(test+1) ; return test;}}  />
         <Note handleDelete={handleDelete} key={(test) => {setCount(test+1) ; return test;}}  />
         <Note handleDelete={handleDelete} key={(test) => {setCount(test+1) ; return test;}}  />
         <Note handleDelete={handleDelete} key={(test) => {setCount(test+1) ; return test;}}  />
         <Note handleDelete={handleDelete} key={(test) => {setCount(test+1) ; return test;}}  />
         <Note handleDelete={handleDelete} key={(test) => {setCount(test+1) ; return test;}}  />
         <Note handleDelete={handleDelete} key={(test) => {setCount(test+1) ; return test;}}  />
         <Note handleDelete={handleDelete} key={(test) => {setCount(test+1) ; return test;}}  />
         <Note handleDelete={handleDelete} key={(test) => {setCount(test+1) ; return test;}}  />
         <Note handleDelete={handleDelete} key={(test) => {setCount(test+1) ; return test;}}  /> */}

         </div>
        </div>
      </div>
    );
  }
  
  
export default NoteContainer
