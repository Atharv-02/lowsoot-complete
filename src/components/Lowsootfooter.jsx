export function Lowsootfooter() {
  return (
    <>
    <br/>
      <div className="footer__container">
        <div className="made__in__india">
          <p>Made in</p>
          <img
            className="india__flag"
            src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_India.png"
            alt="india"
          />
        </div>
        <p className="registered__by__lowsoot">
          <span style={{ fontfamily: "san-serif", fontSize: "2rem" }}>
            &copy;
          </span>
          <span>Lowsoot Climate Solutions PVT LTD</span>
        </p>
      </div>
    </>
  );
}
