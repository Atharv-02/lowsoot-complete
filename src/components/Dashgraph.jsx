import { Linegraph } from './Linegraph';
import { Bargraph } from './Bargraph';
import { chartarray } from '../sampledata/data';
import { Areagraph } from './Areagraph';
import { Scatterchartgraph } from './Scatterchart';
import { color1 } from '../color';
import { Piegraph } from './Piegraph';
export function Dashgraph() {
  return (
    <div
      className='dashgraphs arrange
    '
    >
      <div className='dashgraphlinecont'>
        <h2 className='dashgraph__header'>
          Air Travel in CO<sub>2</sub>e
        </h2>
        <div className='dashgraphline__cont'>
          <Linegraph vizarray={chartarray} colorvalue={color1} />
        </div>
      </div>
      <div className='dashgraphlinecont'>
        <h2 className='dashgraph__header'>
          Travel in CO<sub>2</sub>e
        </h2>
        <div className='dashgraphline__cont'>
          <Piegraph per1={10} name1='Travel' />
        </div>
      </div>
      <div className='dashgraphbarcont'>
        <h2 className='dashgraph__header'>
          Road Travel CO<sub>2</sub>e
        </h2>
        <div className='dashgraphbar__cont'>
          <Bargraph vizarray={chartarray} colorvalue={color1} />
        </div>
      </div>
      <div className='dashgraphlinecont'>
        <h2 className='dashgraph__header'>
          Air Travel in CO<sub>2</sub>e
        </h2>
        <div className='dashgraphline__cont'>
          <Areagraph vizarray={chartarray} colorvalue={color1} />
        </div>
      </div>
      <div className='dashgraphlinecont'>
        <h2 className='dashgraph__header'>
          Air Travel in CO<sub>2</sub>e
        </h2>
        <div className='dashgraphline__cont'>
          <Scatterchartgraph vizarray={chartarray} colorvalue={color1} />
        </div>
      </div>
    </div>
  );
}
