import { useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate, redirect, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/Authcontext';
export function Dashparameters() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const navigate = useNavigate();
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
        console.log('Hi');
        console.log(err);
        setIsuserloggedin(false);
      }
    }
    func2();
  }, []);
  return (
    <>
      {loading || (
        <>
          <div className='dashparameters'>
            <div className='dashparameter scope-1-fill'>
              <div className='dashparameter___textcont'>
                <p className='dashparameter___textvalue scope-1-value-fill'>
                  <span>{data.total}</span> CO<sub>2</sub>e
                </p>
                <p className='dashparameter___textname'>Total</p>
              </div>
            </div>
            <div className='dashparameter scope-2-fill'>
              <div className='dashparameter___textcont'>
                <p className='dashparameter___textvalue scope-2-value-fill'>
                  <span>{data.scope1}</span> CO<sub>2</sub>e
                </p>
                <p className='dashparameter___textname'>Scope1</p>
              </div>
            </div>
            <div className='dashparameter scope-3-fill'>
              <div className='dashparameter___textcont'>
                <p className='dashparameter___textvalue scope-3-value-fill'>
                  <span>{data.scope2}</span> CO<sub>2</sub>e
                </p>
                <p className='dashparameter___textname'>Scope2</p>
              </div>
            </div>
            <div className='dashparameter scope-4-fill'>
              <div className='dashparameter___textcont'>
                <p className='dashparameter___textvalue scope-4-value-fill'>
                  <span>{data.scope3}</span> CO<sub>2</sub>e
                </p>
                <p className='dashparameter___textname'>
                  Scope3
                  {/* <i className="bi bi-circle-fill scope-4-fill" />  */}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
