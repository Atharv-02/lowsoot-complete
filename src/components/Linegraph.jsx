import ReactApexChart from "react-apexcharts";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   CartesianGrid,
// } from "recharts";
import { useVisuals } from "../contexts/Visualcontext";
import { getmonthno } from "../functions/setmonthnum";
export function Linegraph(params) {
  const { vizarray, colorvalue } = params;
  const strokeval = colorvalue ? colorvalue : "#4d7cfe";
  const { dateval, enddateval } = useVisuals();
  const monthno = Number(dateval.slice(5, 7));
  const vizx = [...vizarray].map((elem) => getmonthno(elem));
  const ju = vizx.findIndex((elem) => elem.monthno === monthno);
  const juend = Number(enddateval.slice(5, 7));
  const jju = [...vizx].slice(ju, juend);
  const monthlist = [...jju].map((item) => item.month);
  const datalistval = [...jju].map((item) => Math.round(item.emission));
  const apexchartv = {
    series: [
      {
        name: "Emissions",
        type: "line",
        data: datalistval,
      },
    ],
    options: {
      chart: {
        stacked: false,
        zoom: {
          enabled: !false,
        },
        toolbar: {
          show: false,
        },
      },
      stroke: {
        curve: "smooth",
      },
      plotOptions: {
        bar: {
          columnWidth: "75%",
        },
      },
      colors: [strokeval, "#00E396", "#FF4560", "#FEB019", "#775DD0"],
      fill: {
        colors: [strokeval, "#00E396", "#FF4560", "#FEB019", "#775DD0"],
      },
      labels: [...monthlist],
      markers: {
        size: 0,
      },
    },
  };
  return (
    <>
      {/* <ResponsiveContainer width="100%" height="100%">
        <LineChart data={jju}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="month"
            style={{
              fontSize: "1.2rem",
              fontWeight: "400",
              lineHeight: "1.5rem",
              fontFamily: "Inter",
            }}
          />
          <YAxis
            style={{
              fontSize: "1.2rem",
              fontWeight: "400",
              lineHeight: "1.5rem",
              fontFamily: "Inter",
            }}
            axisLine={false}
          />
          <Tooltip />
          <Legend />
          <XAxis
            style={{
              fontSize: "1rem",
              fontFamily: "san serif",
            }}
            dataKey="month"
          />
          <Line type="monotone" dataKey="emission" stroke={strokeval} />
        </LineChart>
      </ResponsiveContainer> */}
      <ReactApexChart
        options={apexchartv.options}
        series={apexchartv.series}
        type="line"
      />
    </>
  );
}
