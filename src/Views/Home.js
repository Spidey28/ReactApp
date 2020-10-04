import axios from "axios";
// import { render } from "@testing-library/react";
import React from "react";
import Dashboard from "./Dashboard";
// import Login from "./Login";
// import HelloWorld from "../Components/HelloWorld";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      userName: '',
      password: ''
    }
    this.setUserName = this.setUserName.bind(this);
    this.setPassword = this.setPassword.bind(this);
  }

  setUserName(e) {
    this.setState({userName: e.target.value})
  }

  setPassword(e) {
    this.setState({password: e.target.value})
  }

  userAuthentication = () => {
    const credentials = {
      'username': this.state.userName,
      'password': this.state.password
    }
    axios.get("http://localhost:3000/authentication", credentials)
          .then(response => {
            this.setState({isLoggedIn: true})
          })
  }

  render() {
    let content = <h1>There was some issue.</h1>
    const isLoggedIn = this.state.isLoggedIn

    if (isLoggedIn) {
      content = <Dashboard />;            
    }

    else {
      // content = (
      //   <button onClick={() => this.setState({ isLoggedIn: true })}>
      //     Sign up now
      //   </button>
      // );

      const userName = this.state.userName;
      const password = this.state.password;

      content = (
        <div className="w-full max-w-xs">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                value={userName}
                onChange={this.setUserName}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                value={password}
                onChange={this.setPassword}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={this.userAuthentication}
                >
                Sign In
              </button>
            </div>
          </form>
        </div>
      );
    }

    return (
        content
    )
  }
    
}

export default Home