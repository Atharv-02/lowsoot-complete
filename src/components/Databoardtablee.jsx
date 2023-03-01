import axios from 'axios';
import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/Authcontext';
export function Databoardtablee() {
  const [showInput, setShowInput] = useState(false);
  const [energy, setEnergy] = useState('');
  const [dates, setDate] = useState('');
  const [source, setSource] = useState('');
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(true);
  const handleChange = (event) => {
    setDate(event.target.value);
  };

  const [lo, setLo] = useState();
  const { token, setToken, isuserloggedin, setIsuserloggedin } = useAuth();
  const postData = async () => {
    try {
      const a = data.find((item, index) => {
        console.log(item);
        return item.factor === source;
        // if (item.factor === vehicleType) {
        //   return index;
        // }
      });
      console.log(a);
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      if (a) {
        setLoading(false);

        console.log(a);

        await axios.post(
          'http://15.207.87.23:3000/electricityEmission',
          {
            energy: energy,
            factorType: a.id,
            date: dates,
          },
          config
        );

        setLo([
          ...lo,
          {
            energy: energy,
            factorType: a.id,
            date: dates,
          },
        ]);
        setDate('');
        setSource('');
        setEnergy('');
      }
    } catch (err) {
      setIsuserloggedin(false);
      console.log(err);
    }
  };

  useEffect(() => {
    const func = async () => {
      try {
        const {
          data: { All: response },
        } = await axios.get('http://15.207.87.23:3000/allElectricityFactors');

        setData(response);
        console.log(response);
      } catch (err) {
        setIsuserloggedin(false);
        console.log(err);
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
          'http://15.207.87.23:3000/electricityEmissions',

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
                  Source
                </th>
                <th className='databoardtable__theadth' scope='col'>
                  Number of Units
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
                    <td className='databoardtable__tabletd'>{item.energy}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div
            style={{
              maxWidth: '100%',
              padding: '8px',
              margin: '0 auto',
            }}
          >
            {showInput ? (
              <>
                <table className='databoardtable__table'>
                  <tbody className='databoardtable__tablebody'>
                    <tr className='databoardtable__theadtr'>
                      <td
                        className='databoardtable__tabletd'
                        scope='col'
                        style={{ width: '50%' }}
                      >
                        <input
                          type='date'
                          value={dates}
                          onChange={handleChange}
                          style={{
                            appearance: 'none',
                            border: 'solid 0.5px',
                            borderRadius: '4px',
                            boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)',
                            // margin: '0 0.0rem 0 1rem ',
                            marginLeft: '20rem',

                            padding: '8px',
                          }}
                        />
                      </td>
                      <td className='databoardtable__tabletd'>
                        <select
                          type={'text'}
                          value={source}
                          style={{
                            appearance: 'none',
                            border: 'solid 0.5px',
                            padding: '8px',
                            borderRadius: '4px',
                            marginLeft: '4rem',
                            marginRight: '2rem',
                          }}
                          required={true}
                          onChange={(e) => {
                            const value = e.target.value;
                            setSource(value);
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
                      <td className='databoardtable__tabletd'>
                        <input
                          type={'number'}
                          value={energy}
                          style={{
                            appearance: 'none',
                            border: 'solid 0.5px',
                            padding: '8px',
                            marginLeft: '4rem',
                            borderRadius: '4px',
                          }}
                          required={true}
                          onChange={(e) => {
                            const value = parseInt(e.target.value);
                            if (value > -1) {
                              setEnergy(value);
                            } else if (e.target.value === '') {
                              setEnergy('');
                            }
                          }}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <button
                  type='submit'
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
                    console.log(energy);
                    console.log(source);
                    console.log(dates);
                    if (
                      energy > -1 &&
                      energy !== '' &&
                      dates !== '' &&
                      source !== ''
                    ) {
                      console.log('Hi');
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
