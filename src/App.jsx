import { useState } from 'react'
import './App.css'
import Loader from "./assets/loader.gif"
import Logo from "./assets/logov2.png"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App" style={{backgroundImage:"./assets/bg.png"}}>
      <div className='content'>
      <img src={Logo} alt="logo" />
        <p>We are pleased to announce a new addition to the Nagarjuna College of IT– Nagarjuna ICT Club. This new club will provide personal and professional IT opportunities to learn and grow.<br/><br/>
We are looking for students to get involved and join our team. There are volunteer opportunities, including executive members, and many others that may suit your interests and skills. We need your support to build, grow, and sustain our club. We also welcome suggestions regarding events and venues, special interests and programming, contacts at other ICT Clubs, and other ideas to help shape the new club.
<br/><br/>Please stay tuned for future announcements about events and ways to engage with the club. We look forward to meeting as many of you as possible in the near future and hope that you will get involved with the Nagarjuna ICT Club.</p>
      </div>
    </div>
  )
}

export default App
