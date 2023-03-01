export function Sourcebar(params) {
  const { barname, barvalue, barpercent, barcolor } = params;
  return (
    <div className="reportmaincont__msourcecont">
      <div className="reportmaincont__msourceconttext">
        <div className="reportmaincont__msourcename">{barname}</div>
        <div className="reportmaincont__msourcevalue">{barvalue}</div>
      </div>
      <div className="reportmaincont__msourcebar">
        <div
          style={{ backgroundColor: barcolor, width: `${barpercent}%` }}
          className="reportmaincont__msourcebar--completion reportmaincont__msourcebar--bgred"
        />
      </div>
    </div>
  );
}
