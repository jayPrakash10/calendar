import React, { useState } from 'react'
import './Calendar.css'
import Month from './Month';
import Event from './Event'; 

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function Calendar(){
    const [date, setdate] = useState(new Date())

    return(
        <div className='container'>
            <div className='calendarcard'>
                <div className='header'><img src='/images/calendar.png' alt=''/><strong>Calender</strong></div>
                <div className='current'>
                    <img src='/images/back.png' alt='' onClick={()=> setdate(new Date(date.setFullYear(date.getFullYear()-1))) }/>
                    <img src='/images/left-arrow.png' alt='' onClick={()=> setdate(new Date(date.setMonth(date.getMonth()-1))) }/>
                    <h2>{months[date.getMonth()]}, {date.getFullYear()}</h2>
                    <img src='/images/right-arrow.png' alt='' onClick={()=> setdate(new Date(date.setMonth(date.getMonth()+1))) }/>
                    <img src='/images/next.png' alt='' onClick={()=> setdate(new Date(date.setFullYear(date.getFullYear()+1))) }/>
                </div>
                <div className='calendar'>
                    <div className='days'>
                        <div>Mon</div>
                        <div>Tue</div>
                        <div>Wed</div>
                        <div>Thu</div>
                        <div>Fri</div>
                        <div>Sat</div>
                        <div>Sun</div>
                    </div>
                    <Month date={date}/>
                </div>
            </div>
            <div className='event'>
                <div className='header'><img src='/images/event.png' alt=''/><strong>Events</strong></div>
                <Event />
                <Event />
            </div>
        </div>
    )
}

export default Calendar;