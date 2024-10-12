import { useEffect, useState } from 'react';
import styles from './ConferenceSelector.module.css'; // Import the CSS module
import { CONFERENCES } from '../utils/dataConferences';
import generatePDF from '../utils/pdfGenerator';

const ConferenceSelector = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date(2024, 9, 1));
  const [selectedDate, setSelectedDate] = useState(null);
  const [conferences, setConferences] = useState([]);
  const [selectableDates, setSelectableDates] = useState([]);
  const [previousMonthCount, setPreviousMonthCount] = useState(0);
  const [nextMonthCount, setNextMonthCount] = useState(0);

  useEffect(() => {
    const fetchConferences = async () => {
      try {
        setConferences(CONFERENCES);
        const conferenceDates = CONFERENCES.map(conf => new Date(conf.date));
        setSelectableDates(
          conferenceDates.map(date => ({
            day: date.getDate(),
            month: date.getMonth(),
            year: date.getFullYear()
          }))
        );
        updateMonthCounts(CONFERENCES);
      } catch (error) {
        console.error('Error fetching conferences:', error);
      }
    };
  
    fetchConferences();
  }, []);

  const updateMonthCounts = (conferences) => {
    const previousMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1);
    const nextMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1);

    const prevMonthCount = conferences.filter(conf => {
      const confDate = new Date(conf.dates); // Ensure date is parsed correctly
      return confDate.getFullYear() === previousMonth.getFullYear() && confDate.getMonth() === previousMonth.getMonth();
    }).length;

    const nextMonthCount = conferences.filter(conf => {
      const confDate = new Date(conf.dates); // Ensure date is parsed correctly
      return confDate.getFullYear() === nextMonth.getFullYear() && confDate.getMonth() === nextMonth.getMonth();
    }).length;

    setPreviousMonthCount(prevMonthCount);
    setNextMonthCount(nextMonthCount);
  };

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    return { daysInMonth, firstDayOfMonth };
  };

  const { daysInMonth, firstDayOfMonth } = getDaysInMonth(currentMonth);

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dates = Array.from({ length: 42 }, (_, i) => {
    const day = i - (firstDayOfMonth - 1);
    return day > 0 && day <= daysInMonth ? day : null;
  });

  const handleDateClick = (date) => {
    if (
      selectableDates.some(
        d => d.day === date && d.month === currentMonth.getMonth() && d.year === currentMonth.getFullYear()
      )
    ) {
      setSelectedDate(date);
    }
  };

  const changeMonth = (increment) => {
    const newMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + increment, 1);
    setCurrentMonth(newMonth);
    updateMonthCounts(conferences); // Update month counts when the month is changed
  };

  const pdf=()=>{
    var conference=null;
    if(selectedDate){
      conference=conferences.find((item)=>new Date(item.date).getDate()==selectedDate)
    }
    generatePDF(conference.conferenceId)
  }
  
  return (
      <div className={styles.container}>
        <div className={styles.scheduleContainer}>
          <h2 className={styles.title}>Schedule</h2>
          <div className={styles.monthSelector}>
            <button onClick={() => changeMonth(-1)} className={styles.arrowButton}>
              <i className="fas fa-angle-left"></i>
              {previousMonthCount > 0 && (
                  <span className={styles.eventCount}>{previousMonthCount} events</span>
              )}
            </button>
            <span className={styles.currentMonth}>
              {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
            </span>
            <button onClick={() => changeMonth(1)} className={styles.arrowButton}>
              {nextMonthCount > 0 && (
                  <span className={styles.eventCount}>{nextMonthCount} events</span>
              )}
              <i className="fas fa-angle-right"></i>
            </button>
          </div>
          <div className={styles.dayGrid}>
            {days.map(day => (
                <div key={day} className={styles.day}>{day}</div>
            ))}
          </div>
          <div className={styles.dateGrid}>
            {dates.map((date, index) => (
              <button
                key={index}
                className={`${styles.date} 
                  ${date ? styles.dateHover : styles.disabledDate} 
                  ${
                    selectableDates.some(
                      d => d.day === date && d.month === currentMonth.getMonth() && d.year === currentMonth.getFullYear()
                    )
                      ? styles.selectableDate
                      : ''
                  } 
                  ${
                    selectedDate === date &&
                    selectableDates.some(
                      d => d.day === date && d.month === currentMonth.getMonth() && d.year === currentMonth.getFullYear()
                    )
                      ? styles.selectedDate
                      : ''
                  }`}
                onClick={() => date && handleDateClick(date)}
                disabled={!date}
              >
                {date}
              </button>
            ))}
          </div>

          <div className={styles.exportButtonContainer}>
            <button className={styles.exportButton} onClick={pdf}>
              Export Schedule <i className="fas fa-download ml-1"></i>
            </button>
            <p className={styles.darkTheme}>*Select a date before clicking export</p>
          </div>
        </div>
        <div className={styles.detailsContainer}>
          {selectedDate ? (
              <>
                <h2 className={styles.scheduleDetailsTitle}>
                  Schedule for {currentMonth.toLocaleString('default', { month: 'long' })} {selectedDate}, {currentMonth.getFullYear()}
                </h2>
                <div>
                {conferences
                  .filter((conf) => new Date(conf.date).getDate() === selectedDate)
                  .map((conf, idx) => (
                    <div key={idx} className={styles.conferenceDetails}>
                      <div className={styles.conferenceHeader}>
                        <h3 className={styles.conferenceTitle}>{conf.conferenceName} Conference</h3>
                        <p className={styles.conferenceDate}>
                          {new Date(conf.date).toLocaleDateString('en-US', {
                            weekday: 'long',
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </p>
                      </div>
                      <div className={styles.conferenceBody}>
                        <p className={styles.conferenceDescription}>{conf.description}</p>
                        <div className={styles.contactInfo}>
                          <p><strong>Email:</strong> <a href={`mailto:${conf.email}`}>{conf.email}</a></p>
                          <p><strong>Phone Number:</strong> <a href={`tel:${conf.phone_number}`}>{conf.phone_number}</a></p>
                        </div>
                        <div className={styles.speakerSection}>
                          <h4 className={styles.speakerTitle}>Speakers</h4>
                          {conf.speakers.length > 0 ? (
                            conf.speakers.map((speaker, sIdx) => (
                              <div key={sIdx} className={styles.speakerCard}>
                                <div className={styles.speakerHeader}>
                                  <p className={styles.speakerName}>{speaker.name}</p>
                                  <p className={styles.speakerTopic}>{speaker.discussion_topic}</p>
                                </div>
                                <p className={styles.speakerBio}>{speaker.bio}</p>
                                <p className={styles.speakerDescription}>{speaker.description}</p>
                                <div className={styles.sessionDetails}>
                                  <p><strong>Session:</strong> {speaker.session_title}</p>
                                  <p><strong>Time:</strong> {conf.date} from {speaker.start_time} to {speaker.end_time}</p>
                                </div>
                              </div>
                            ))
                          ) : (
                            <div className={styles.noSpeakers}>
                              <p>No speakers scheduled for this date.</p>
                              <span className="loading loading-spinner loading-sm"></span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className={styles.registerButtonContainer}>
                        <a href={`/recorded-sessions?cid=${conf.conferenceId}`}>
                          <button className={styles.registerButton}>
                            Attend Conference <i className="fas fa-arrow-right ml-1"></i>
                          </button>
                        </a>
                      </div>
                    </div>
                  ))}

                </div>
              </>
          ) : (
              <div className={styles.noDateSelected}>
                <p>Please select a highlighted date to view the schedule and agenda.</p>
              </div>
          )}
        </div>
      </div>
  );
};

export default ConferenceSelector;
