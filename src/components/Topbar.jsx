import esg from '../assets/ESG (2) 1.svg';
import usericon from '../assets/user 1.svg';
import notificon from '../assets/notifications 1.svg';
export function Topbar() {
  return (
    <div className='topbar'>
      <div className='topbar__imgcont'>
        <img className='topbar__img' src={esg} alt='esg' />
      </div>
      <div className='topbar__logos'>
        <div className='topbar__logo'>
          <img className='topbar__logoimg' src={notificon} alt='' />
        </div>
      </div>
    </div>
  );
}
