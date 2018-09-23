import React from "react";
import "./Login.css";


    class Input extends React.Component {
        constructor(props) {
          super(props)
          this.state = {
            inputVal: ""
          }
          this.changeHandler = this.changeHandler.bind(this)
        }
          
        changeHandler(e) {
          this.props.parentFunction(e.target.value)
        }
        
        render() {
          return (
            <div>
              <label>{this.props.labelName}</label>
              <input type={this.props.inputType} id={this.props.id} onChange={this.changeHandler} />
            </div>
          )
        }
      }

      class Login extends React.Component {
        constructor(props) {
          super(props)
          this.state = {
            username: "",
            password: ""
          }
          this.clickHandler = this.clickHandler.bind(this)
          this.setUsername = this.setUsername.bind(this)
          this.setPassword = this.setPassword.bind(this)
        }
        
        setUsername(username) {
          this.setState({username: username})
        }
        
        setPassword(password) {
          this.setState({password: password})
        }
        
        clickHandler() {
          // our code here
          alert(`Username: ${this.state.username} Password: ${this.state.password}`)
        }
        
        render() {
          return (
            <div>
              <label>Username:</label>
              <Input id ="username" inputType="text" parentFunction={this.setUsername}  />
              <label>Password:</label>
              <Input id ="password"  inputType="password" parentFunction={this.setPassword} /> 
              <button onClick={this.clickHandler}>{this.props.buttonName}LogIn</button>
            </div>
          )
        }
      }

    
      
    
        

  
export default Login;
