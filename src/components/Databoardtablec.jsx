import { useState, useEffect } from 'react';
import axios from 'axios';
import { Authprov, useAuth } from '../contexts/Authcontext';
import { redirect } from 'react-router-dom';
export function Databoardtablec() {
  const [showInput, setShowInput] = useState(false);
  const [fuelType, setFuel] = useState('');
  const [vehicleType, setVehicle] = useState('');
  const [distance, setDistance] = useState('');
  const [dates, setDate] = useState('');
  const [wt, setWt] = useState('');
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(true);
  const [lo, setLo] = useState();
  const [c, setC] = useState();
  const handleChange = (event) => {
    setDate(event.target.value);
  };
  const { token, setToken, isuserloggedin, setIsuserloggedin } = useAuth();

  const postData = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    setLoading(true);
    console.log(data);
    const c = data.find((item, index) => {
      return item.factor === vehicleType;
      // if (item.factor === vehicleType) {
      //   return index;
      // }
    });

    console.log(c);
    if (c) {
      setLoading(false);
      try {
        await axios.post(
          'http://15.207.87.23:3000/cargoEmission',
          {
            weight: wt,
            distance: distance,
            travelBy: 'Road',
            factorType: c.id,
            date: dates,
          },
          config
        );

        setLo([
          ...lo,
          {
            weight: wt,
            distance: distance,
            travelBy: 'Road',
            factorType: c.id,
            date: dates,
          },
        ]);
        setDate('');
        setDistance('');
        setWt('');
        setVehicle('');
      } catch (err) {
        console.log(err);
        setIsuserloggedin(false);
      }
    }
  };
  useEffect(() => {
    const func = async () => {
      try {
        const {
          data: { Road: response },
        } = await axios.get('http://15.207.87.23:3000/allCargoFactors');
        console.log(response);
        setData(response);
        console.log(response);
      } catch (err) {
        console.log(err);
        return redirect('/login');
      }
    };

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

        const { data: resp } = await axios.get(
          'http://15.207.87.23:3000/cargoEmissions',

          config
        );
        console.log(token);
        console.log(resp);
        if (resp) {
          console.log(resp);
          setLo(resp);
          setLoading(false);
        }
      } catch (err) {
        console.log(err);
        setIsuserloggedin(false);
      }
    }
    func();
    func2();
  }, []);

  return (
    <>
      {loading || (
        <>
          <table className='databoardtable__table'>
            <thead className='databoardtable__tablehead'>
              <tr className='databoardtable__theadtr'>
                {/* <th className="databoardtable__theadth" scope="col">
                <span className="blank__letters">check</span>
              </th> */}
                <th className='databoardtable__theadth' scope='col'>
                  Date
                </th>
                <th className='databoardtable__theadth' scope='col'>
                  Type of Vehicle
                </th>
                <th className='databoardtable__theadth' scope='col'>
                  Weight(in kg)
                </th>
                <th className='databoardtable__theadth' scope='col'>
                  Amount of Distance
                </th>
              </tr>
            </thead>
            <tbody className='databoardtable__tablebody'>
              {lo.map((item, idx) => {
                return (
                  <tr key={idx} className='databoardtable__tabletr'>
                    <td className='databoardtable__tabletd'>{item.date}</td>
                    <td className='databoardtable__tabletd'>
                      {data[item.factorType - 1].factor}
                    </td>
                    <td className='databoardtable__tabletd'>{item.weight}</td>
                    <td className='databoardtable__tabletd'>
                      {item.distance}&nbsp;kms
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div>
            {showInput ? (
              <>
                <table className='databoardtable__table'>
                  <tbody className='databoardtable__tablebody'>
                    <tr className='databoardtable__theadtr'>
                      <td className='databoardtable__tabletd' scope='col'>
                        <input
                          type='date'
                          value={dates}
                          onChange={handleChange}
                          style={{
                            appearance: 'none',
                            border: 'solid 0.5px',
                            borderRadius: '4px',
                            padding: '1.2rem',
                            boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)',
                            marginLeft: '12rem',
                            marginRight: '6rem',
                          }}
                        />
                      </td>
                      <td className='databoardtable__tabletd' scope='col'>
                        <select
                          type={'text'}
                          value={vehicleType}
                          style={{
                            appearance: 'none',
                            border: 'solid 0.5px',
                            // margin: '0px 3rem 0 0rem',
                            marginRight: '8rem',
                            borderRadius: '4px',
                            padding: '1.2rem',
                          }}
                          required={true}
                          onChange={(e) => {
                            const value = e.target.value;
                            setVehicle(value);
                          }}
                        >
                          <option selected='' disabled='' value=''>
                            Choose...
                          </option>
                          {data.map((item) => {
                            return <option>{item.factor}</option>;
                          })}
                        </select>
                      </td>
                      <td className='databoardtable__tabletd' scope='col'>
                        <input
                          type={'number'}
                          value={wt}
                          style={{
                            appearance: 'none',
                            border: 'solid 0.5px',
                            margin: '0px 3rem 0 0rem',
                            borderRadius: '4px',
                            padding: '1.2rem',
                          }}
                          required={true}
                          onChange={(e) => {
                            const value = parseInt(e.target.value);
                            if (value > -1) {
                              setWt(value);
                            } else if (e.target.value === '') {
                              setWt('');
                            }
                          }}
                        />
                      </td>
                      <td className='databoardtable__tabletd' scope='col'>
                        <input
                          type={'number'}
                          value={distance}
                          style={{
                            appearance: 'none',
                            border: 'solid 0.5px',
                            margin: '0px 3rem 0 0rem',
                            borderRadius: '4px',
                            padding: '1.2rem',
                          }}
                          required={true}
                          onChange={(e) => {
                            const value = parseInt(e.target.value);
                            if (value > -1) {
                              setDistance(value);
                            } else if (e.target.value === '') {
                              setDistance('');
                            }
                          }}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <button
                  id='addButton'
                  style={{
                    padding: '8px',
                    borderRadius: '4px',
                    margin: '2rem 0 ',
                    fontSize: '1.5rem',
                    color: 'white',
                    backgroundColor: '#4d7cfe',
                  }}
                  onClick={() => {
                    /*const change = document.querySelector(".databoardtable__tablebody")
                change.innerHTML = change.innerHTML + `
                <tr class="databoardtable__tabletr">
                <td class="databoardtable__tabletd">25 Jun 2022</td>
                <td class="databoardtable__tabletd">
                ${energy} kWh
                </td>
                <td class="databoardtable__tabletd">Coal</td>
                <td class="databoardtable__tabletd">-</td>
                <td class="databoardtable__tabletd">coming soon</td>
              </tr>
                `*/
                    if (
                      distance > -1 &&
                      distance !== '' &&
                      dates !== '' &&
                      vehicleType !== '' &&
                      wt !== ''
                    ) {
                      const dateString = dates;
                      const date = new Date(dateString);
                      const options = {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      };

                      const formattedDate = date.toLocaleDateString(
                        'en-US',
                        options
                      );
                      setShowInput(false);
                      postData();
                    }
                  }}
                >
                  Add Row
                </button>
              </>
            ) : (
              <button
                id='addButton'
                style={{
                  padding: '8px 15px',
                  borderRadius: '4px',
                  color: 'white',
                  backgroundColor: '#4d7cfe',
                  display: 'hidden',
                  marginLeft: '0',
                  fontSize: '2.75rem',
                }}
                onClick={() => setShowInput(true)}
              >
                +
              </button>
            )}
          </div>
        </>
      )}
    </>
  );
}
