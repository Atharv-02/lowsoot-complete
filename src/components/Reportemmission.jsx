export function Reportemmission(params) {
  const { reportdata } = params;
  return (
    <div className="reportmaincont__semmissions">
      <p className="reportmaincont__semmissionlabel">Scope 2</p>
      <div className="semmission__tablecont">
        <table className="semmission__table">
          <thead>
            <tr className="semmission__tablehead">
              <th className="semmission__theadtr">Month</th>
              <th className="semmission__theadtr">Source</th>
              {/* <th className="semmission__theadtr">Fuel</th>
              <th className="semmission__theadtr">Quantity</th> */}
              <th className="semmission__theadtr">
                CO<sub>2</sub>e
              </th>
            </tr>
          </thead>
          <tbody className="semmission__tablebody">
            {[...reportdata.Electricity.Electricity]
              .slice(4, 7)
              .map((itmx, idx) => {
                return (
                  <tr key={idx} className="semmission__tabletr">
                    <td className="semmission__tabletd">{itmx.month}</td>
                    <td className="semmission__tabletd semmission__tabletd--source">
                      Electricity
                    </td>
                    {/* <td className="semmission__tabletd">
                <div className="semmission__tabletd--fuelname">Natural gas</div>
              </td> */}
                    {/* <td className="semmission__tabletd">10000 SCF</td> */}
                    <td className="semmission__tabletd">
                      <div className="semmission__tabletd--co2e">
                        {itmx.emission.toFixed(1)}
                      </div>
                    </td>
                  </tr>
                );
              })}
            {/* <tr className="semmission__tabletr">
              <td className="semmission__tabletd">June</td>
              <td className="semmission__tabletd semmission__tabletd--source">
                Electricity
              </td>
              <td className="semmission__tabletd">
                <div className="semmission__tabletd--fuelname">Propane</div>
              </td>
              <td className="semmission__tabletd">1000 gallons</td>
              <td className="semmission__tabletd">
                <div className="semmission__tabletd--co2e">0</div>
              </td>
            </tr>
            <tr className="semmission__tabletr">
              <td className="semmission__tabletd">July</td>
              <td className="semmission__tabletd semmission__tabletd--source">
                Electricity
              </td>
              <td className="semmission__tabletd">
                <div className="semmission__tabletd--fuelname">Coal</div>
              </td>
              <td className="semmission__tabletd">100 gallons</td>
              <td className="semmission__tabletd">
                <div className="semmission__tabletd--co2e">150</div>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
