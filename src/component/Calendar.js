import React, { useState } from 'react'
import './Calendar.css'
import Month from './Month';
import Event from './Event'; 
import Addevent from './Addevent';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const weekdays=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

function Calendar(){
    const [evnt, setEvent] = useState([])
    const [date, setdate] = useState(new Date())

    function handle(e){
        setEvent([...evnt, e])
    }

    return(
        <div className='container'>
            <div className='calendarcard'>
                <div className='header'><img src='/images/calendar.png' alt=''/><strong>Calender</strong></div>
                <div className='calendar'>
                    <div className='current'>
                        <img src='/images/back.png' alt='' onClick={()=> setdate(new Date(date.setFullYear(date.getFullYear()-1))) }/>
                        <img src='/images/left-arrow.png' alt='' onClick={()=> setdate(new Date(date.setMonth(date.getMonth()-1))) }/>
                        <h2>{months[date.getMonth()]}, {date.getFullYear()}</h2>
                        <img src='/images/right-arrow.png' alt='' onClick={()=> setdate(new Date(date.setMonth(date.getMonth()+1))) }/>
                        <img src='/images/next.png' alt='' onClick={()=> setdate(new Date(date.setFullYear(date.getFullYear()+1))) }/>
                    </div>
                    <div className='days'>
                        <div>Mon</div>
                        <div>Tue</div>
                        <div>Wed</div>
                        <div>Thu</div>
                        <div>Fri</div>
                        <div>Sat</div>
                        <div>Sun</div>
                    </div>
                    <Month date={date} set={setdate}/>
                </div>
            </div>
            <div className='eventcard'>
                <div className='currentdate'>
                    <h1>{date.getDate()}</h1>
                    <div>{months[date.getMonth()]}, {date.getFullYear()}</div>
                    <div>{weekdays[date.getDay()]}</div>
                </div>
                <Addevent addevent={handle} date={date}/>
                <div className='header'><img src='/images/event.png' alt=''/><strong>Events</strong></div>
                <Event evnt={evnt} date={date}/>
            </div>
        </div>
    )
}

export default Calendar;