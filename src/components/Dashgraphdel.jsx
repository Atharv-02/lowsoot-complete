import { Linegraph } from './Linegraph';
import { Bargraph } from './Bargraph';
import { chartarray } from '../sampledata/data';
// import { Areagraph } from "./Areagraph";
import { color1 } from '../color';

export function Dashgraphdel() {
  // const { visualstate } = useVisuals();
  // console.log({ electricwale: visualstate.electricty.Electricity });
  return (
    <div className='dashgraphs arrange'>
      <div className='dashgraphbarcont'>
        <h2 className='dashgraph__header'>Amount of distance travelled</h2>
        <div className='dashgraphbar__cont'>
          <Bargraph vizarray={chartarray} colorvalue={color1} />
        </div>
      </div>
      <div className='dashgraphlinecont'>
        <h2 className='dashgraph__header'>Emission by delivery</h2>
        <div className='dashgraphline__cont'>
          <Linegraph vizarray={chartarray} />
        </div>
      </div>
    </div>
  );
}
