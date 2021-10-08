import React from 'react'
import './Calender.css'

function Calender(){
    return(
        <div className='container'>
            <div className='calender'>
                <div className='header'><img src='/images/calendar.png'/>Calender</div>
                <div className='current'><img src='/images/back.png'/><h2>Date</h2><img src='/images/next.png'/></div>
                <div className='days'>
                    <div>Mon</div>
                    <div>Tue</div>
                    <div>Wed</div>
                    <div>Thu</div>
                    <div>Fri</div>
                    <div>Sat</div>
                    <div>Sun</div>
                </div>
            </div>
            <div className='event'>
                Event
            </div>
        </div>
    )
}

export default Calender;