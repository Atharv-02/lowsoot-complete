import lowsootlogo from "../../assets/lowsoottopbarlogo.svg";
import usericon from "../../assets/user 1.svg";
import notificon from "../../assets/notifications 1.svg";
import power from "../../assets/shutdown.svg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/Authcontext";
import { useState } from "react";
import { Logoutmodal } from "../Logoutmodal";
export function Topbarv2() {
  const { setIsuserloggedin, setToken } = useAuth();
  const [extmodal, setExtmodal] = useState(false);
  const navigate = useNavigate();
  function handlelogout() {
    localStorage.removeItem("login");
    setIsuserloggedin(false);
    setToken(null);
    navigate("/login");
  }
  return (
    <div className="topbarv2">
      <div className="topbarv2__imgcont">
        <img
          className="topbarv2__imgmain"
          src={lowsootlogo}
          alt="lowsootlogo"
        />
      </div>
      <div className="topbarv2__logos">
        <button onClick={() => setExtmodal(true)} className="topbarv2__logo">
          <img className="topbarv2__logoimg" src={power} alt="power" />
        </button>
        <button className="topbarv2__logo">
          <img className="topbarv2__logoimg" src={usericon} alt="usericon" />
        </button>
        <button className="topbarv2__logo">
          <img className="topbarv2__logoimg" src={notificon} alt="notificon" />
        </button>
      </div>
      {extmodal && (
        <Logoutmodal setExtmodal={setExtmodal} handlelogout={handlelogout} />
      )}
    </div>
  );
}
