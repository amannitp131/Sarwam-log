
import '../styles/Dashboard.css';
import { FaTruckFront } from "react-icons/fa6";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { FaClockRotateLeft } from "react-icons/fa6";
import BarChart from '../components/BarChart';
import Dashgraph from '../components/Dashgraph';


const Dashboard = () => {
  const para = ["On route vehicles", "Vehicles with errors", "Deviated from route", "Late vehicles"];
  const num  = [31, 2, 13, 4];
  const svgs = ["src/public/dash1.svg", "src/public/dash2.svg", "src/public/dash3.svg", "src/public/dash4.svg"];

  const headings = ["On the way", "Unloading", "Loading", "Waiting"];
  const percentages = [39.7, 28.3, 17.4, 14.6];
  const times = ["2hr 10min", "3hr 15min", "1hr 24min", "5hr 19min"];
  const icons = [<FaTruckFront />, <MdOutlineKeyboardDoubleArrowDown/>, <MdKeyboardDoubleArrowUp />, <FaClockRotateLeft />];
  
  // const [showStats, setShowStats] = useState(false);

  // const toggleStats = () => {
  //   setShowStats(!showStats);
  // };

  return (
    <div>
      <h2>Fleet Dashboard</h2>
      <div className="container">
        {svgs.map((svg, index) => (
          <div className="box" key={index}>
            <div className="logo">
              <img src={svg} height={50} width={50} alt="Dashboard Icon" />
              <h1 id='dashhead'>{num[index]}</h1>
            </div>
            <div className="content">
              <p>{para[index]}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="container">
      <h2>Vehicles Overview</h2>
      <table className="overview-table">
        <thead>
          <tr>
            <th>Vehicle Status</th>
            <th>Percentage</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {headings.map((heading, index) => (
            <tr key={index}>
              <td>{icons[index]}&nbsp;&nbsp;    {heading}</td>
              <td>{percentages[index]}%</td>
              <td>{times[index]}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <button onClick={toggleStats} className="stats-button">
        {showStats ? "Hide Statistics" : "Show Statistics"}
      </button>

      {showStats && (
        <div className="graph-container">
          {percentages.map((percentage, index) => (
            <div key={index} className="graph-bar">
              <div className="bar" style={{ height: `${percentage}%` }}>
                <span>{percentage}%</span>
              </div>
              <p>{headings[index]}</p>
            </div>
          ))}
        </div>
      )} */}
    </div>
    <Dashgraph/>
   <BarChart/>
    </div>
  );
};

export default Dashboard;
