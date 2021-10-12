import React from "react";

function Month({date}){
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
        let dat
        if(d.getDate()==new Date().getDate() && d.getMonth()==new Date().getMonth() && d.getFullYear()==new Date().getFullYear()){
            dat=React.createElement('div',{className:'dates active'},d.getDate())
        }
        else{    
            dat=React.createElement('div',{className:'dates'},d.getDate())
        }
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