import { Databoardcontols } from '../components/Databoardcontols';
import { Lowsootfooter } from '../components/Lowsootfooter';
import { Databoardtablec } from '../components/Databoardtablec';
import { Databoardtablee } from '../components/Databoardtablee';
import { useDataboard } from '../contexts/Databoard';
import { Datainmodal } from '../components/Datainmodal';
import { Sidenavv3 } from '../components/sidenav/Sidenavv3';
import { Topbarv3 } from '../components/topbar/Topbarv3';
import { Databoardtablef } from '../components/Databoardtablef';
import { useParams } from 'react-router-dom';
import { Databoardtableco } from '../components/Databoardtableco';
import { Databoardtablep } from '../components/Databoardtablep';
import { Databoardtableb } from '../components/Databoardtableb';
import { Databoardtabledel } from '../components/Databoardtabledel';
import { Databoardtablecn } from '../components/Databoardtablecn';
export function Databoard() {
  const { name } = useParams();
  const { databoardstate, databoarddispatch } = useDataboard();
  return (
    <>
      <div className='dcontainer'>
        <Sidenavv3 />
        <div className='datamain'>
          <Topbarv3 />
          <div className='databoardmaincontent'>
            <h1 className='databoardheader'>Data-in Board</h1>
            <div className='databoardupoptions'>
              <div className='databoardupoption'>
                <button
                  onClick={() =>
                    databoarddispatch({ type: 'SHOW_SHEETS_MODAL' })
                  }
                  className='databoardupoption_btn'
                >
                  <span className='databoardupoption_btntxt'>connect</span>
                  <img
                    className='databoardupoption_btnlogo'
                    src='https://www.gstatic.com/images/branding/product/2x/hh_sheets_64dp.png'
                    alt='Google_Sheets'
                  />
                </button>
              </div>
            </div>
            <div className='databoardtablecont'>
              <div className='databoardtabletop'>
                {name === 'electricity' && (
                  <div>
                    <h2 className='databoardtabletop__header'>Electricity</h2>
                    <p className='databoardtabletop__norows'>6 results found</p>
                  </div>
                )}
                {name === 'cargo' && (
                  <div>
                    <h2 className='databoardtabletop__header'>Cargo</h2>
                    <p className='databoardtabletop__norows'>6 results found</p>
                  </div>
                )}
                {name === 'fuel' && (
                  <div>
                    <h2 className='databoardtabletop__header'>Fuel</h2>
                    <p className='databoardtabletop__norows'>6 results found</p>
                  </div>
                )}
                {name === 'commute' && (
                  <div>
                    <h2 className='databoardtabletop__header'>Commute</h2>
                    <p className='databoardtabletop__norows'>6 results found</p>
                  </div>
                )}
                {name === 'Building' && (
                  <div>
                    <h2 className='databoardtabletop__header'>Building</h2>
                    <p className='databoardtabletop__norows'>6 results found</p>
                  </div>
                )}
                {name === 'delivery' && (
                  <div>
                    <h2 className='databoardtabletop__header'>Delivery</h2>
                    <p className='databoardtabletop__norows'>6 results found</p>
                  </div>
                )}
                {name === 'product' && (
                  <div>
                    <h2 className='databoardtabletop__header'>Product</h2>
                    <p className='databoardtabletop__norows'>6 results found</p>
                  </div>
                )}
                {name === 'carbon-neutral' && (
                  <div>
                    <h2 className='databoardtabletop__header'>
                      Carbon Neutral
                    </h2>
                    <p className='databoardtabletop__norows'>6 results found</p>
                  </div>
                )}
                <div className='databoardtabletop__controls'>
                  <Databoardcontols />
                </div>
              </div>
              <div className='databoardtable'>
                {name === 'cargo' && <Databoardtablec />}
                {name === 'electricity' && <Databoardtablee />}
                {name === 'fuel' && <Databoardtablef />}
                {name === 'commute' && <Databoardtableco />}
                {name === 'delivery' && <Databoardtabledel />}
                {name === 'Building' && <Databoardtableb />}
                {name === 'product' && <Databoardtablep />}
                {name === 'carbon-neutral' && <Databoardtablecn />}
              </div>
            </div>
          </div>
          <Lowsootfooter />
          {databoardstate.sheetsmodal && <Datainmodal />}
        </div>
      </div>
    </>
  );
}
