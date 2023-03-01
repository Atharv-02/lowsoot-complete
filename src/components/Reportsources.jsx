import { Sourcebar } from "./Sourcebar";

export function Reportsources(params) {
  const { reportdata } = params;
  const datax = [
    {
      id: 1,
      barname: "Product Transport",
      barvalue: Number(reportdata.totalCargoScope.toFixed()),
      barpercent: (reportdata.totalCargoScope * 100) / reportdata.scope3,
      barcolor: "#ff706f",
    },
    {
      id: 2,
      barname: "Business Travel",
      barvalue: Number(reportdata.totalTravelScope.toFixed()),
      barpercent: (reportdata.totalTravelScope * 100) / reportdata.scope3,
      barcolor: "#77beeb",
    },
  ];
  return (
    <div className="reportmaincont__msources">
      <p className="reportmaincont__msourceshead">
        {/* Mobile sources */}
        Scope 3 in CO<sub>2</sub>e
      </p>
      <div className="reportmaincont__msourcebarcont">
        {datax.map((item) => (
          <Sourcebar
            key={item.id}
            barname={item.barname}
            barvalue={JSON.stringify(item.barvalue)}
            barpercent={JSON.stringify(item.barpercent)}
            barcolor={item.barcolor}
          />
        ))}
      </div>
    </div>
  );
}
