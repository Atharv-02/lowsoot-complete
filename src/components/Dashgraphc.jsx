import { Linegraph } from './Linegraph';
import { Bargraph } from './Bargraph';
// import { chart1data } from "../mockdata";
// import { useVisuals } from "../contexts/Visualcontext";
import { chartarray } from '../sampledata/data';
import { color1 } from '../color';
import { color2 } from '../color';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../contexts/Authcontext';
export function Dashgraphc() {
  // const { visualstate } = useVisuals();
  // console.log({ cargowale: visualstate.cargo });

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
            <div className='dashgraphbarcont'>
              <h2 className='dashgraph__header'>Distance Travelled</h2>
              <div className='dashgraphbar__cont'>
                <Bargraph
                  vizarray={data['TravelDistance'].Road}
                  colorvalue={color2}
                />
              </div>
            </div>
            <div className='dashgraphlinecont'>
              <h2 className='dashgraph__header'>Cargo Emissions</h2>
              <div className='dashgraphline__cont'>
                <Linegraph vizarray={data['Cargo'].Road} colorvalue={color1} />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
