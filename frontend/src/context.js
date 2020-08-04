import React from 'react';
// export const PreferencesContext = React.createContext({
//     rtl: 'left',
//     theme: 'light',
//     toggleTheme: () => { },
//     toggleRTL: () => { },
//     // addAnItem: (idk) => {
//     //     console.log('idk',idk)
//     // }
// });



// import React from 'react';

// import { withRouter } from 'react-router-dom';

// import actions from './services';

// export const AuthContext = React.createContext();

// class AuthProvider extends React.Component {
//   state = { };
//   async componentDidMount() {
//     let user = await actions.isLoggedIn()
//     this.setState({...user.data})
//     console.log('coolest hooks ')

//   }
// //   componentDidMount() {
// //     actions.isLoggedIn()
// //       .then(responseFromServer => {
// //         console.log('res: ', responseFromServer);
// //         this.set
// //       })
// //       .catch(err =>
// //         console.log('Error while getting the user: ', err.response.data)
// //       );
// //   }

//   signUp =() => {}
//   logIn =() => {}
//   logOut=() => {}

//   render() {
//     const { state, signUp, logIn, logOut } = this;
//     return (
//       <>
//         <AuthContext.Provider
//           value={{
//             state,
//             signUp,
//             logIn,
//             logOut
//           }}
//         >
//           {this.props.children}
//         </AuthContext.Provider>
//       </>
//     );
//   }
// }

// export default withRouter(AuthProvider);