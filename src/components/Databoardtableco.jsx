import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuth } from '../contexts/Authcontext';
export function Databoardtableco() {
  const [showInput, setShowInput] = useState(false);
  const [comType, setCom] = useState('');
  const [fuelType, setFuel] = useState('');
  const [vehicleType, setVehicle] = useState('');
  const [distance, setDistance] = useState('');
  const [dates, setDate] = useState('');
  const [passengers, setPassengers] = useState('');
  const [data, setData] = useState('');
  const [lo, setLo] = useState();
  const [loading, setLoading] = useState(true);

  const { token, setToken, isuserloggedin, setIsuserloggedin } = useAuth();
  const postData = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    setLoading(true);
    try {
      const c = data.find((item, index) => {
        return item.factor === vehicleType;
        // if (item.factor === vehicleType) {
        //   return index;
        // }
      });

      console.log(c);
      if (c) {
        setLoading(false);

        await axios.post(
          'hhttp://15.207.87.23:3000/travelEmission',
          {
            distance: distance,
            travelBy: 'Road',
            factorType: c.id,
            passengers: passengers,
            travelType: comType,
            date: dates,
          },
          config
        );

        setLo([
          ...lo,
          {
            distance: distance,
            travelBy: 'Road',
            factorType: c.id,
            passengers: passengers,
            travelType: comType,
            date: dates,
          },
        ]);
      }
    } catch (err) {
      console.log(err);
      setIsuserloggedin(false);
    }
  };
  useEffect(() => {
    const func = async () => {
      try {
        const {
          data: { Road: response },
        } = await axios.get('http://15.207.87.23:3000/allTravelFactors');

        setData(response);
      } catch (err) {
        console.log(err);
        setIsuserloggedin(false);
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
          'http://15.207.87.23:3000/travelEmissions',

          config
        );
        console.log(resp);
        if (resp) {
          setLoading(false);
          setLo(resp);
        }
      } catch (err) {
        console.log(err);
        setIsuserloggedin(false);
      }
    }
    func();
    func2();
  }, []);

  const handleChange = (event) => {
    setDate(event.target.value);
  };
  console.log(loading);

  return (
    <>
      {loading || (
        <>
          <table className='databoardtable__table'>
            <thead className='databoardtable__tablehead'>
              <tr className='databoardtable__theadtr'>
                {/* <th className="databoardtable__thead  ">
                <span className="blank__letters">check</span>
              </th> */}
                <th className='databoardtable__theadth' scope='col'>
                  Date
                </th>
                <th className='databoardtable__theadth' scope='col'>
                  Type of Commute
                </th>

                <th className='databoardtable__theadth' scope='col'>
                  Type of Vehicle
                </th>
                <th className='databoardtable__theadth' scope='col'>
                  Number Of Passengers
                </th>
                <th className='databoardtable__theadth' scope='col'>
                  Amount of Distance
                </th>
              </tr>
            </thead>
            {console.log(data)}
            {console.log(lo)}
            <tbody className='databoardtable__tablebody'>
              {lo.map((item, idx) => {
                return (
                  <tr key={idx} className='databoardtable__tabletr'>
                    <td className='databoardtable__tabletd'>{item.date}</td>
                    <td className='databoardtable__tabletd'>
                      {item.travelType}
                    </td>
                    <td className='databoardtable__tabletd'>
                      {data[item.factorType - 1].factor}
                    </td>
                    <td className='databoardtable__tabletd'>
                      {item.passengers}
                    </td>
                    <td className='databoardtable__tabletd'>{item.distance}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div
            style={{
              width: '100%',
              padding: '8px',
            }}
          >
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
                            boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)',
                            // margin: '0 4rem 0 2.4rem',
                            marginLeft: '4rem',
                            padding: '8px',
                          }}
                        />
                      </td>

                      <td className='databoardtable__tabletd' scope='col'>
                        <select
                          type={'text'}
                          value={comType}
                          style={{
                            appearance: 'none',
                            border: 'solid 0.5px',
                            padding: '8px',
                            // margin: '0 8rem 0 2.4rem',
                            marginLeft: '5rem',
                            borderRadius: '4px',
                          }}
                          required={true}
                          onChange={(e) => {
                            const value = e.target.value;
                            setCom(value);
                          }}
                        >
                          <option selected='' disabled='' value=''>
                            Choose...
                          </option>
                          <option value='Business'>Business</option>
                          <option value='Employee'>Employee</option>
                        </select>
                      </td>

                      <td className='databoardtable__tabletd' scope='col'>
                        <select
                          type={'text'}
                          value={vehicleType}
                          style={{
                            appearance: 'none',
                            border: 'solid 0.5px',
                            marginLeft: '5rem',
                            padding: '8px',
                            // margin: '0 9rem 0 2.4rem',
                            borderRadius: '4px',
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
                          {data.map((resp) => {
                            return <option>{resp.factor}</option>;
                          })}
                        </select>
                      </td>

                      <td className='databoardtable__tabletd' scope='col'>
                        <input
                          type={'number'}
                          value={passengers}
                          style={{
                            appearance: 'none',
                            border: 'solid 0.5px',
                            padding: '8px',
                            // margin: '0 1rem 0 0.5rem',
                            borderRadius: '4px',
                            width: '10vw',
                            justifySelf: 'flex-end',
                            marginLeft: '3rem',
                          }}
                          required={true}
                          onChange={(e) => {
                            const value = parseInt(e.target.value);
                            if (value > -1) {
                              setPassengers(value);
                            } else if (e.target.value === '') {
                              setPassengers('');
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
                            padding: '8px',
                            // margin: '0 1rem 0 0.5rem',
                            borderRadius: '4px',
                            width: '10vw',
                            justifySelf: 'flex-end',
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
                      comType !== '' &&
                      vehicleType !== ''
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

                      console.log(lo);
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
