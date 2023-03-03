import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Dashgraphco } from '../components/Dashgraco';
import { Dashgrapes3 } from '../components/Dashgrapes3';
import { Dashgrapf } from '../components/Dashgrapf';
import { Dashgrapfs3 } from '../components/Dashgrapfs3';
import { Dashgraph } from '../components/Dashgraph';
import { Dashgrapharea } from '../components/Dashgrapharea';
import { Dashgraphc } from '../components/Dashgraphc';
import { Dashgraphdel } from '../components/Dashgraphdel';
import { Dashgrape } from '../components/Dashgraphe';
import { Dashgraphp } from '../components/Dashgraphp';
import { Dashgraphb } from '../components/Dashgraphb';
import { Dashparameters } from '../components/Dashparameters';
import { Dashwebplatforms } from '../components/Dashwebplatforms';
import { Lowsootfooter } from '../components/Lowsootfooter';
import { Sidenavv3 } from '../components/sidenav/Sidenavv3';
import { Topbarv3 } from '../components/topbar/Topbarv3';
import { Dashgraphcn } from '../components/Dashgraphcn';
import { useAuth } from '../contexts/Authcontext';
import { useVisuals } from '../contexts/Visualcontext';
import { useState } from 'react';

export function Dashboard() {
  const {
    token,
    setToken,
    isuserloggedin,
    setIsuserloggedin,
    company,
    setCompany,
  } = useAuth();
  const { name } = useParams();
  const { dateval, setDateval, enddateval, setEnddateval } = useVisuals();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    async function func2() {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        // const bodyParameters = {
        //   key: 'value',
        // };

        console.log(dateval);
        console.log(enddateval);
        const { data } = await axios.post(
          'https://www.lowsootbackend.xyz/summary',
          {
            startDate: dateval,
            endDate: enddateval,
          },
          config
        );
        // console.log(data);
        console.log(data);
        if (data) {
          setData(data);
          setLoading(false);
        }
      } catch (err) {
        console.log(err);
        setIsuserloggedin(false);
      }
    }
    func2();
  }, [dateval, enddateval]);

  return (
    <div className='dcontainer'>
      <Sidenavv3 />
      <div className='dashmain'>
        <Topbarv3 />
        <div className='dashmaincontent'>
          <h1 className='dashheader'>
            <span className='introjs__3'>Visualization</span>
          </h1>
          <Dashparameters />
          {loading || (
            <>
              {name === 'Building' ? (
                <div
                  className='summaryparams'
                  style={{ flexWrap: 'wrap', marginTop: '1rem' }}
                >
                  <div className='summaryparam'>
                    <p className='product_tab_title'>Total Building Space</p>
                    <p className='product_tab_value'>
                      {data['TotalBuildingSpace']} sq.m{' '}
                    </p>
                  </div>
                  <div className='summaryparam sp-param'>
                    <p className='product_tab_title'>Total Warehouse Space</p>
                    <p className='product_tab_value'>
                      {data['TotalWarehouseSpace']} sq.m{' '}
                    </p>
                  </div>
                </div>
              ) : name === 'product' ? (
                <>
                  <div
                    className='summaryparams'
                    style={{ flexWrap: 'wrap', marginTop: '1 rem' }}
                  >
                    <div className='summaryparam'>
                      <p className='product_tab_title'>Maternity bra</p>
                      <p className='product_tab_value'>
                        {data['Product']['Maternity Bra'].sales} units
                      </p>
                      <p className='product_tab_value'>
                        {data['Product']['Maternity Bra'].emissions} Co
                        <sub>2</sub>e
                      </p>
                    </div>
                    <div className='summaryparam'>
                      <p className='product_tab_title'>Regular bra</p>
                      <p className='product_tab_value'>
                        {data['Product']['Regular Bra'].sales} units
                      </p>
                      <p className='product_tab_value'>
                        {data['Product']['Regular Bra'].emissions} Co
                        <sub>2</sub>e
                      </p>
                    </div>
                    <div className='summaryparam sm-param'>
                      <p className='product_tab_title'>Panty</p>
                      <p className='product_tab_value'>
                        {' '}
                        {data['Product']['Panty'].sales} units
                      </p>
                      <p className='product_tab_value'>
                        {data['Product']['Panty'].emissions} Co
                        <sub>2</sub>e
                      </p>
                    </div>
                    <div className='summaryparam sp-param'>
                      <p className='product_tab_title'>Loungee Long tee kind</p>
                      <p className='product_tab_value'>
                        {data['Product']['Lounge Long Tee Kind'].sales} units
                      </p>
                      <p className='product_tab_value'>
                        {data['Product']['Lounge Long Tee Kind'].emissions} Co
                        <sub>2</sub>e
                      </p>
                    </div>
                    <div className='summaryparam'>
                      <p className='product_tab_title'>Loungee dress kind</p>
                      <p className='product_tab_value'>
                        {' '}
                        {data['Product']['Lounge Dress Kind'].sales} units
                      </p>
                      <p className='product_tab_value'>
                        {data['Product']['Lounge Dress Kind'].emissions} Co
                        <sub>2</sub>e
                      </p>
                    </div>

                    <div className='summaryparam sm-param'>
                      <p className='product_tab_title'>Nighty</p>
                      <p className='product_tab_value'>
                        {data['Product']['Nighty'].sales} units
                      </p>
                      <p className='product_tab_value'>
                        {data['Product']['Nighty'].emissions} Co<sub>2</sub>e
                      </p>
                    </div>
                    <div className='summaryparam'>
                      <p className='product_tab_title'>Lounge Bottom</p>
                      <p className='product_tab_value'>
                        {data['Product']['Lounge Bottom'].sales} units
                      </p>
                      <p className='product_tab_value'>
                        {data['Product']['Lounge Bottom'].emissions} Co
                        <sub>2</sub>e
                      </p>
                    </div>
                    <div className='summaryparam'>
                      <p className='product_tab_title'>
                        Carbon Saved On <br />
                        Maternity bra
                      </p>
                      <p className='product_tab_value'>
                        {' '}
                        {data['Product']['Maternity Bra'].sales} units
                      </p>
                      <p className='product_tab_value'>
                        {data['Product']['Maternity Bra'].saved} Co<sub>2</sub>e
                      </p>
                    </div>
                  </div>
                  <div
                    className='summaryparams'
                    style={{ flexWrap: 'wrap', marginTop: '1 rem' }}
                  >
                    <div className='summaryparam'>
                      <p className='product_tab_title'>
                        Carbon Saved On <br />
                        Regular bra
                      </p>
                      <p className='product_tab_value'>
                        {data['Product']['Regular Bra'].sales} units
                      </p>
                      <p className='product_tab_value'>
                        {data['Product']['Regular Bra'].saved} Co<sub>2</sub>e
                      </p>
                    </div>
                    <div className='summaryparam '>
                      <p className='product_tab_title'>
                        Carbon Saved On <br />
                        Panty
                      </p>
                      <p className='product_tab_value'>
                        {data['Product']['Panty'].sales} units
                      </p>
                      <p className='product_tab_value'>
                        {data['Product']['Panty'].saved} Co<sub>2</sub>e
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <span></span>
              )}
            </>
          )}
          {company == 1 ? (
            <>
              <div className='dashgraphs__cont'>
                {name === 'travel' && <Dashgraph />}
                {name === 'cargo' && <Dashgraphc />}
                {name === 'Building' && <Dashgraphb />}
                {name === 'electricity' && <Dashgrape />}
                {name === 'fuel' && <Dashgrapf />}
                {name === 'commute' && <Dashgraphco />}
                {name === 's3fuel' && <Dashgrapfs3 />}
                {name === 's3electricity' && <Dashgrapes3 />}
                {name === 'product' && <Dashgraphp />}

                {/* refrigeration */}

                {name === 'delivery' && <Dashgraphdel />}
              </div>
            </>
          ) : (
            <>
              <div className='dashgraphs__cont'>
                {name === 'travel' && <Dashgraph />}
                {name === 'cargo' && <Dashgraphc />}
                {name === 'Building' && <Dashgraphb />}
                {name === 'electricity' && <Dashgrape />}
                {name === 'fuel' && <Dashgrapf />}
                {name === 'commute' && <Dashgraphco />}
                {name === 's3fuel' && <Dashgrapfs3 />}
                {name === 's3electricity' && <Dashgrapes3 />}
                {name === 'carbon-neutral' && <Dashgraphcn />}

                {/* refrigeration */}

                {name === 'delivery' && <Dashgraphdel />}
              </div>
            </>
          )}
          {/* <div className="dashgraphblock">
            <Dashgrapharea />
            <Dashwebplatforms />
          </div> */}
        </div>
        <Lowsootfooter />
      </div>
    </div>
  );
}
