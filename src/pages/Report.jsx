import { useRef } from 'react';
import JsPDF from 'jspdf';
import { Lowsootfooter } from '../components/Lowsootfooter';
import { Reportend } from '../components/Reportend';
import Reportmainhead from '../components/Reportmainhead';
import { Bsrtable1 } from '../components/reportables/Bsrtable1';
import { Bsrtable2 } from '../components/reportables/Bsrtable2';
import { Bsrtable3 } from '../components/reportables/Bsrtable3';
import { Bsrtable4 } from '../components/reportables/Bsrtable4';
import { Bsrtable5 } from '../components/reportables/Bsrtable5';
import { Bsrtable6 } from '../components/reportables/Bsrtable6';
import { Sidenavv3 } from '../components/sidenav/Sidenavv3';
import { Topbarv3 } from '../components/topbar/Topbarv3';

export function Report() {
  const reportdata = {};
  const componentRef = useRef();
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

  return (
    <div className='dcontainer'>
      <Sidenavv3 />
      <div className='reportmain'>
        <Topbarv3 />
        <div className='reportmaincontent'>
          <div className='downloading'>
            <h1 className='reportmainheader'>
              <span className='introjs__4'>Report</span>
            </h1>
            <div style={{ transform: 'translateY(-5.5rem)' }}>
              <Reportend
                generatePDF={generatePDF}
                componentRef={componentRef}
              />
            </div>
          </div>
          <div className='reportmaincont'>
            <div ref={componentRef} id='report__datacontainer'>
              <Reportmainhead />
              <div className='bsrreports'>
                <Bsrtable1 reportdata={reportdata} />
                <Bsrtable2 reportdata={reportdata} />
                <Bsrtable3 reportdata={reportdata} />
                <Bsrtable4 reportdata={reportdata} />
                <Bsrtable5 reportdata={reportdata} />
                <Bsrtable6 reportdata={reportdata} />
              </div>
              <div className='reportmaincont__tables'></div>
            </div>
          </div>
        </div>
        {/* enabledc && */}
        <Lowsootfooter />
      </div>
    </div>
  );
}
