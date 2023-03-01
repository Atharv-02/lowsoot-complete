// import { Linegraph } from "./Linegraph";
import { Bargraph } from './Bargraph';
import { chartarray } from '../sampledata/data';
import { Areagraph } from './Areagraph';
import { color1 } from '../color';
import { Linegraph } from './Linegraph';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../contexts/Authcontext';

export function Dashgraphco() {
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
        console.log(err);
        setIsuserloggedin(false);
      }
    }
    func2();
  }, []);
  return (
    <>
      {loading || (
        <div className='dashgraphs arrange'>
          {/* <div className='dashgraphlinecont'>
        <h2 className='dashgraph__header'>Amount of fuel</h2>
        <div className='dashgraphline__cont'>
          <Linegraph vizarray={chartarray} />
        </div>
      </div> */}
          <div className='dashgraphbarcont'>
            <h2 className='dashgraph__header'>Total distance travelled</h2>
            <div className='dashgraphbar__cont'>
              <Bargraph
                vizarray={data['TravelDistance'].Road}
                colorvalue={color1}
              />
            </div>
          </div>
          <div className='dashgraphlinecont'>
            <h2 className='dashgraph__header'>Emission by Business commute</h2>
            <div className='dashgraphline__cont'>
              <Areagraph
                vizarray={data['BusinessCommuteEmissions'].Road}
                colorvalue={color1}
              />
            </div>
          </div>
          <div className='dashgraphlinecont'>
            <h2 className='dashgraph__header'>Emission by Employee Commute</h2>
            <div className='dashgraphline__cont'>
              <Areagraph
                vizarray={data['EmployeeCommuteEmissions'].Road}
                colorvalue={color1}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
