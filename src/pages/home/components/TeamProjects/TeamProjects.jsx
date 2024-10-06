import React, { useEffect } from "react";
import './styles.css';
import AOS from "aos";
import data from '../../../../../public/images/team_project/3.jpg';
import game from '../../../../../public/images/team_project/1.jpg';
import web from '../../../../../public/images/team_project/2.jpg';

function TeamProjects() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, 
    });
  }, []);


  const teams = [
    { title: 'Data', image: data },
    { title: 'Web', image: web },
    { title: 'Game', image: game }
  ];

  return (
    <div>
      <section className="team-project py-5" id="team-project">
        <div className="container text-center">
          <h1 className="team-head__title mb-4 fw-bold" data-aos="fade-up">Team dự án</h1>
          <div className="row">
            {teams.map((team, index) => (
              <div 
                key={index} 
                className="col-md-4 mb-4" 
                data-aos="zoom-in" 
                data-aos-delay={index * 200}
              >
                <div className="card h-100 shadow-sm">
                  <img
                    src={team.image}
                    className="card-img-top rounded-circle mx-auto mt-3"
                    alt={`Team Member ${team.title}`}
                    style={{ width: "150px" }}
                  />
                  <div className="card-body">
                    <h3 className="card-title">{team.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default TeamProjects;
