import { TooltipItem } from "chart.js";

const buildBarChartConfig = (startDate: Date, endDate: Date, setStartDate: (date: Date) => void , setEndDate:(date: Date) => void) => ({
  responsive: true,
  scales: {
    x: {
      type: 'time',
      display: true,
      min: startDate,
      max: endDate,
      time: {
        minUnit: "day",
      }
    },
    y: {
      display: true,
    }
  },
  plugins: {
    legend: {
     display: false,
    },
    title: {
      display: true,
      text: 'Number of trees planted per day',
    },
    tooltip:{
      callbacks: {
        title: (t: TooltipItem<"bar">[]) =>{
          return new Date(t[0].label).toLocaleDateString();
        }
      }
    }
  },
});

export default buildBarChartConfig;