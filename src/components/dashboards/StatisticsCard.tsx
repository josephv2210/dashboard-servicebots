import { FC, useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { dataLocation } from "../../data/chatsByLocation";
import { Select, Space } from "antd";

type Props = {
  title: string;
};

interface LocationData {
  month: string;
  bogota?: number;
  fusagasuga?: number;
  soacha?: number;
}

const StatisticsCard: FC<Props> = ({ title }) => {
  const [filteredData, setFilteredData] = useState<LocationData[]>([]);

  const dataLocationFilter = (filterBy: string) => {
    let filteredResult: LocationData[];
    switch (filterBy) {
      case "all":
        setFilteredData(dataLocation);
        break;
      case "bogota":
        filteredResult = dataLocation.map((element) => ({
          month: element.month,
          bogota: element.bogota,
        }));
        setFilteredData(filteredResult);
        break;
      case "fusagasuga":
        filteredResult = dataLocation.map((element) => ({
          month: element.month,
          fusagasuga: element.fusagasuga,
        }));
        setFilteredData(filteredResult);

        break;
      case "soacha":
        filteredResult = dataLocation.map((element) => ({
          month: element.month,
          soacha: element.soacha,
        }));
        setFilteredData(filteredResult);

        break;
      default:
        return;
    }
  };

  useEffect(() => {
    setFilteredData(dataLocation);
  }, []);

  return (
    <div className="col-content col-content-full border-card bar-char-content">
      <span className="title-card">{title}</span>

      <Space wrap>
        <Select
          defaultValue="all"
          style={{ width: 120 }}
          onChange={dataLocationFilter}
          options={[
            { value: "all", label: "Ver todos" },
            { value: "bogota", label: "Bogotá" },
            { value: "fusagasuga", label: "Fusagasugá" },
            { value: "soacha", label: "Soacha" },
          ]}
        />
      </Space>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={filteredData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          {filteredData.length > 0 && (
            <>
              {filteredData[0].bogota && (
                <Bar dataKey="bogota" name="Bogotá" fill="#8A038C" />
              )}
              {filteredData[0].fusagasuga && (
                <Bar dataKey="fusagasuga" name="Fusagasugá" fill="#632973" />
              )}
              {filteredData[0].soacha && (
                <Bar dataKey="soacha" name="Soacha" fill="#D96C0D" />
              )}
            </>
          )}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatisticsCard;
