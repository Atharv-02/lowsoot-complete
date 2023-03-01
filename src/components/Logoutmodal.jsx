export function Logoutmodal(params) {
  const { setExtmodal, handlelogout } = params;
  return (
    <div className="dialog__overlay">
      <div className="dialog">
        <h1 className="dialog__header">
          <pre className="loginmodal__header">Are you sure</pre>
          <pre className="loginmodal__header">you want to logout ?</pre>
        </h1>
        <div className="loginmodalcont">
          <div className="loginmodalcont__buttons">
            <button
              onClick={() => setExtmodal(false)}
              className="loginmodalcont__cancelbtn"
            >
              Cancel
            </button>
            <button
              onClick={() => handlelogout()}
              className="loginmodalcont__logoutbtn"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
