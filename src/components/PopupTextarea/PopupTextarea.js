function PopupTextarea({trigger,setHead,setTime,setText,setOpen,Head,Text}) {

  const setVisible=()=>{
    setOpen((prev)=>!prev)
  }

  return (trigger)?(
    <div style={{
      // position:'relative',
      zIndex:'3'

    }} >
      <div className="PopupTextarea" style={{
              backgroundColor:'red',
              borderRadius:'20px',
              position:'fixed',
              width:'500px',
              height:'500px',
              gap:"100px",
              top: '40%',
              left: '50%',
              color:"red",
              transform: 'translate(-50%, -50%)',
              p: 1,
              bgcolor: 'background.paper',
              // background:"transparent",
              }}> 
        <div className='PopupTextarea_container'>
        <textArea
          style=
          {{
            backgroundColor:'red',
            zIndex:5,
            position:'relative',
            alignIter: 'center',
            width: '500px',
            height: '100px',
            backgroundColor: 'blue',
            fontSize: '20px',
            fondStyle: 'bold',
            // backgroundColor:'red',
            borderRadius:"20px",
            color:"white",
            Padding:'20px',
            border: 'none',
            background:"transparent"
          }}  placeholder="Heading"
          value={Head}
          onChange={(e)=>{setHead(e.target.value)}}
          />
        </div>
          

        <div className='PopupTextarea_container'>
            <textarea  
            className='PopupTextarea_textarea' 
            style=
            {{
              borderRadius:'20px',
              padding:'20px',
              width: '500px',
            height: '400px',
              backgroundColor:"aqua",
              border:'none'
            }}
            value={Text}
            onChange={(e)=>{setText(e.target.value)}}
            />
        </div>
        
      <button className='PopupTextarea_closebtn' onClick={setVisible}>CLose</button>
      </div>
    </div>
  ):"";
}

export default PopupTextarea


