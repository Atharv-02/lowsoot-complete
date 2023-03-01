import { Scatterchartgraph } from '../Scatterchart';

export function Scattergraphblock(params) {
  const { vizarray, graphname, colorvalue } = params;
  return (
    <>
      <div
        className='dashgraphbarcont'
        style={{ paddingLeft: '0', width: '100%' }}
      >
        <h2 className='dashgraph__header' style={{ paddingLeft: '3rem' }}>
          {graphname}
        </h2>
        <div className='dashgraphbar__cont'>
          <Scatterchartgraph vizarray={vizarray} colorvalue={colorvalue} />
        </div>
      </div>
    </>
  );
}
