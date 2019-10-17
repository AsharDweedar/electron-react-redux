import React, { Component } from 'react'
import { Row, Col, Card } from 'react-materialize'

export default class DashBoard extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount() {
    
  }

  render () {
    return (
      <div>
        colleges:
        <Colleges colleges={this.props.file.fetched.Colleges.paths} />
      </div>
    )
  }
}

function Colleges ({ colleges }) {
  return (
    <Row>
      {colleges.map(function (college) {
        return (
          <Col m={2} s={3} key={college._id}>
            <Card
              className='blue-grey white-text'
              textClassName='white-text'
              title={college.name}
              // actions={[<a />]}
            >
              College desc
            </Card>
          </Col>
        )
      })}
    </Row>
  )
}
