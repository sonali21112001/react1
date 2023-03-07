import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom'
<Router>
        <li><Link to="/greet">Properties</Link></li>
        <li><Link to="/welcome">Welcome</Link></li>
        <li><Link to="/function">Hooks</Link></li>
        <li><Link to="/messa">Message</Link></li>

        <Routes>
          <Route path="/greet" element={<AProps name="Company" tagname="ZasmLabs"/>}></Route>
          <Route path="/welcome" element={<Welcome/>}></Route>
          <Route path="/function" element={<Hooks/>}></Route>
          <Route path="/messa" element={<Message/>}></Route>
        </Routes>
      </Router>