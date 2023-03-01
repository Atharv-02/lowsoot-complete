// import lowsootlogo from "../../assets/lowsoottopbarlogo.svg";
// import usericon from "../../assets/user 1.svg";
// import notificon from "../../assets/notifications 1.svg";
import topbarbell from '../../assets/topbar/topbar_bell.svg';
import lowesg from '../../assets/headers/esg_logo.png';
import topbaraccount from '../../assets/topbar/topbar_account.svg';
import topbarlogout from '../../assets/topbar/topbar_logout.svg';
// import power from "../../assets/shutdown.svg";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/Authcontext';
import { useState } from 'react';
import { Logoutmodal } from '../Logoutmodal';
export function Topbarv3() {
  const { setIsuserloggedin, setToken } = useAuth();
  const [extmodal, setExtmodal] = useState(false);
  const navigate = useNavigate();
  function handlelogout() {
    localStorage.removeItem('login');
    setIsuserloggedin(false);
    setToken(null);
    navigate('/login');
  }
  return (
    <div className='topbarv3'>
      <div className='topbarv3__companycont'>
        <div className='topbarv3__imglogocont'>
          <img className='topbarv3__imglogo' src={lowesg} alt='Lowsoot' />
        </div>
        <p className='topbarv3__companytext'>Lowsoot Climate Analytics</p>
      </div>
      <div className='topbarv3__logos'>
        <button onClick={() => setExtmodal(true)} className='topbarv3__logo'>
          <img className='topbarv3__logoimg' src={topbarlogout} alt='power' />
        </button>
      </div>
      {extmodal && (
        <Logoutmodal setExtmodal={setExtmodal} handlelogout={handlelogout} />
      )}
    </div>
  );
}
