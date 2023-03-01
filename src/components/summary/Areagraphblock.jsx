import { Areagraph } from "../Areagraph";
export function Areagraphblock(params) {
  const { vizarray, graphname, colorvalue } = params;
  return (
    <>
      <div className="dashgraphbarcont">
        <h2 className="dashgraph__header">
          {graphname} in CO<sub>2</sub>e
        </h2>
        <div className="dashgraphbar__cont">
          <Areagraph vizarray={vizarray} colorvalue={colorvalue} />
        </div>
      </div>
    </>
  );
}
