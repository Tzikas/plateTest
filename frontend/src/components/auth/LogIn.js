import React, { Component, Fragment, useState } from 'react';
import { actionsContext } from '../../services'
import actions from '../../services/index'

//class LogIn extends Component {
const LogIn = (props) => {
    const {signUp, logOut, logIn, isLoggedIn, user, setUser } = React.useContext(actionsContext)();
    const [state, setState] = useState()
    
    const handleChange = e => setState({...state, [e.target.name]: e.target.value})

    const handleSubmit = e => {
        e.preventDefault()
        logIn(state).then(user => {
            console.log(user.data)
            setUser({...user.data})
            
        }).catch(({ response }) => console.error(response.data));
        //  actions.logIn(this.state).then(user => {
        //     this.props.setUser({...user.data})  
        // }).catch(({ response }) => console.error(response.data));
    }

    //render() {
        return (
            <Fragment>
                <h2>LogIn</h2>
                {props?.email}
                <form onSubmit={handleSubmit}>
                    <input name="email" type="email" onChange={handleChange} />
                    <input name="password" type="password" onChange={handleChange} />
                    <input type="submit" value="Log In"/>
                </form>
            </Fragment>
        );
   // }
}

export default LogIn;