import { Bargraph } from '../Bargraph';

export function Bargraphblock(params) {
  const { vizarray, graphname, colorvalue } = params;
  return (
    <>
      <div className='dashgraphbarcont'>
        <h2 className='dashgraph__header'>{graphname}</h2>
        <div className='dashgraphbar__cont'>
          <Bargraph vizarray={vizarray} colorvalue={colorvalue} />
        </div>
      </div>
    </>
  );
}
