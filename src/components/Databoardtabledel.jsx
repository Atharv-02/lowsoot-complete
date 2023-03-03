import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../contexts/Authcontext';
export function Databoardtabledel() {
  const [showInput, setShowInput] = useState(false);
  const [fuelType, setFuel] = useState('');
  const [vehicleType, setVehicle] = useState('');
  const [distance, setDistance] = useState('');
  const [dates, setDate] = useState('');
  const [destintion, setDestination] = useState('');
  const [city, setCity] = useState('');
  const [data, setData] = useState('');
  const [lo, setLo] = useState();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState();
  const [items, setItems] = useState();
  const handleChange = (event) => {
    setDate(event.target.value);
  };
  const { token, setToken, isuserloggedin, setIsuserloggedin } = useAuth();
  const postData = async () => {
    try {
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
        console.log({
          numberOfItems: items,
          type: product,
          destinationCity: destintion,
          date: dates,
          factorType: c.id,
          travelBy: 'Road',
        });
        await axios.post(
          'https://www.lowsootbackend.xyz/deliveryEmission',
          {
            numberOfItems: items,
            type: product,
            destinationCity: destintion,
            date: dates,
            factorType: c.id,
            travelBy: 'Road',
          },
          config
        );
        console.log({
          numberOfItems: items,
          date: dates,
          destinationCity: destintion,
          factorType: c.id,
        });
        setLo([
          ...lo,
          {
            numberOfItems: items,
            date: dates,
            destinationCity: destintion,
            factorType: c.id,
          },
        ]);
        setDate('');
        setDistance('');
        setVehicle('');
      }
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
          data: { Road: response },
        } = await axios.get(
          'https://www.lowsootbackend.xyz/allCargoFactors',
          config
        );

        setData(response);
        console.log(response);
      } catch (err) {
        console.log(err);
        setIsuserloggedin(false);
      }
    };

    const func1 = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const {
          data: { cities: response },
        } = await axios.get(
          'https://www.lowsootbackend.xyz/citiesList',
          config
        );

        setCity(response);
        console.log(response);
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
          'https://www.lowsootbackend.xyz/deliveryEmissions',

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
    func1();
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
                  Type of Product
                </th>
                <th className='databoardtable__theadth' scope='col'>
                  Destination City
                </th>
                <th className='databoardtable__theadth' scope='col'>
                  Amount of Items
                </th>
              </tr>
            </thead>
            <tbody className='databoardtable__tablebody'>
              {[...lo].map((item, idx) => {
                return (
                  <tr key={idx} className='databoardtable__tabletr'>
                    <td className='databoardtable__tabletd'>{item.date}</td>
                    <td className='databoardtable__tabletd'>
                      {data[item.factorType - 1].factor}
                    </td>
                    <td className='databoardtable__tabletd'>{item.type}</td>

                    <td className='databoardtable__tabletd'>
                      {item.destinationCity}
                    </td>
                    <td className='databoardtable__tabletd'>
                      {item.numberOfItems}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div
            style={{
              maxWidth: '100%',
              margin: '0 auto',
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
                            marginLeft: '6rem',
                            boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)',
                            padding: '8px',
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
                            padding: '8px',
                            marginLeft: '10rem',
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
                          {data.map((auto) => {
                            return (
                              <option value={auto.factor}>{auto.factor}</option>
                            );
                          })}
                        </select>
                      </td>
                      <td className='databoardtable__tabletd' scope='col'>
                        <select
                          type={'text'}
                          value={product}
                          style={{
                            appearance: 'none',
                            border: 'solid 0.5px',
                            padding: '8px',
                            marginLeft: '8rem',
                            borderRadius: '4px',
                          }}
                          required={true}
                          onChange={(e) => {
                            const value = e.target.value;
                            setProduct(value);
                          }}
                        >
                          <option selected='' disabled='' value=''>
                            Choose...
                          </option>
                          <option>Maternity bra</option>
                          <option>Regular bra</option>
                          <option>Panty</option>
                          <option>Loungee Long tee kind</option>
                          <option>Loungee dress kind</option>
                          <option>Nighty</option>
                          <option>Lounge Bottom</option>
                        </select>
                      </td>
                      <td className='databoardtable__tabletd' scope='col'>
                        <select
                          type={'text'}
                          value={destintion}
                          style={{
                            appearance: 'none',
                            border: 'solid 0.5px',
                            padding: '8px',
                            marginLeft: '3rem',
                            borderRadius: '4px',
                          }}
                          required={true}
                          onChange={(e) => {
                            const value = e.target.value;
                            setDestination(value);
                          }}
                        >
                          <option selected='' disabled='' value=''>
                            Choose...
                          </option>
                          {city.map((auto) => {
                            return <option value={auto}>{auto}</option>;
                          })}
                        </select>
                      </td>
                      <td className='databoardtable__tabletd' scope='col'>
                        <input
                          type={'number'}
                          value={items}
                          style={{
                            appearance: 'none',
                            border: 'solid 0.5px',
                            padding: '8px',
                            borderRadius: '4px',
                            marginLeft: '4rem',
                            marginRight: '0',
                            margin: '0 2rem',
                          }}
                          required={true}
                          onChange={(e) => {
                            const value = parseInt(e.target.value);
                            if (value > -1) {
                              setItems(value);
                            } else if (e.target.value === '') {
                              setItems('');
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
                      items > -1 &&
                      items !== '' &&
                      dates !== '' &&
                      vehicleType !== '' &&
                      destintion !== ''
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
                      postData();
                      setShowInput(false);
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
