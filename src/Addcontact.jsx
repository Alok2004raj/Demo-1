import React, { useState } from 'react'

function Addcontact({addcontact}) {
    const [contactdata,setcontactdata]=useState({name:"", email:""})
  

    function changehandle(e){
        if(e.target.name==="name"){
            setcontactdata({...contactdata,name:e.target.value})
        }
        else{
            setcontactdata({...contactdata,email:e.target.value})

        }

    }
    function Addhandle(){
        if(contactdata.name===''||contactdata.email===''){
            alert("Fill all fields")
        }
        
          
            addcontact(contactdata)

        
    }
  return (
    <div className='fformHeader'> 
    <div className='add-contact'>Add Contact</div>
    <form>
          <label>Name :</label> <br></br>
           <input type="text" placeholder='Enter Your Name'name='name' value={contactdata.name} onChange={changehandle}  /> <br></br>

            <label>Email :</label> <br></br>
              <input type="email" placeholder='Enter Your Email'name='Email' value={contactdata.email} onChange={changehandle}/>
    </form>
    <button  className='btn' onClick={Addhandle}>Add Contact</button>
    </div>
  )
}

export default Addcontact