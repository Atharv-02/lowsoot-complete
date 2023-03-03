import { useState, useEffect } from 'react';
import axios from 'axios';
import { Linegraph } from './Linegraph';
import { chartarray } from '../sampledata/data';
import { Scattergraphblock } from './summary/Scattergraphblock';
import { width } from '@mui/system';
import { useAuth } from '../contexts/Authcontext';
import { redirect } from 'react-router-dom';
export function Dashgraphcn() {
  // const { visualstate } = useVisuals();
  // console.log({ electricwale: visualstate.electricty.Electricity });
  const [task, setTask] = useState();
  const { token, isuserloggedin, setIsuserloggedin, setToken } = useAuth();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [taskData, setTaskData] = useState();
  const [dataGraph1, setDataGraph1] = useState();
  const [dataGraph2, setDataGraph2] = useState();

  const postData = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      setLoading(true);
      const c = await axios.post(
        'https://www.lowsootbackend.xyz/taskData',
        { emissionType: 'Fuel' },
        config
      );
      console.log(c);
      setTaskData(c.data);
      setDataGraph1(
        c['data'].map((item) => {
          return {
            amountSpent: item.amountSpent,
            emissionTillDate: item.emissionTillDate,
          };
        })
      );

      setDataGraph2(
        c['data'].map((item) => {
          return {
            amountSpent: item.amountSpent,
            goal: item.goal,
          };
        })
      );

      setLoading(false);
    } catch (err) {
      console.log(err);
      // setIsuserloggedin(false);
    }
  };

  useEffect(() => {
    const func = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const {
          data: { taskNames: response },
        } = await axios.get(
          'https://emissions-calculator-mc2k.onrender.com/taskNames',
          config
        );
        console.log(response);
        setData(response);
        setLoading(false);
        console.log(response);
      } catch (err) {
        console.log(err);
        return redirect('/login');
      }
    };

    func();
  }, []);

  return (
    <>
      {loading || (
        <>
          <div className='task-choose'>
            <select
              type={'text'}
              value={task}
              style={{
                appearance: 'none',
                border: 'solid 2px',

                borderRadius: '4px',
                padding: '1.2rem',
                width: '170px',
                margin: '2rem',
                fontSize: '2rem',
              }}
              required={true}
              onChange={(e) => {
                const value = e.target.value;
                setTask(value);
                postData();
              }}
            >
              <option selected='' disabled='' value=''>
                Choose...
              </option>
              {data.map((item) => {
                return <option value={item}>{item}</option>;
              })}
            </select>
          </div>
          {dataGraph1 ? (
            <>
              <div className='dashgraphs arrange'>
                <div
                  className='dashgraphline__cont'
                  style={{
                    borderRadius: '20px',
                    width: '560px',
                    height: '100%',
                  }}
                >
                  <Scattergraphblock
                    vizarray={dataGraph1}
                    graphname={'Total Emission vs Amount Spent'}
                    colorvalue={'#d64543'}
                  />
                </div>
                <div
                  className='dashgraphline__cont'
                  style={{ borderRadius: '20px', width: '560px' }}
                >
                  <Scattergraphblock
                    vizarray={dataGraph2}
                    graphname={'Goal vs Amount Spent'}
                    colorvalue={'#d64543'}
                  />
                </div>
              </div>
            </>
          ) : (
            <div className='no'>no data to display</div>
          )}
        </>
      )}
    </>
  );
}
