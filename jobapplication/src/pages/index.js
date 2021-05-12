
import React , {Fragment , useEffect , useState} from "react";
import "../App.css";





const ListJobs = () => {
  
  const [job , setJobs] = useState([]);

  const getJobs = async () => {
    try{
      
      const response = await fetch("http://localhost:3001/jobs");
      const jsonData = await response.json();

      setJobs(jsonData);
      console.log(jsonData)

    }catch(err){
      console.error(err.message);
      
    }
  };

  useEffect(() => {
    getJobs();
  }, []);
  return (
    <>
      <div
      >
        <h1
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '40vh'
          }}>Find The Job You Love !</h1>
          {job.job_title}
      </div>
      <p>Featured Jobs</p>

      <div class="Container">
        <div class="col-xs-12">
          {job.map((jobs => (
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">{jobs.job_title}</h4>
                <h5 className="card-subtitle mb-2 text-muted">
                  {jobs.comp_name}
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {jobs.job_location}
                  </h6>
                  <h7 className="card-subtitle mb-2 text-muted">
                    {jobs.skills}
                  </h7>
                  <br></br>
                  <br></br>
                  <div className="app-btn">
                    <button type="button" className="btn1" class="btn btn-primary" >Apply </button>
                      <button type="button" className="btn2" class="btn btn-outline-secondary">Save</button>
                      </div>
                      <br></br>
                      <br></br>
                </div>
              </div>

              

          )))}
        </div>
      </div>
      
      
    </>
  );
};




export default ListJobs;


/*
{" "}
        <table class="table mt-5 text-center">
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Company Name</th>
              <th>Location</th>
              <th>Skills Required</th>
            </tr>
          </thead>
          <tbody>
            {job.map(jobs => (
              <tr key={jobs.job_id}>
                <td>{jobs.job_title}</td>
                <td>{jobs.comp_name}</td>
                <td>{jobs.job_location}</td>
                <td>{jobs.skills}</td>

              </tr>

            ))}
          </tbody>
        </table>
        */