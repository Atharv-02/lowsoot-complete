import { Linegraph } from './Linegraph';
import { useState, useEffect } from 'react';
import { chartarray } from '../sampledata/data';
import { color1 } from '../color';
import { Scatterchartgraph } from './Scatterchart';
import axios from 'axios';
import { useAuth } from '../contexts/Authcontext';
export function Dashgrape() {
  // const { visualstate } = useVisuals();
  // console.log({ electricwale: visualstate.electricty.Electricity });
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
          'https://www.lowsootbackend.xyz/visualisation',
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
  return (
    <>
      {loading || (
        <div className='dashgraphs arrange'>
          <div className='dashgraphlinecont'>
            <h2 className='dashgraph__header'>Number of Units</h2>
            <div className='dashgraphline__cont'>
              <Linegraph vizarray={data['ElectricityUsage'].Electricity} />
            </div>
          </div>
          <div className='dashgraphbarcont'>
            <h2 className='dashgraph__header'>Emission by electricity</h2>
            <div className='dashgraphline__cont'>
              <Linegraph vizarray={data['Electricity'].Electricity} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
