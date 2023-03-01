export function Bsrtable2() {
  return (
    <div>
      <div className='bsr_table_details'>
        Please provide details of air emissions (other than GHG emissions) by
        the entity, in the following format:
      </div>
      <table className='bsr_table'>
        <thead className='bsr_thead'>
          <tr className='bsr_tr'>
            <th className='bsr_th'>Parameter</th>
            <th className='bsr_th'>Please specify unit</th>
            <th className='bsr_th'>FY 2023 (Current Financial Year)</th>
            <th className='bsr_th'>FY 2022 (Previous Financial Year)</th>
          </tr>
        </thead>
        <tbody className='bsr_body'>
          <tr className='bsr_tr'>
            <td className='bsr_td'>NOx</td>
            <td className='bsr_td'>Units</td>
            <td className='bsr_td'>-</td>
            <td className='bsr_td'>-</td>
          </tr>
          <tr className='bsr_tr'>
            <td className='bsr_td'>SOx</td>
            <td className='bsr_td'>Units</td>
            <td className='bsr_td'>-</td>
            <td className='bsr_td'>-</td>
          </tr>
          <tr className='bsr_tr'>
            <td className='bsr_td'>SOx</td>
            <td className='bsr_td'>Units</td>
            <td className='bsr_td'>-</td>
            <td className='bsr_td'>-</td>
          </tr>
          <tr className='bsr_tr'>
            <td className='bsr_td'>Particulate matter (PM)</td>
            <td className='bsr_td'>Units</td>
            <td className='bsr_td'>-</td>
            <td className='bsr_td'>-</td>
          </tr>
          <tr className='bsr_tr'>
            <td className='bsr_td'>Volatile organic compounds (VOC)</td>
            <td className='bsr_td'>Units</td>
            <td className='bsr_td'>-</td>
            <td className='bsr_td'>-</td>
          </tr>
          <tr className='bsr_tr'>
            <td className='bsr_td'>Hazardous air pollutants (HAP)</td>
            <td className='bsr_td'>Units</td>
            <td className='bsr_td'>-</td>
            <td className='bsr_td'>-</td>
          </tr>
          <tr className='bsr_tr'>
            <td className='bsr_td'>Others - please specify</td>
            <td className='bsr_td'>Units</td>
            <td className='bsr_td'>-</td>
            <td className='bsr_td'>-</td>
          </tr>
          {/* Particulate matter
(PM) */}
          {/**
           * Energy intensity (optional) – the
relevant metric may be selected
by the entity
          */}
        </tbody>
      </table>
    </div>
  );
}
