import { Outlet } from "react-router-dom";

import Navibar from "@admin/Navibar";
import Pie from "@admin/Pie";
import '@styles/Admin.css';

function App() {

  return (
    <div className="adminLayout">
      <Navibar />
      <main>
        <Outlet />
      </main>
      <Pie />
    </div>
  )
}

export default App
