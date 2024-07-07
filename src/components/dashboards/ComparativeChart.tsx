import { FC } from "react";
import { dataComparative } from "../../data/comparativeTable";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useWebContext } from "../../hooks/useWebContext";


type Props = {
  title: string;
};

const ComparativeChart: FC<Props> = ({ title }) => {
  const { isMobile } = useWebContext();

  return (
    <div className="col-content col-content-full border-card">
      <span className="title-card">{title}</span>
      <ResponsiveContainer width="95%" height="90%">
        <LineChart
          data={dataComparative}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Mensajes dentro de horario" stroke="#8A038C"  dot={!isMobile}  />
          <Line type="monotone" dataKey="Mensajes fuera de horario" stroke="#632973" dot={!isMobile} />
          <Line type="monotone" dataKey="Pedidos de cotización" stroke="#D96C0D" dot={!isMobile} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ComparativeChart;
