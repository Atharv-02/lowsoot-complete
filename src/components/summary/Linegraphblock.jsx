import { Linegraph } from "../Linegraph";

export function Linegraphblock(params) {
  const { vizarray, graphname, colorvalue } = params;
  return (
    <div className="dashgraphlinecont">
      <h2 className="dashgraph__header">
        {graphname} in CO<sub>2</sub>e
      </h2>
      <div className="dashgraphline__cont">
        <Linegraph vizarray={vizarray} colorvalue={colorvalue} />
      </div>
    </div>
  );
}
