import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../contexts/Authcontext';
export function Bsrtable1() {
  // const { reportdata } = params;
  const { token, isuserloggedin, setIsuserloggedin, setToken } = useAuth();
  const [loading, setLoading] = useState(true);
  const [data1, setData1] = useState();
  const [data2, setData2] = useState();
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

        const { data } = await axios.post(
          'https://emissions-calculator-mc2k.onrender.com/summary',
          {
            startDate: '2023-01-01',
            endDate: '2023-12-31',
          },
          config
        );

        console.log(data);
        if (data) {
          setData1(data);
        }
      } catch (err) {
        console.log(err);
        setIsuserloggedin(false);
      }
    }

    async function func1() {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        // const bodyParameters = {
        //   key: 'value',
        // };

        const { data } = await axios.post(
          'https://emissions-calculator-mc2k.onrender.com/summary',
          {
            startDate: '2022-01- 01',
            endDate: '2022-12- 31',
          },
          config
        );
        // console.log(data);
        console.log(data);
        if (data) {
          setData2(data);
        }
      } catch (err) {
        console.log(err);
        setIsuserloggedin(false);
      }
    }
    func2();
    func1();
  }, []);

  return (
    <>
      {!(data1 && data2) || (
        <>
          <div>
            <div className='bsr_table_details'>
              Details of total energy consumption (in Joules or multiples) and
              energy intensity, in the following format:
            </div>
            <table className='bsr_table'>
              <thead className='bsr_thead'>
                <tr className='bsr_tr'>
                  <th className='bsr_th'>Parameter</th>
                  <th className='bsr_th'>FY 2023 (Current Financial Year)</th>
                  <th className='bsr_th'>FY 2022 (Previous Financial Year)</th>
                </tr>
              </thead>
              <tbody className='bsr_body'>
                <tr className='bsr_tr'>
                  <td className='bsr_td'>Total electricity consumption (A)</td>
                  <td className='bsr_td'>
                    {data1['totalElectricityUsage']} kWh
                  </td>
                  <td className='bsr_td'>
                    {data2['totalElectricityUsage']} kWh
                  </td>
                </tr>
                <tr className='bsr_tr'>
                  <td className='bsr_td'>Total fuel consumption (B)</td>
                  <td className='bsr_td'>{data1['totalFuelExpenditure']} L</td>
                  <td className='bsr_td'>{data2['totalFuelExpenditure']} L</td>
                </tr>
                <tr className='bsr_tr'>
                  <td className='bsr_td'>Total energy consumption (A+B+C)</td>
                  <td className='bsr_td'>
                    {data1['totalElectricityUsage'] +
                      data1['totalFuelExpenditure']}
                  </td>
                  <td className='bsr_td'>
                    {data2['totalElectricityUsage'] +
                      data2['totalFuelExpenditure']}
                  </td>
                </tr>
                <tr className='bsr_tr'>
                  <td className='bsr_td'>
                    Energy intensity per rupee of turnover (Total energy
                    consumption/ turnover in rupees)
                  </td>
                  <td className='bsr_td'>-</td>
                  <td className='bsr_td'>-</td>
                </tr>
                <tr className='bsr_tr'>
                  <td className='bsr_td'>
                    Energy intensity (optional) - the relevant metric may be
                    selected by the entity
                  </td>
                  <td className='bsr_td'>
                    {data1['TotalProductSales']
                      ? (data1['totalElectricityUsage'] +
                          data1['totalFuelExpenditure']) /
                        data1['TotalProductSales']
                      : '-'}
                  </td>
                  <td className='bsr_td'>
                    {data2['TotalProductSales']
                      ? (data2['totalElectricityUsage'] +
                          data2['totalFuelExpenditure']) /
                        data2['TotalProductSales']
                      : '-'}
                  </td>
                </tr>
                {/**
           * Energy intensity (optional) – the
relevant metric may be selected
by the entity
          */}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
}
