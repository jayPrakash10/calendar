import React, { useState } from 'react'

function Addevent({addevent, date}){

    const [input, setinput] = useState('')

    function add(){
        const dt= new Date()
        
        if(dt.getDate()>date.getDate() || dt.getMonth()>date.getMonth() || dt.getFullYear()>date.getFullYear())
            alert('Cannot add event in past')
        else{
            const event = {event : input, date:{dt:date.getDate(), mnth:date.getMonth()+1, yr:date.getFullYear()}}
            addevent(event)    
        }
        setinput('')
    }

    return(
        <div className='inputevent'>
            <input type='text' value={input} placeholder='Add Event' onChange={(e)=> setinput(e.target.value)}></input>
            <button disabled={input.length<1} onClick={add}>Add</button>
        </div>
    )
}

export default Addevent;