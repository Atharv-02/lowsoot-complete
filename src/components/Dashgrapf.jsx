import { Linegraph } from './Linegraph';
import { Bargraph } from './Bargraph';
// import { useVisuals } from "../contexts/Visualcontext";
import { chartarray } from '../sampledata/data';
import { Areagraph } from './Areagraph';
import { color2 } from '../color';
import { Piegraph } from './Piegraph';
import { Scatterchartgraph } from './Scatterchart';
import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/Authcontext';
import axios from 'axios';

export function Dashgrapf() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const { token, setToken, isuserloggedin, setIsuserloggedin } = useAuth();
  // const { visualstate } = useVisuals();
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
        <>
          <div className='dashgraphs arrange'>
            <div className='dashgraphlinecont hide'>
              <h2 className='dashgraph__header'>&nbsp;</h2>
              <div
                style={{ visibility: 'hidden', display: 'none' }}
                className='dashgraphline__cont'
              >
                <Linegraph vizarray={chartarray} colorvalue={color2} />
              </div>
            </div>
            <div className='dashgraphbarcont'>
              <h2 className='dashgraph__header'>
                Fuel in CO<sub>2</sub>e
              </h2>
              <div className='dashgraphbar__cont'>
                <Bargraph vizarray={data['Fuel'].Fuel} colorvalue={color2} />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
