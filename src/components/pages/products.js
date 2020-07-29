import React, { Component } from 'react'
import CardGroup from 'react-bootstrap/Card'
import Card from 'react-bootstrap/Card'
export default class products extends Component {
    render() {
        return (
            <div>
<CardGroup className="card">
<Card>
    <Card.Img className="card-img"variant="top" src="https://i.imgur.com/6KFm06j.jpg" />
    <Card.Body>
      <Card.Text>
        Conversion kits for all types of vehicles
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img className="card-img"variant="top" src="https://i.imgur.com/Wl7o1mp.jpg" />
    <Card.Body>
      <Card.Text>
        Bedliners for all types of trucks
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img className="card-img" variant="top" src="https://i.imgur.com/IWZp2qz.jpg" />
    <Card.Body>
        <Card.Text>
        New and original Toyota parts
        </Card.Text>
        
    </Card.Body>
  </Card>
</CardGroup>
<CardGroup className="card">
  <Card>
    <Card.Img className="card-img"variant="top" img src="https://i.imgur.com/ow8rcNh.jpg" alt="repairs" />
    <Card.Body>
      <Card.Text>
        Engine and transmition repairs and replacement
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img className="card-img"variant="top" src="https://i.imgur.com/t1df6NO.jpg" />
    <Card.Body>
      <Card.Text>
        Body restoration
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img className="card-img"variant="top" src="https://i.imgur.com/ERGhp4m.jpg" />
    <Card.Body>
      <Card.Text>
        General repairs and maitanance
      </Card.Text>
    </Card.Body>
  </Card>

</CardGroup>
            </div>
        )
    }
}
