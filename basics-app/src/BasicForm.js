import React, { Component } from 'react'

class BasicForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Username : '',
         Password : '',
         comments : ''
      }
    }

    ChangeUsername = (event) => {
      this.setState({
          Username : event.target.value
      })
    }
    ChangePassword = (event) => {
        this.setState({
            Password : event.target.value
        })
    }
    ChangeComments = (event) => {
        this.setState({
            Comments : event.target.value
        })
    }

  render() {
    return (
         <form>
              <div>
                <label>Username : </label>
               <input type="text" value={this.state.Username} onChange={this.ChangeUsername}/>
               </div>
               <div>
               <label>Password : </label>
               <input type= "password" value = {this.state.Password} onChange={this.ChangePassword}/>
              </div>
              <div>
                <label>comments</label>
                <textarea  value = {this.state.comments} onChange ={this.ChangeComments}/>
              </div>
         </form>
    )
  }
}

export default BasicForm