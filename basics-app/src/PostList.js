import axios from "axios";
import React from "react";

import  { Component } from 'react'

class PostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts : []
      }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
            this.setState({posts : response.data})
    })
        .catch()
    }
  render() {
    const {posts} = this.state
    return (
      <div>
        List of Posts 
        {
            posts.length ? posts.map(post => <div key ={post.id} >{post.title}</div>) : null
        }
      </div>
    )
  }
}

export default PostList