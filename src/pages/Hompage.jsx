import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRef } from 'react';
import { Dashparameters } from '../components/Dashparameters';
import { Lowsootfooter } from '../components/Lowsootfooter';
import { useVisuals } from '../contexts/Visualcontext';
import { Sidenavv3 } from '../components/sidenav/Sidenavv3';
import { Topbarv3 } from '../components/topbar/Topbarv3';
import { Bargraphblock } from '../components/summary/Bargraphblock';
import { Linegraphblock } from '../components/summary/Linegraphblock';
import { chartarray } from '../sampledata/data';
import { Areagraphblock } from '../components/summary/Areagraphblock';
import { Scattergraphblock } from '../components/summary/Scattergraphblock';
import { color1, color2, color3 } from '../color';
import { Piegraphsumblock } from '../components/Piegraphsum';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { createTheme, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import JsPDF from 'jspdf';
import { Summaryend } from '../components/Summaryend';

import kms from '../assets/sidenav/sidenavv3/truck.svg';
import electrcity from '../assets/sidenav/sidenavv3/electricity.svg';
import buisness from '../assets/sidenav/sidenavv3/buisness_commute.svg';
import employee from '../assets/sidenav/sidenavv3/employee_commute.svg';
import carbon from '../assets/sidenav/sidenavv3/carbon-intensity.svg';
import scrap from '../assets/sidenav/sidenavv3/scrap.svg';
import { useAuth } from '../contexts/Authcontext';

export function Hompage() {
  const {
    token,
    setToken,
    isuserloggedin,
    setIsuserloggedin,
    company,
    setCompany,
  } = useAuth();
  const [data, setData] = useState();
  const [startDate, setStateDate] = useState();
  const { dateval, setDateval, enddateval, setEnddateval } = useVisuals();
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(true);
  const componentRef = useRef();
  const theme = createTheme({
    typography: {
      htmlFontSize: 10,
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          html: {
            fontSize: '62.5%',
          },
        },
      },
    },
  });

  const generatePDF = () => {
    const widthval = document.querySelector(
      '#report__datacontainer'
    ).clientWidth;
    const heightval = Math.pow(2, 0.5) * widthval + 20;
    const report = new JsPDF({
      orientation: 'portarit',
      unit: 'px',
      format: [widthval + 20, heightval],
    });
    report.html(document.querySelector('#report__datacontainer')).then(() => {
      report.save('report.pdf');
    });
  };
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
    <>
      {loading ? (
        <>
          <div className='main-load'>
            <h1>Loading</h1>
          </div>
        </>
      ) : (
        <>
          <div className='dcontainer'>
            <Sidenavv3 />
            <div className='homemainv2'>
              <Topbarv3 />
              <div className='homemaincontentv2'>
                <Summaryend
                  generatePDF={generatePDF}
                  componentRef={componentRef}
                />
                <div
                  ref={componentRef}
                  id='report__datacontainer'
                  style={{ padding: '1.5rem', marginTop: '-4rem' }}
                >
                  <div className='head-content'>
                    <h1 id='introjs__1' className='homemainheaderv2'>
                      <span className='introjs__1'>Summary</span>
                    </h1>
                  </div>
                  <>
                    <div className='bg'>
                      <div
                        className='datefilters'
                        style={{ paddingLeft: '3rem' }}
                      >
                        <h3 className='datefilters__head'>Date Filters</h3>
                        <ThemeProvider theme={theme}>
                          <CssBaseline />
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DesktopDatePicker
                              minDate='2022-1-1'
                              maxDate='2022-31-12'
                              label='Start date'
                              inputFormat='MM/DD/YYYY'
                              value={dayjs(dateval)}
                              onChange={(newValue) => {
                                const monthkey = JSON.stringify(
                                  newValue['$M'] + 1
                                );
                                const monthkeystring =
                                  monthkey.length === 1
                                    ? `0${monthkey}`
                                    : monthkey;
                                setDateval(
                                  `${newValue['$y']}-${monthkeystring}-${newValue['$D']}`
                                );
                              }}
                              renderInput={(params) => (
                                <TextField {...params} />
                              )}
                            />
                            &nbsp;&nbsp;&nbsp;
                            <DesktopDatePicker
                              minDate='2022-1-1'
                              maxDate='2022-31-12'
                              label='End date'
                              inputFormat='MM/DD/YYYY'
                              value={dayjs(enddateval)}
                              onChange={(newValue) => {
                                const monthkey = JSON.stringify(
                                  newValue['$M'] + 1
                                );
                                const monthkeystring =
                                  monthkey.length === 1
                                    ? `0${monthkey}`
                                    : monthkey;
                                setEnddateval(
                                  `${newValue['$y']}-${monthkeystring}-${newValue['$D']}`
                                );
                              }}
                              renderInput={(params) => (
                                <TextField {...params} />
                              )}
                            />
                          </LocalizationProvider>
                        </ThemeProvider>
                        {new Date(dateval) < new Date(enddateval) ? null : (
                          <>
                            <p style={{ color: 'red' }}>
                              The End Date Cannot Be Lesser Than The Start Date
                            </p>
                          </>
                        )}
                      </div>
                      <Dashparameters />
                      <div className='summaryparams'>
                        <div className='summaryparam sum-1'>
                          <p className='summaryparam__title'>
                            Total Electricity consumed
                          </p>
                          {console.log(data.totalElectricityUsage)}
                          <p className='summaryparam__value'>
                            {data.totalElectricityUsage} KWh{' '}
                          </p>
                        </div>
                        <div className='summaryparam'>
                          <p className='summaryparam__title'>
                            Total Business
                            <br />
                            Commuting
                          </p>
                          <p className='summaryparam__value'>
                            {data.totalBusinessCommuteDistance} Kms{' '}
                          </p>
                        </div>
                        <div className='summaryparam'>
                          <p className='summaryparam__title'>
                            Total Employees
                            <br /> Commuting
                          </p>
                          <p className='summaryparam__value'>
                            {data.totalEmployeeCommuteDistance} Kms{' '}
                          </p>
                        </div>
                        {company == 2 ? (
                          <>
                            <div className='summaryparam '>
                              <p className='summaryparam__title'>
                                Carbon Intensity <br />
                                <br />
                              </p>
                              <p className='summaryparam__value'>
                                {data['TotalProductSales']
                                  ? data['total'] / data['TotalProductSales']
                                  : '0'}{' '}
                                CO
                                <sub>2</sub>e{' '}
                              </p>
                            </div>
                          </>
                        ) : null}
                        {company == 1 ? (
                          <>
                            <div className='summaryparam'>
                              <p className='summaryparam__title'>
                                Carbon Emission on
                                <br />
                                Maternity Bra
                                <br />
                              </p>
                              <p className='summaryparam__value'>
                                {data.Product['Maternity Bra'].emissions}CO
                                <sub>2</sub>e{' '}
                              </p>
                            </div>
                          </>
                        ) : null}
                        {/* <div className="summaryparam">
                <p className="summaryparam__title">
                  Total fuel <br /> scope
                </p>
                <p className="summaryparam__value">1521.7 Liters </p>
              </div> */}
                      </div>
                      {/* Part 2 below */}
                      {company == 1 ? (
                        <>
                          {console.log('printed')}
                          <div className='summaryparams'>
                            <div className='summaryparam sum-1'>
                              <p className='summaryparam__title'>
                                Carbon Emission on
                                <br />
                                Regular Bra
                                <br />
                              </p>
                              <p className='summaryparam__value'>
                                {data.Product['Regular Bra'].emissions} CO
                                <sub>2</sub>e{' '}
                              </p>
                            </div>
                            <div className='summaryparam'>
                              <p className='summaryparam__title'>
                                Carbon Emission on
                                <br />
                                Panty
                                <br />
                              </p>
                              <p className='summaryparam__value'>
                                {data.Product['Panty'].emissions} CO
                                <sub>2</sub>e{' '}
                              </p>
                            </div>

                            <div className='summaryparam '>
                              <p className='summaryparam__title smallest'>
                                Carbon Emission on
                                <br />
                                Loungee Long tee kind
                                <br />
                              </p>
                              <p className='summaryparam__value'>
                                {data.Product['Lounge Long Tee Kind'].emissions}{' '}
                                CO
                                <sub>2</sub>e{' '}
                              </p>
                            </div>
                            <div className='summaryparam '>
                              <p className='summaryparam__title '>
                                Carbon Emission on
                                <br />
                                Loungee Dress kind
                              </p>
                              <p className='summaryparam__value'>
                                {data.Product['Lounge Dress Kind'].emissions} CO
                                <sub>2</sub>e{' '}
                              </p>
                            </div>
                            {/* <div className="summaryparam">
                <p className="summaryparam__title">
                  Total fuel <br /> scope
                </p>
                <p className="summaryparam__value">1521.7 Liters </p>
              </div> */}
                          </div>
                          {/* Part 3 below */}
                          <div className='summaryparams'>
                            <div className='summaryparam sum-1'>
                              <p className='summaryparam__title '>
                                Carbon Emission on
                                <br />
                                Nighty
                              </p>
                              <p className='summaryparam__value'>
                                {data.Product['Nighty'].emissions} CO
                                <sub>2</sub>e{' '}
                              </p>
                            </div>
                            <div className='summaryparam'>
                              <p className='summaryparam__title '>
                                Carbon Emission on
                                <br />
                                Lounge Bottom
                              </p>
                              <p className='summaryparam__value'>
                                {data.Product['Lounge Bottom'].emissions} CO
                                <sub>2</sub>e{' '}
                              </p>
                            </div>
                            <div className='summaryparam'>
                              <p className='summaryparam__title '>
                                Carbon Saved on
                                <br />
                                Maternity Bra
                              </p>
                              <p className='summaryparam__value'>
                                {data.Product['Maternity Bra'].saved} CO
                                <sub>2</sub>e{' '}
                              </p>
                            </div>
                            <div className='summaryparam'>
                              <p className='summaryparam__title '>
                                Carbon Saved on
                                <br />
                                Regular Bra
                              </p>
                              <p className='summaryparam__value'>
                                {data.Product['Regular Bra'].saved} CO
                                <sub>2</sub>e{' '}
                              </p>
                            </div>

                            {/* <div className="summaryparam">
                <p className="summaryparam__title">
                  Total fuel <br /> scope
                </p>
                <p className="summaryparam__value">1521.7 Liters </p>
              </div> */}
                          </div>
                          <div className='summaryparams'>
                            <div className='summaryparam sum-1 '>
                              <p className='summaryparam__title'>
                                Carbon Saved On <br />
                                panty
                              </p>
                              <p className='summaryparam__value'>
                                {data.Product['Panty'].saved} CO
                                <sub>2</sub>e{' '}
                              </p>
                            </div>
                            <div className='summaryparam sum-1 '>
                              <p className='summaryparam__title'>
                                Carbon Intensity <br />
                                <br />
                              </p>
                              <p className='summaryparam__value'>
                                {data['TotalProductSales']
                                  ? data['total'] / data['TotalProductSales']
                                  : '0'}{' '}
                                CO
                                <sub>2</sub>e{' '}
                              </p>
                            </div>

                            {/* <div className="summaryparam">
                <p className="summaryparam__title">
                  Total fuel <br /> scope
                </p>
                <p className="summaryparam__value">1521.7 Liters </p>
              </div> */}
                          </div>
                        </>
                      ) : null}
                      <div className='summaryparams sum-last'></div>
                    </div>
                    <br />
                    <br />
                    <br />

                    <div className='homevizgraph__cont'>
                      <div className='summarygrid'>
                        {console.log(data['ProductGraph'])}
                        {company == 1 ? (
                          <Piegraphsumblock
                            data={data['ProductGraph']
                              .filter((item) => {
                                // console.log(item.name);
                                return item.saved != 0;
                              })
                              .map((item) => {
                                return {
                                  name: item.name,
                                  value: parseInt(item.saved),
                                  fill: item.color,
                                };
                              })}
                          />
                        ) : null}

                        <Linegraphblock
                          vizarray={data['BusinessCommuteEmissions'].Road}
                          graphname={'Business Commute'}
                          colorvalue={color1}
                        />

                        <Bargraphblock
                          vizarray={data['EmployeeCommuteEmissions'].Road}
                          graphname={'Employee Commute'}
                          colorvalue={color1}
                        />

                        <Areagraphblock
                          vizarray={data['Electricity'].Electricity}
                          graphname={'Electricty'}
                          colorvalue={color1}
                        />
                        {/* <Scattergraphblock
                        vizarray={chartarray}
                        graphname={'Air Cargo'}
                        colorvalue={color1}
                      /> */}
                        <Scattergraphblock
                          vizarray={data['Cargo'].Road}
                          graphname={'Road Cargo'}
                          colorvalue={color1}
                        />
                        {/* <Bargraphblock
                        vizarray={chartarray}
                        graphname={'Building Space Consumed'}
                        colorvalue={color2}
                      />
                      <Bargraphblock
                        vizarray={chartarray}
                        graphname={'Warehouse Space'}
                        colorvalue={color3}
                      /> */}
                        <Bargraphblock
                          vizarray={chartarray}
                          graphname={'Delivery'}
                          colorvalue={color3}
                        />
                        <Bargraphblock
                          vizarray={chartarray}
                          graphname={'Fuel Emission'}
                          colorvalue={color3}
                        />
                      </div>
                    </div>
                  </>
                </div>
                <Lowsootfooter />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
