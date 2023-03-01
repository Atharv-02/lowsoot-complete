import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../contexts/Authcontext';

export function Bsrtable3(params) {
  // const { reportdata } = params;
  const [loading, setLoading] = useState(true);
  const { token, isuserloggedin, setIsuserloggedin, setToken } = useAuth();
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
        // console.log(data);
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
              Please provide details of air emissions (other than GHG emissions)
              by the entity, in the following format:
            </div>
            <table className='bsr_table'>
              <thead className='bsr_thead'>
                <tr className='bsr_tr'>
                  <th className='bsr_th'>Parameter</th>
                  <th className='bsr_th'>Unit</th>
                  <th className='bsr_th'>FY 2023 (Current Financial Year)</th>
                  <th className='bsr_th'>FY 2022 (Previous Financial Year)</th>
                </tr>
              </thead>
              <tbody className='bsr_body'>
                <tr className='bsr_tr'>
                  <td className='bsr_td'>
                    Total Scope 1 emissions (Break-up of the GHG into CO2, CH4,
                    N2O, HFCs, PFCs, SF6, NF3, if available)
                  </td>
                  <td className='bsr_td'>Metric tonnes of CO2 equivalent</td>
                  <td className='bsr_td'>{data1['scope1']}</td>
                  <td className='bsr_td'>{data2['scope1']}</td>
                </tr>
                <tr className='bsr_tr'>
                  <td className='bsr_td'>
                    Total Scope 2 emissions (Break-up of the GHG into CO2, CH4,
                    N2O, HFCs, PFCs, SF6, NF3, if available)
                  </td>
                  <td className='bsr_td'>Metric tonnes of CO2 equivalent</td>
                  <td className='bsr_td'>{data1['scope2']}</td>
                  <td className='bsr_td'>{data2['scope2']}</td>
                </tr>
                <tr className='bsr_tr'>
                  <td className='bsr_td'>
                    Total Scope 1 and Scope 2 emissions per rupee of turnover
                  </td>
                  <td className='bsr_td'>Metric tonnes of CO2 equivalent</td>
                  <td className='bsr_td'>-</td>
                  <td className='bsr_td'>-</td>
                </tr>
                <tr className='bsr_tr'>
                  <td className='bsr_td'>
                    Total Scope 1 and Scope 2 emission intensity (optional) -
                    the relevant metric may be selected by the entity
                  </td>
                  <td className='bsr_td'>Metric tonnes of CO2 equivalent</td>
                  <td className='bsr_td'>-</td>
                  <td className='bsr_td'>-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
}
