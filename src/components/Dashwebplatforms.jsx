import mmt from "../assets/makemytrip-1 8.svg";
import uber from "../assets/2560px-Uber_logo_2018 2.svg";
import ibibo from "../assets/Goibibo_logo 1.svg";
import olacabs from "../assets/Ola_Cabs_logo 1.svg";
export function Dashwebplatforms() {
  return (
    <div className="dashplatforms">
      <h3 className="dashplatform__header">web platforms</h3>
      <div className="dashplatform__cont">
        <div className="dashplatform__item">
          <img className="dashplatform__itemimg" src={mmt} alt="mmt" />
          <button className="dashplatform__status--conected">connnected</button>
        </div>
        <div className="dashplatform__item">
          <img className="dashplatform__itemimg uber" src={uber} alt="uber" />
          <button className="dashplatform__status--conected">connnected</button>
        </div>
        <div className="dashplatform__item">
          <img
            className="dashplatform__itemimg goibibo"
            src={ibibo}
            alt="ibibo"
          />
          <button className="dashplatform__status--conected">connnected</button>
        </div>
        <div className="dashplatform__item">
          <img
            className="dashplatform__itemimg ola"
            src={olacabs}
            alt="olacabs"
          />
          <button className="dashplatform__status--conect">connnect</button>
        </div>
      </div>
    </div>
  );
}
