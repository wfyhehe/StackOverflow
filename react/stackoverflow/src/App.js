import './App.css';
import HomeLayout from './layout/HomeLayout.js';
import {BrowserRouter} from "react-router-dom";
import 'antd/dist/antd.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <HomeLayout />
      </BrowserRouter>
    </div>
  );
}

export default App;
