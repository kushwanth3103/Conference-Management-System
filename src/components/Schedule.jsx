import Calendar from 'react-calendar';
import { CONFERENCE_DETAILS } from '../store/conferenceData';
import classes from './Schedule.module.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import generatePDF from '../util/pdfGenerator';
import { TiExport } from "react-icons/ti";



export default function Schedule() {
  const [selectedDate, setSelectedDate] = useState('');
  const {conferenceId}=useParams();
  const [dates,setDates]=useState([]);
  useEffect(() => {
    const conference = CONFERENCE_DETAILS.find((item) => item.id === conferenceId);

    if (conference && conference.schedule) {
      // Extract dates from the conference schedule
      const uniqueDates = [...new Set(conference.schedule.map((schedule) => schedule.date))];
      setDates(uniqueDates); // Set the unique dates to state
    }
  }, [conferenceId]);
  
  console.log(dates)
  const checkDate = (formattedDate) => {
    return dates.includes(formattedDate);
  };

  const handleClassName = ({ date, view }) => {
    if (view === 'month') {
      const formattedDate = date.toISOString().split('T')[0];
      if (checkDate(formattedDate)) {
        return classes.highlight;
      }
    }
    return '';
  };

  const handleChange = (date) => {
    setSelectedDate(date.toISOString().split('T')[0]);
  };

  const schedule = CONFERENCE_DETAILS.flatMap((item) =>
    item.schedule.filter((schedule) => schedule.date === selectedDate)
  )[0];

  
  const show = typeof schedule !== 'undefined' && schedule !== null;

  return (
    <div className={classes.scheduleContainer}>
      <div className={classes.calendarContainer}>
        <h3>Schedule</h3>
        <Calendar tileClassName={handleClassName} onChange={handleChange} value={dates[0]}/>
        <div>
        <button className={classes.exportButton} onClick={()=>{
            generatePDF(conferenceId)
        }}>Export schedule <TiExport/></button>
      </div>
      </div>
      <div className={classes.detailsContainer}>
        {show ? (
          <>
            <div>
              <h2>{schedule.title}</h2>
              <p>{schedule.description}</p>
              <p>Date: {schedule.date}</p>
              <p>Time: {schedule.time}</p>
              <p>Venue: {schedule.room}</p>
            </div>
            <h2>Speakers:</h2>
            <div>
              {schedule.speaker.map((item) => (
                <div key={item.speakerId} className={classes.speakerCard}>
                  <img src={item.photoUrl} alt="profile pic" />
                  <div className={classes.speakerDetails}>
                    <h4>{item.name}</h4>
                    <p>{item.profile}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : ((selectedDate===''?<p className={classes.noSchedule}>Select the Date's highlighted in Green from the calendar to view detailed schedule and agenda</p>:<p className={classes.noSchedule}>No schedule for this date.</p>)
        )}
      </div>
    </div>
  );
}
