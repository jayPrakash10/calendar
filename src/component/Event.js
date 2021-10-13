import React from "react";

function Event({evnt,date}){
    const evt = []
    evnt.forEach(element => {
        if(element.date.dt == date.getDate() && element.date.mnth==(date.getMonth()+1) && element.date.yr==date.getFullYear()){
            console.log(element);    
            evt.push(<div className='event'><div><strong>{element.event}</strong></div></div>)
        }
    });

    return evt
}

export default Event