export function Bsrtable6(params) {
  return (
    <div>
      <div className='bsr_table_details'>
        Provide the following details related to water discharged:
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
            <td colSpan={4} className='full_colspan'>
              Water discharge by destination and level of treatment (in
              kilolitres)
            </td>
          </tr>
          <tr className='bsr_tr'>
            <td className='bsr_td'>
              Total Scope 3 emissions (Break-up of the GHG into CO2, CH4, N2O,
              HFCs, PFCs, SF6, NF3, if available)
            </td>
            <td className='bsr_td'>Metric tonnes of CO2 equivalent</td>
            <td className='bsr_td'>-</td>
            <td className='bsr_td'>-</td>
          </tr>
          <tr className='bsr_tr'>
            <td className='bsr_td'>
              Total Scope 3 emissions per rupee of turnover
            </td>
            <td className='bsr_td'>Metric tonnes of CO2 equivalent</td>
            <td className='bsr_td'>-</td>
            <td className='bsr_td'>-</td>
          </tr>
          <tr className='bsr_tr'>
            <td className='bsr_td'>
              Total Scope 3 emission intensity (optional) - the relevant metric
              may be selected by the entity
            </td>
            <td className='bsr_td'>Metric tonnes of CO2 equivalent</td>
            <td className='bsr_td'>-</td>
            <td className='bsr_td'>-</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
