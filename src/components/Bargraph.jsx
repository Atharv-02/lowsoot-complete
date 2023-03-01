import ReactApexChart from "react-apexcharts";
// import {
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   BarChart,
//   Bar,
//   ResponsiveContainer,
//   CartesianGrid,
// } from "recharts";
import { useVisuals } from "../contexts/Visualcontext";
import { getmonthno } from "../functions/setmonthnum";
// import { chart2data } from "../mockdata";
export function Bargraph(params) {
  const { vizarray, colorvalue } = params;
  const { dateval, enddateval } = useVisuals();

  const fillvalue = colorvalue ? colorvalue : "#fe7e7d";
  // dateval.slice(5, 7) dateval.slice(5, 7)
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
        type: "column",
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
          columnWidth: "20%",
        },
      },
      colors: [fillvalue, "#00E396", "#FF4560", "#FEB019", "#775DD0"],
      fill: {
        colors: [fillvalue, "#00E396", "#FF4560", "#FEB019", "#775DD0"],
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
        <BarChart width={500} height={300} data={jju}>
          <XAxis
            dataKey="month"
            style={{
              fontSize: "1.2rem",
              fontWeight: "400",
              lineHeight: "1.5rem",
              fontFamily: "Inter",
            }}
          />
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
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
          <XAxis dataKey="day" />
          <Bar dataKey="emission" stackId="a" fill={fillvalue} barSize={20} />
        </BarChart>
      </ResponsiveContainer> */}
      <ReactApexChart
        options={apexchartv.options}
        series={apexchartv.series}
        type="line"
      />
    </>
  );
}
