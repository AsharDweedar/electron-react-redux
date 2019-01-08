import React, { Component } from 'react'
import { Footer } from 'react-materialize'

export default class Tail extends Component {
  componentDidMount() {
    console.log('this is Tail')
    console.log(this.props)
  }
  render() {
    const router = this.props.router;
    return (
      <div>
        <Footer copyrights="&copy 2015 Copyright Text"
          moreLinks={
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
          }
          links={
            <ul>
              <li><a className="grey-text text-lighten-3" onClick={() => router('/contact')}>phones book</a></li>
              <li><a className="grey-text text-lighten-3" onClick={() => router('/emails')}>emails</a></li>
              <li><a className="grey-text text-lighten-3" href="aabu.edu.jo">university site</a></li>
              <li><a className="grey-text text-lighten-3" href="facebook.com">our Facebook Page</a></li>
            </ul>
          }
          className='example'
        >
          <h5 className="white-text">Footer Content</h5>
          <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
        </Footer>
      </div>
    )
  }
}
