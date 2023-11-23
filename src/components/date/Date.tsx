import React from 'react'
import "./date.css";

const Date = () => {
    let currentDate: Date = new window.Date();
    let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Octber", "November", "Decmber"];

    // Get the day, date, and month
    let dayName = daysOfWeek[currentDate.getDay()];
    let dayOfMonth = currentDate.getDate();
    let monthName = months[currentDate.getMonth()];

    // Format the date as "Thursday 23 Nov"
    let formattedDate = `${dayName} , ${dayOfMonth} `;

    return (
        <>
            <div className='date'>
                <div className='day'>
                    {formattedDate}
                </div>
                <div className='month'>
                    {monthName}
                </div>
            </div>
        </>
    )
}

export default Date