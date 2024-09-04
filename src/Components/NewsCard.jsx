import React from 'react'
import { Badge, Card, Col } from "react-bootstrap";
const NewsCard = ({data}) => {
  return (
      <>
      {data.map((item, index) => {
            return (
              <Col key={index} md={4} className="mb-4">
                <Card style={{ width: "25rem" }}>
                  <Card.Header>
                    {item.categoryNames.map((v, i) => {
                      return (
                        <Badge bg="success" key={i} className="me-2">
                          {v}
                        </Badge>
                      );
                    })}
                  </Card.Header>
                  <Card.Img
                    variant="top"
                    src={item.imageUrl}
                    style={{ height: "15rem" }}
                  />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text style={{ textAlign:'justify'}}>
                      {item.content}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="fst-italic">
                    Author Name : {item.authorName}
                  </Card.Footer>
                </Card>
              </Col>
            );
          })}
      </>
  )
}
export default NewsCard
