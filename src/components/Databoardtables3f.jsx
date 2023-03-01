export function Databoardtables3f() {
  const lo = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <table className="databoardtable__table">
        <thead className="databoardtable__tablehead">
          <tr className="databoardtable__theadtr">
            <th className="databoardtable__theadth" scope="col">
              date
            </th>
            <th className="databoardtable__theadth" scope="col">
              Volume
            </th>
            <th className="databoardtable__theadth" scope="col">
              Type
            </th>
            <th className="databoardtable__theadth" scope="col">
              Source
            </th>
            <th className="databoardtable__theadth" scope="col">
              Actions
            </th>
          </tr>
        </thead>
        <tbody></tbody>
        <tbody className="databoardtable__tablebody">
          {[...lo].map((item) => {
            return (
              <tr key={item} className="databoardtable__tabletr">
                <td className="databoardtable__tabletd">25 Jul 2022</td>
                <td className="databoardtable__tabletd">{item * 1000}</td>
                <td className="databoardtable__tabletd">1</td>
                <td className="databoardtable__tabletd">-</td>
                <td className="databoardtable__tabletd">coming soon</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
