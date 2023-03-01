import { Linegraph } from './Linegraph';
import { Bargraph } from './Bargraph';
// import { useVisuals } from "../contexts/Visualcontext";
import { chartarray } from '../sampledata/data';
import { Areagraph } from './Areagraph';
import { color3 } from '../color';
import { Piegraph } from './Piegraph';

export function Dashgrapes3() {
  return (
    <div className='dashgraphs arrange'>
      <div className='dashgraphlinecont hide'>
        <h2 className='dashgraph__header'>&nbsp;</h2>
        <div style={{ visibility: 'hidden' }} className='dashgraphline__cont'>
          <Linegraph vizarray={chartarray} colorvalue={color3} />
        </div>
      </div>
      <div className='dashgraphbarcont'>
        <h2 className='dashgraph__header'>
          Electricity in CO<sub>2</sub>e (Scope 3)
        </h2>
        <div className='dashgraphbar__cont'>
          <Bargraph vizarray={chartarray} colorvalue={color3} />
        </div>
      </div>
      <div className='dashgraphlinecont'>
        <h2 className='dashgraph__header'>
          Electricity in CO<sub>2</sub>e
        </h2>
        <div className='dashgraphline__cont'>
          <Piegraph per1={16} name1='Electricity S3' />
        </div>
      </div>
      <div className='dashgraphlinecont'>
        <h2 className='dashgraph__header'>
          Electricity in CO<sub>2</sub>e
        </h2>
        <div className='dashgraphline__cont'>
          <Areagraph vizarray={chartarray} colorvalue={color3} />
        </div>
      </div>
    </div>
  );
}
