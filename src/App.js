


import './App.css';








import Album from  './component/album/album'
import Home from './component/home/Home'
import Login from './component/login/login1'
import Admin from  './component/admin/adminmain'
import SimpleReactLightbox from 'simple-react-lightbox'
import AlbumUpload from './component/upload/albumupload'
import Gallery from './component/testingpage/gallery'
import MyGallery from './component/usergallery/usergallery'
import Portfolio from './component/portfolio/portfolio'
import Booking from './component/booking/booking'
import Albumlist from './component/layout/photolist'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>

        <Switch>
          <Route path="/admin">
           <Admin/>
          </Route>

          <Route path="/albumlist">
           <Albumlist/>
          </Route>

          <Route path="/portfolio">
           <Portfolio/>
          </Route>
          
          <Route path="/booking">
           <Booking/>
          </Route>
          
          <Route path="/testing">
           <Gallery/>
          </Route>

          <Route path="/mygallery">
           <MyGallery/>
          </Route>

          <Route path="/login">
           <Login/>
          </Route>
          

          <Route path='/album/:id' component={Album}/>
          <Route path='/upload/:id' component={AlbumUpload}/>
          <Route path="/">
           <Home/>
          </Route>
        </Switch>
  
    </Router>
    </div>
  );
}

export default App;
