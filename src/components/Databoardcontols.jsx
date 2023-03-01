import { useNavigate } from "react-router-dom";
import { useNavc } from "../contexts/Navcontext";
import visual_img from "../assets/visualisation.svg"
// import filterlogo from "../assets/databoard/filter-filled-tool-symbol 1.png";
export function Databoardcontols() {
  const { navdispatch } = useNavc();
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => {
          navigate("/visualization/travel");
          navdispatch({
            type: "SET_NAVSTATE",
            payload: { navnum: 1 },
          });
          navdispatch({
            type: "SELECT_NAVDD",
            payload: { navid: 3, id: 1 },
          });
        }}
        className="databoardtabletop__movetoviz"
      >
        <img src={visual_img} alt="" />
        Move to visualization
      </button>
      {/* <label className="databoardtabletop__controlname invisible">
        Search by
      </label>
      <select className="databoardtabletop__select hide" name="pets">
        <option value="">Name</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="hamster">Hamster</option>
        <option value="parrot">Parrot</option>
        <option value="spider">Spider</option>
        <option value="goldfish">Goldfish</option>
      </select>
      <button className="databoardtabletop__btn hide">
        <img
          className="databoardtabletop__btnlogo"
          src={filterlogo}
          alt="filterlogo"
        />
      </button> */}
    </>
  );
}
