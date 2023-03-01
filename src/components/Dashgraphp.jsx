import { ResponsiveContainer, PieChart, Pie } from 'recharts';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../contexts/Authcontext';
export function Dashgraphp() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const { token, setToken, isuserloggedin, setIsuserloggedin } = useAuth();
  useEffect(() => {
    async function func2() {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        // const bodyParameters = {
        //   key: 'value',
        // };

        const { data } = await axios.get(
          'http://15.207.87.23:3000/visualisation',
          config
        );
        console.log(data);
        if (data) {
          setData(data);
          setLoading(false);
        }
      } catch (err) {
        setIsuserloggedin(false);
        console.log(err);
      }
    }
    func2();
  }, []);
  let datax = '';
  if (!loading) {
    datax = data['ProductGraph']
      .filter((item) => {
        // console.log(item.name);
        return item.saved != 0;
      })
      .map((item) => {
        return {
          name: item.name,
          value: parseInt(item.saved),
          fill: item.color,
        };
      });
  }
  return (
    <>
      {loading || (
        <>
          <div className='arrange'>
            <div className='dashgraphbarcont' style={{ marginTop: '2rem' }}>
              <h2 className='dashgraph__header'>Product related Emissions</h2>
              <div className='dashgraphbar__cont'>
                <ResponsiveContainer width='100%' height='100%'>
                  <PieChart height={250}>
                    <Pie
                      data={datax}
                      cx='50%'
                      cy='50%'
                      isAnimationActive='1'
                      outerRadius={100}
                      fill='#8884d8'
                      dataKey='value'
                      label={({
                        cx,
                        cy,
                        midAngle,
                        innerRadius,
                        outerRadius,
                        value,
                        index,
                      }) => {
                        console.log('handling label?');
                        const RADIAN = Math.PI / 180;
                        const radius =
                          25 + innerRadius + (outerRadius - innerRadius);
                        const x = cx + radius * Math.cos(-midAngle * RADIAN);
                        const y = cy + radius * Math.sin(-midAngle * RADIAN);
                        return (
                          <text
                            x={x}
                            y={y}
                            textAnchor={x > cx ? 'start' : 'end'}
                            dominantBaseline='central'
                          >
                            {datax[index].name} ({value})
                          </text>
                        );
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
