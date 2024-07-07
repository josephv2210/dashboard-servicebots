import React from "react";
import SingleCard from "../components/dashboards/SingleCard";

function Dashboard() {
  return (
    <div className="container">
      <div className="bento-container">
        <div className="bento-content">
          <div className="row row-1 ">
            <div className="col col-1">
              <SingleCard 
                title="Mensajes intercambiados"
                content={1234}
              />
              <SingleCard 
                title="Mensajes fuera de horario de trabajo"
                content={321}
              />
              <SingleCard 
                title="Pedidos de cotización"
                content={100}
              />
            </div>
            <div className="col col-2 red"></div>
          </div>
          <div className="row row-2 red">
            <div className="col col-2 red"></div>
            <div className="col col-1 red"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
