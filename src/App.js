import {useState} from 'react'
import MapView from './Components/MapView';
import TracckerForm from './Components/TracckerForm';
import TrackerInfoDisplay from './Components/TackerInfoDisplay';

//App Styles
import './CSS/style.css'


const App =() =>{

  const [ip, seTIp] = useState('142.250.141.26');
  const [location, setLocation] = useState('California, US, 94035');
  const [timezone, setTimezone] = useState('UTC -07:00');
  const [isp, setIsp] = useState('Google LLc');
  const [coords, setCoords] = useState([51.505, -0.09])
  const [showMap, setShowMap] = useState(true)

  const getTrackingInfo = (data) =>{
    setShowMap(false)
    const {ip, location, isp} = data;
    seTIp(ip);
    setLocation(`${location.region}, ${location.country}, ${location.postalCode}`);
    setTimezone(`UTC ${location.timezone}`);
    setIsp(isp);
    setCoords([location.lat, location.lng])
    setShowMap(true)
  }

  return (
    <div className="App">
      <header></header>
      {showMap && <MapView coords={coords}/>}
      <main>
        <h1>IP Address Tracker</h1>
        <TracckerForm getTrackingInfo={getTrackingInfo} />
        <TrackerInfoDisplay ip={ip} location={location} timezone={timezone} isp={isp} />
      </main>
    </div>
  );
}

export default App;
