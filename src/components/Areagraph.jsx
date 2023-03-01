// import {
//   Area,
//   AreaChart,
//   CartesianGrid,
//   ResponsiveContainer,
//   Tooltip,
//   XAxis,
//   YAxis,
// } from "recharts";
import { useVisuals } from "../contexts/Visualcontext";
import { getmonthno } from "../functions/setmonthnum";

import ReactApexChart from "react-apexcharts";
export function Areagraph(params) {
  const { vizarray, colorvalue } = params;
  const areafill = colorvalue ? colorvalue : "#8884d8";
  const { dateval, enddateval } = useVisuals();
  const monthno = Number(dateval.slice(5, 7));
  const vizx = [...vizarray].map((elem) => getmonthno(elem));
  const ju = vizx.findIndex((elem) => elem.monthno === monthno);
  const juend = Number(enddateval.slice(5, 7));
  const jju = [...vizx].slice(ju, juend);
  // console.log(jju);
  // const chartarray = [
  //   { month: "January", emission: 0 },
  //   { month: "February", emission: 320.3577364206881 },
  //   { month: "March", emission: 400.44717052586014 },
  //   { month: "April", emission: 386.44717052586014 },
  //   { month: "May", emission: 400.44717052586014 },
  //   { month: "June", emission: 240.26830231551608 },
  //   { month: "July", emission: 160.17886821034406 },
  //   { month: "August", emission: 150.17886821034406 },
  //   { month: "September", emission: 0 },
  //   { month: "October", emission: 0 },
  //   { month: "November", emission: 0 },
  //   { month: "December", emission: 0 },
  // ];
  const monthlist = [...jju].map((item) => item.month);
  const datalistval = [...jju].map((item) => Math.round(item.emission));
  const apexchartv = {
    series: [
      {
        name: "Emissions",
        type: "area",
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
      colors: [areafill, "#00E396", "#FF4560", "#FEB019", "#775DD0"],
      fill: {
        colors: [areafill, "#00E396", "#FF4560", "#FEB019", "#775DD0"],
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
        <AreaChart width={500} height={300} data={jju}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" />
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
          <Area
            type="monotone"
            dataKey="emission"
            stroke={areafill}
            fill={areafill}
          />
        </AreaChart>
      </ResponsiveContainer> */}
      <ReactApexChart
        options={apexchartv.options}
        series={apexchartv.series}
        type="line"
      />
    </>
  );
}
