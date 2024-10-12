import { useState, useEffect } from 'react';
import classes from './CareerDevelopment.module.css'; // Import the CSS module

const CareerDevelopment = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    {
      const JOBS=[
        {
          "jid": "1",
          "job_title": "Software Engineer",
          "institution": "TechCorp",
          "location": "San Francisco, CA",
          "link": "https://techcorp.com/jobs/1"
        },
        {
          "jid": "2",
          "job_title": "Data Scientist",
          "institution": "DataWorks",
          "location": "New York, NY",
          "link": "https://dataworks.com/jobs/2"
        },
        {
          "jid": "3",
          "job_title": "UI/UX Designer",
          "institution": "Creative Studio",
          "location": "Austin, TX",
          "link": "https://creativestudio.com/jobs/3"
        },
        {
          "jid": "4",
          "job_title": "DevOps Engineer",
          "institution": "Cloud Solutions",
          "location": "Seattle, WA",
          "link": "https://cloudsolutions.com/jobs/4"
        },
        {
          "jid": "5",
          "job_title": "Product Manager",
          "institution": "Innovate LLC",
          "location": "Chicago, IL",
          "link": "https://innovate-llc.com/jobs/5"
        }
      ]
      setJobs(JOBS);
    }
    
  }, []);

  if (loading) {
    return <div className={classes.loadingScreen}>Loading...</div>;
  }

  return (
      <div className={classes.container}>
        <h1 className={classes.heading}>Career Development</h1>

        <div className={classes.gridContainer}>
          <div className={classes.card}>
            <h2 className={classes.cardTitle}>Articles and Guides on Career Advancement</h2>
            <div className={classes.cardContent}>
              <div>
                <h3 className={classes.articleTitle}>1. When Machine Learning Goes Off the Rails</h3>
                <p className={classes.articleText}>
                  Products and services that rely on machine learning—computer programs that constantly absorb new data and adapt their decisions in response—don’t always make ethical or accurate choices.
                </p>
                <button className={classes.button}>Read More</button>
              </div>
              <div>
                <h3 className={classes.articleTitle}>2. When Outside the Box: Will AI’s Masters Know How to Collaborate?</h3>
                <p className={classes.articleText}>
                  For the past year, in “Outside the Box,” we have been interrogating ChatGPT to better understand how AI “reasons.” It’s time to move on to focusing on the people who are actively promoting the role AI will play in our lives.
                </p>
                <button className={classes.button}>Read More</button>
              </div>
            </div>
          </div>

          <div className={classes.card}>
            <h2 className={classes.cardTitle}>Links to Workshops and Webinars</h2>
            <div className={classes.cardContent}>
              <div>
                <h3 className={classes.articleTitle}>1. Pre-event Tutorial: Introduction to Python</h3>
                <p className={classes.articleText}>
                  Date: September 15, 2024
                  <br />
                  Unlike some programming languages, Python’s use is expanding and covers a range of programming needs, from basic to advanced. If you are interested in learning just enough Python to get started on your own Python journey or to prepare you for one of the workshops, then this tutorial is for you.
                </p>
                <button className={classes.button}>Register</button>
              </div>
              <div>
                <h3 className={classes.articleTitle}>2. Tuning Large Language Models for Creative Bricolage</h3>
                <p className={classes.articleText}>
                  Date: September 16, 2024
                  <br />
                  Bricolage is a creative practice emphasizing the influence of a practitioner’s environment (physical, social, or otherwise) on their creative process.
                </p>
                <button className={classes.button}>Register</button>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.jobBoard}>
          <h2 className={classes.jobBoardTitle}>Job Board with Academic Opportunities</h2>
          {jobs.length > 0 ? (
            <div className={classes.jobTableContainer}>
              <table className={classes.jobTable}>
                <thead>
                <tr className={classes.tableHeader}>
                  <th className={classes.tableCell} >Job Title</th>
                  <th className={classes.tableCell}>Institution</th>
                  <th className={classes.tableCell}>Location</th>
                  <th className={classes.tableCell}>Link</th>
                </tr>
                </thead>
                <tbody>
                {jobs.map((job) => (
                    <tr key={job.jid}>
                      <td className={classes.tableCell}>{job.job_title}</td>
                      <td className={classes.tableCell}>{job.institution}</td>
                      <td className={classes.tableCell}>{job.location}</td>
                      <td className={`${classes.tableCell} ${classes.tableCellCentered}`}>
                        <a href={job.link} target="_blank" rel="noopener noreferrer">
                          <button className={classes.button}>Apply</button>
                        </a>
                      </td>
                    </tr>
                ))}
                </tbody>
              </table>
            </div>
          ) : (
              <div className={classes.noJobs}>
                <div className={classes.noJobsCard}>
                  <h1 className={classes.noJobsTitle}>No Jobs Available</h1>
                  <p className={classes.noJobsText}>Please check back later for more job opportunities.</p>
                  <i className={`fas fa-exclamation-triangle ${classes.noJobsIcon}`}></i>
                </div>
              </div>
          )}
        </div>
      </div>
  );
}

export default CareerDevelopment;
