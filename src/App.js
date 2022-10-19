import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";

import Publicroutes from "./Routes/Routes";
import Nav from "./components/Nav";
import HomePage from "./HomePage/HomePage";
function App() {
  return (
    <div className="App">
      <Nav/>
     
       <Routes>
       <Route path="/" element={<Navigate to={'/home'}/> }/>
       {/* <Route path="/home" element={<Navigate to={<HomePage/>}/>}/> */}
          {Publicroutes.map((route, index) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page/>} />;
          })}
       </Routes>
        
     
    </div>
  );
}

export default App;
