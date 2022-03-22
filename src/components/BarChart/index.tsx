import { memo, useContext, useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import "chartjs-adapter-moment";
import {
  Chart as ChartJS,
  TimeScale,
  PointElement,
  CategoryScale,
  LineElement,
  BarElement,
  Title,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { TreeDataContext } from "../../contexts/TreeDataContextProvider";
import Loading from "../Loading";
import DatePicker from "../DatePicker";
import buildBarChartConfig from "./buildBarChartConfig";
import buildTreeCountDatasets from "./buildTreeCountDatasets";
import buildTreeCountLabels from "./buildTreeCountLabels";

ChartJS.register(
  CategoryScale,
  TimeScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  BarElement,
  Tooltip,
  Legend
);

const Chart = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const { data, loading } = useContext(TreeDataContext);
  const [chartOptions, setChartOptions] = useState<any>(
    buildBarChartConfig(startDate, endDate, setStartDate, setEndDate)
  );
  const [datasets, setDatasets] = useState(buildTreeCountDatasets(data));
  const [labels, setLabels] = useState(buildTreeCountLabels(data));

  useEffect(() => {
    if (startDate && endDate) {
      setChartOptions(
        buildBarChartConfig(startDate, endDate, setStartDate, setEndDate)
      );
    }
  }, [startDate, endDate]);

  useEffect(() => {
    setDatasets(buildTreeCountDatasets(data));
    setLabels(buildTreeCountLabels(data));
  }, [data]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <DatePicker
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />
      <Bar options={chartOptions} data={{ labels, datasets }} />
    </>
  );
};

export default memo(Chart);
