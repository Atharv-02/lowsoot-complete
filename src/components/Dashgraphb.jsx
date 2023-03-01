import { Linegraph } from './Linegraph';
import { chartarray } from '../sampledata/data';
import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/Authcontext';
import axios from 'axios';
export function Dashgraphb() {
  const {
    token,
    setToken,
    isuserloggedin,
    setIsuserloggedin,
    company,
    setCompany,
  } = useAuth();
  const arrayGenerate = () => {
    const c = Object.keys(data['Building']['All']).map(function (key, index) {
      return { month: key, emission: data['Building']['All'][key] };
    });
    console.log(c);
    return c;
  };
  // const { visualstate } = useVisuals();
  // console.log({ electricwale: visualstate.electricty.Electricity });
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
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
      }
    }
    func2();
  }, []);

  return (
    <div className='dashgraphs arrange'>
      <div className='dashgraphlinecont'>
        <h2 className='dashgraph__header'>Emission by Building</h2>
        <div className='dashgraphline__cont'>
          {loading || <Linegraph vizarray={arrayGenerate()} />}
        </div>
      </div>
    </div>
  );
}
