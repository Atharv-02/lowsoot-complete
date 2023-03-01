import {
  ResponsiveContainer,
  PieChart,
  Pie,
  //   LabelList,
  //   Label,
} from "recharts";
export function Piegraph(params) {
  //   const { vizarray, colorvalue } = params;
  const { per1, name1 } = params;
  /**
   * ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
   */
  const datax = [
    { name: name1, value: per1, fill: "#0088FE" },
    { name: "Others", value: 100 - per1, fill: "#00C49F" },
  ];

  //   const fillvalue = colorvalue ? colorvalue : "#fe7e7d";
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart height={250}>
          <Pie
            data={datax}
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            label={({
              cx,
              cy,
              midAngle,
              innerRadius,
              outerRadius,
              value,
              index,
            }) => {
              console.log("handling label?");
              const RADIAN = Math.PI / 180;
              // eslint-disable-next-line
              const radius = 25 + innerRadius + (outerRadius - innerRadius);
              // eslint-disable-next-line
              const x = cx + radius * Math.cos(-midAngle * RADIAN);
              // eslint-disable-next-line
              const y = cy + radius * Math.sin(-midAngle * RADIAN);

              return (
                <text
                  x={x}
                  y={y}
                  textAnchor={x > cx ? "start" : "end"}
                  dominantBaseline="central"
                >
                  {datax[index].name} ({value})
                </text>
              );
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
}
