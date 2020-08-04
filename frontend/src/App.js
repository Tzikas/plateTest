import React, {Component, Fragment, useEffect, useState} from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Home from './components/home/Home';
import NotFound from './components/404/NotFound.js';
import SignUp from './components/auth/SignUp';
import LogIn from './components/auth/LogIn';
import Profile from './components/profile/Profile'
import Actions from './services/index'
import { actionsContext }  from './services'



const App = (props) => {

  console.log(React.useContext(actionsContext)())
  const {signUp, logOut, logIn, isLoggedIn, user, setUser } = React.useContext(actionsContext)();
  // const [user, setUser] = useState({})
  useEffect(() => {
      isLoggedIn().then(user => {
        setUser({...user.data})
      })
      // isLoggedIn().then(user => {
      //   setUser({...user.data})
      // })
  }, [])

  
 
console.log(user,signUp,props)
  return <Fragment>
  {user.email}
  <nav>
    <NavLink to="/">Home |</NavLink>

    {user.email ? 
      <Fragment>
       <NavLink onClick={() => logOut().then(setUser({}))} to='/'>Log Out |</NavLink> 
       <NavLink to="/profile">Profile|</NavLink>
       </Fragment>
       :
       <Fragment>
       <NavLink to="/sign-up">Sign Up |</NavLink>
       <NavLink to="/log-in">Log In |</NavLink>
       </Fragment>
      }
    
  </nav>
  <Switch>
    <Route exact path="/" render={(props) => <Home {...props} />} />
    <Route exact path="/sign-up" render={(props)=><SignUp {...props} setUser={setUser} />} />
    <Route exact path="/log-in" render={(props) => <LogIn {...props} setUser={setUser}/>} />
    <Route exact path="/profile" render={(props) => <Profile {...props} user={user}/>} />
    
    <Route component={NotFound} />
  </Switch>
  </Fragment>
}


// class App extends Component {
  
//   state = { }
  
//   // async componentDidMount() {
//   //   let user = await actions.isLoggedIn()
//   //   this.setState({...user.data})
//   //   console.log('coolest hooks ')

//   // }


//   setUser = (user) => this.setState(user)
  
//   logOut = async () => {
//     let res = await actions.logOut()
//     this.setUser({email:null, createdAt: null, updatedAt: null, _id: null }) //FIX 
//   }

//   render(){
//     console.log(this)

//     return (
      
    // <Fragment>
    //   {this.state.email}
    //   <nav>
    //     <NavLink to="/">Home |</NavLink>
  
    //     {this.state.email ? 
    //       <Fragment>
    //        <NavLink onClick={this.logOut} to='/'>Log Out |</NavLink> 
    //        <NavLink to="/profile">Profile|</NavLink>
    //        </Fragment>
    //        :
    //        <Fragment>
    //        <NavLink to="/sign-up">Sign Up |</NavLink>
    //        <NavLink to="/log-in">Log In |</NavLink>
    //        </Fragment>
    //       }
        
    //   </nav>
    //   <Switch>
    //     <Route exact path="/" render={(props) => <Home {...props} />} />
    //     <Route exact path="/sign-up" render={(props)=><SignUp {...props} setUser={this.setUser} />} />
    //     <Route exact path="/log-in" render={(props) => <LogIn {...props} setUser={this.setUser}/>} />
    //     <Route exact path="/profile" render={(props) => <Profile {...props} user={this.state}/>} />
        
    //     <Route component={NotFound} />
    //   </Switch>
    //   </Fragment>
//   );
//   }
// }
export default App;
