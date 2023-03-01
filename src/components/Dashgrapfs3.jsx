import { Linegraph } from './Linegraph';
import { Bargraph } from './Bargraph';
import { chartarray } from '../sampledata/data';
import { Areagraph } from './Areagraph';
import { color3 } from '../color';
import { Piegraph } from './Piegraph';
export function Dashgrapfs3() {
  return (
    <div className='dashgraphs arrange'>
      <div className='dashgraphlinecont hide'>
        <h2 className='dashgraph__header'>&nbsp;</h2>
        <div
          style={{ visibility: 'hidden', display: 'none' }}
          className='dashgraphline__cont'
        >
          <Linegraph vizarray={chartarray} colorvalue={color3} />
        </div>
      </div>
      <div className='dashgraphbarcont'>
        <h2 className='dashgraph__header'>
          Fuel in CO<sub>2</sub>e (Scope 3)
        </h2>
        <div className='dashgraphbar__cont'>
          <Bargraph vizarray={chartarray} colorvalue={color3} />
        </div>
      </div>
      <div className='dashgraphlinecont'>
        <h2 className='dashgraph__header'>
          Fuel in CO<sub>2</sub>e (Scope 3)
        </h2>
        <div className='dashgraphline__cont'>
          <Piegraph per1={8} name1='Fuel (S3)' />
        </div>
      </div>
      <div className='dashgraphlinecont'>
        <h2 className='dashgraph__header'>
          Fuel in CO<sub>2</sub>e
        </h2>
        <div className='dashgraphline__cont'>
          <Areagraph vizarray={chartarray} colorvalue={color3} />
        </div>
      </div>
    </div>
  );
}
