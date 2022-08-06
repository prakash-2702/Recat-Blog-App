
import Navbar from './Navbar';
import Home from './Home';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'; 
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  
  /*
  Part1
  const title="Welcome to a New Blog";
  const number=50;
  const link="https://www.youtube.com/";
  */


  /*
  Part2
  const handleClick=(e)=>{
    console.log("Hello",e);
  }

  const handleClickAgain=(name,e)=>{
    console.log("Hello"+name,e.target);
  }
  

  return ( 
    <div className="App">
      <Navbar/>
      <div className="content">
      <Home/>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={(e)=>{
        handleClickAgain("Prakash",e)
      }}>Click Me</button>
      </div>
    </div>
  );
  */



  return ( 
    <Router>
       <div className="App">
            <Navbar/>
          <div className="content">
            <Switch>
              <Route exact path="/">
                  <Home/>
              </Route>
              <Route path="/create">
                  <Create/>
              </Route>
              <Route path="/blogs/:id">
                  <BlogDetails/>
              </Route>
              <Route path="*">
                <NotFound/>
              </Route>
              
            </Switch>
          </div>
        </div>
    </Router>
   
  );


}

export default App;
