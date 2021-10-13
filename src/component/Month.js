import React from "react";

function Month({date, set}){
    const d = new Date(date.getTime());
    const dates = []
    const currentmonth=d.getMonth()

    while(d.getMonth()==currentmonth){
        d.setDate(d.getDate()-1)
    }
    d.setDate(d.getDate()+1)

    for(let i=1; i<d.getDay();i++){
        const dat= React.createElement('div',{className:'disable'},'')
        dates.push(dat)
    }
    while(d.getMonth()==currentmonth){
        const dt = d.getTime()
        const dat=React.createElement('div',{className:'dates', onClick:()=>{set(new Date(date.setTime(dt)))}}, d.getDate())
        d.setDate(d.getDate()+1)
        dates.push(dat)
    }
    return(
        <div className='month'>
            {dates}
        </div>
    )
}

export default Month;