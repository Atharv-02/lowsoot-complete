import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
// import "intro.js/introjs.css";
import 'react-toastify/dist/ReactToastify.css';
import { Protected } from './routes/Protected';
import { Protpage } from './pages/Protpage';
import { Dashboard } from './pages/Dashboard';
import { Databoard } from './pages/Databoard';
import { Report } from './pages/Report';
import { Hompage } from './pages/Hompage';
import { Signin } from './pages/Signin';
import { Signup } from './pages/Signup';
// import { useVisuals } from "./contexts/Visualcontext";
// import { Steps } from "intro.js-react";
function App() {
  // const { enabled, setEnabled } = useVisuals();
  // const navigate = useNavigate();
  // const onExit = () => {
  //   setEnabled(false);
  // };
  // const onComplete = () => {
  //   navigate("/visualization/travel");
  // };
  // const steps = [
  //   {
  //     element: "#introjs__1",
  //     intro: "This is a summary page.",
  //     // position: "right"
  //   },
  //   {
  //     element: ".introjs__2",
  //     intro: "This is sidebar for navigation.",
  //     // position: "right"
  //   },
  // ];
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <Protected>
              <Hompage />
            </Protected>
          }
        />
        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route path='/login' element={<Signin />} />
        <Route
          path='/report'
          element={
            <Protected>
              <Report />
            </Protected>
          }
        />
        <Route
          path='/report/:name'
          element={
            <Protected>
              <Report />
            </Protected>
          }
        />
        <Route
          path='/visualize'
          element={
            <Protected>
              <Dashboard />
            </Protected>
          }
        />
        <Route
          path='/visualization/:name'
          element={
            <Protected>
              <Dashboard />
            </Protected>
          }
        />
        <Route
          path='/databoard'
          element={
            <Protected>
              <Databoard />
            </Protected>
          }
        />
        <Route
          path='/datainboard/:name'
          element={
            <Protected>
              <Databoard />
            </Protected>
          }
        />
        <Route
          path='/prot'
          element={
            <Protected>
              <Protpage />
            </Protected>
          }
        />
      </Routes>
      {/* <Steps
        onComplete={onComplete}
        enabled={enabled}
        steps={steps}
        // skipLabel={"skip"}
        initialStep={0}
        // skipLabel={true}
        options={{ nextToDone: true }}
        onExit={onExit}
      /> */}
      <ToastContainer />
    </>
  );
}

export default App;
