import React from "react";
import './styles.css'
import data from '../../../../../public/images/team_project/3.jpg'
import game from '../../../../../public/images/team_project/1.jpg'
import web from '../../../../../public/images/team_project/2.jpg'

function TeamProjects() {
  return (
    <div>
      <section className="team-project py-5">
        <div className="container text-center">
          <h1 className="team-head__title mb-4 fw-bold">Team dự án</h1>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={data}
                  className="card-img-top rounded-circle mx-auto mt-3"
                  alt="Team Member 1"
                  style={{ width: "150px" }}
                />
                <div className="card-body">
                  <h3 className="card-title">Data</h3>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={web}
                  className="card-img-top rounded-circle mx-auto mt-3"
                  alt="Team Member 2"
                  style={{ width: "150px" }}
                />
                <div className="card-body">
                  <h3 className="card-title">Web</h3>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={game}
                  className="card-img-top rounded-circle mx-auto mt-3"
                  alt="Team Member 3"
                  style={{ width: "150px" }}
                />
                <div className="card-body">
                  <h3 className="card-title">Game</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TeamProjects;
