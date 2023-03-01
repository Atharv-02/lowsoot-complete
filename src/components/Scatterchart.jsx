import {
  CartesianGrid,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
// import { useVisuals } from "../contexts/Visualcontext";
// import { getmonthno } from "../functions/setmonthnum";

export function Scatterchartgraph(params) {
  const co2 = ' CO2E';
  const { colorvalue, vizarray } = params;
  const scatterfill = colorvalue ? colorvalue : '#8884d8';
  //   const { vizarray } = params;
  //   const { dateval, enddateval } = useVisuals();
  //   const monthno = Number(dateval.slice(5, 7));
  //   const vizx = [...vizarray].map((elem) => getmonthno(elem));
  //   const ju = vizx.findIndex((elem) => elem.monthno === monthno);
  //   const juend = Number(enddateval.slice(5, 7));
  //   const jju = [...vizx].slice(ju, juend);
  console.log(vizarray);
  const data = [...vizarray];
  console.log(Object.keys(vizarray[0]));
  console.log(Object.keys(vizarray[0])[0] === 'month');

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <ScatterChart
        width={400}
        height={400}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid />
        <XAxis
          type={Object.keys(vizarray[0])[0] == 'month' ? 'category' : 'number'}
          dataKey={Object.keys(vizarray[0])[0]}
          name={Object.keys(vizarray[0])[0]}
          unit=''
          style={{
            fontSize: '1rem',
            fontWeight: '400',
            lineHeight: '1.5rem',
            fontFamily: 'Inter',
          }}
        />
        <YAxis
          style={{
            fontSize: '1rem',
            fontWeight: '400',
            lineHeight: '1.5rem',
            fontFamily: 'Inter',
          }}
          axisLine={false}
          type='number'
          dataKey={Object.keys(vizarray[0])[1]}
          name={Object.keys(vizarray[0])[1]}
          unit={co2}
        />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter name='emmision' data={data} fill={scatterfill} />
      </ScatterChart>
    </ResponsiveContainer>
  );
}
