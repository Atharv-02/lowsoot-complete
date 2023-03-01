import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../contexts/Authcontext';
export function Databoardtablep() {
  const [showInput, setShowInput] = useState(false);
  const [product, setProduct] = useState('');
  const [items, setItems] = useState('');
  const [dates, setDate] = useState('');
  const [lo, setLo] = useState();
  const [loading, setLoading] = useState(true);
  const { token, setToken, isuserloggedin, setIsuserloggedin } = useAuth();
  const handleChange = (event) => {
    setDate(event.target.value);
  };

  const postData = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    console.log({
      numberOfItems: items,
      type: product,
      date: dates,
    });

    await axios.post(
      'http://15.207.87.23:3000/productEmission',
      {
        numberOfItems: items,
        type: product,
        date: dates,
      },
      config
    );

    setLo([...lo, { numberOfItems: items, type: product, date: dates }]);
    console.log(lo);
  };

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

        const { data: resp } = await axios.get(
          'http://15.207.87.23:3000/productEmissions',

          config
        );
        console.log(resp);
        if (resp) {
          setLoading(false);
          setLo(resp);
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
                  Type of Product
                </th>
                <th className='databoardtable__theadth' scope='col'>
                  Quantity
                </th>
              </tr>
            </thead>
            <tbody className='databoardtable__tablebody'>
              {[...lo].map((item, idx) => {
                return (
                  <tr key={idx} className='databoardtable__tabletr'>
                    <td className='databoardtable__tabletd'>{item.date}</td>
                    <td className='databoardtable__tabletd'>{item.type}</td>
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
              padding: '8px',
              margin: '0 auto',
            }}
          >
            {showInput ? (
              <div className='data-pro' style={{ fontSize: '14px' }}>
                <input
                  type='date'
                  value={dates}
                  onChange={handleChange}
                  style={{
                    appearance: 'none',
                    border: 'solid 0.5px',
                    margin: '0 0 0 8rem',
                    borderRadius: '4px',
                    boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)',
                    padding: '8px',
                  }}
                />
                <select
                  type={'text'}
                  value={product}
                  style={{
                    appearance: 'none',
                    border: 'solid 0.5px',
                    padding: '8px',
                    margin: '0 0 0 25rem',
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
                <input
                  type={'number'}
                  value={items}
                  style={{
                    appearance: 'none',
                    border: 'solid 0.5px',
                    margin: '0 1.5rem 0 10rem',
                    padding: '8px',
                    borderRadius: '4px',
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
                      product !== ''
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
              </div>
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
