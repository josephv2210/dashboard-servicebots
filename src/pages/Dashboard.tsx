import SingleCard from "../components/dashboards/SingleCard";
import ChatsCard from "../components/dashboards/ChatsCard";
import ComparativeChart from "../components/dashboards/ComparativeChart";
import StatisticsCard from "../components/dashboards/StatisticsCard";
import { useWebContext } from "../hooks/useWebContext";

function Dashboard() {
  const { isMobile } = useWebContext();

  return (
    <div className="container">
      <span className="last-update">Ultima actualización: 03/07/2024 8:51pm</span>
      <div className="bento-container scrollbar">
        <div className={`bento-content ${isMobile && 'bento-content-movil'}`}>
          <div className={`row row-1 ${isMobile && 'movil-row'}`}>
            <div className="col col-1">
              <SingleCard title="Mensajes intercambiados" content={1234} />
              <SingleCard
                title="Mensajes fuera de horario de trabajo"
                content={321}
              />
              <SingleCard title="Pedidos de cotización" content={100} />
            </div>
            <div className="col col-2 ">
              <ComparativeChart
                title="Comparativa"
              />
            </div>
          </div>
          <div className={`row row-2 ${isMobile && ' movil-row-2'}`}>
            <div className="col col-1" >
              <ChatsCard title="Chats" content={1000} />

            </div>
            <div className="col col-2">
              <StatisticsCard
                title="Chats por localización"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
