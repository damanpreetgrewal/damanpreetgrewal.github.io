import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Intro(props) {
  const theme = props.theme;

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "1.6em" }}>
              LET ME{" "}
              <span style={{ color: theme.accentColor }}> INTRODUCE </span>{" "}
              MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think…{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                🤷‍♂️
              </span>
              <br />
              <br />I am fluent in classics like
              <i>
                <b style={{ color: theme.accentColor }}>
                  {" "}
                  C++, Java and Javascript.{" "}
                </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b style={{ color: theme.accentColor }}>
                  Web Technologies and Products{" "}
                </b>{" "}
                and also in areas related to{" "}
                <b style={{ color: theme.accentColor }}>
                  Full Stack Web Development.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b style={{ color: theme.accentColor }}>Node.js</b> and
              <i>
                <b style={{ color: theme.accentColor }}>
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b style={{ color: theme.accentColor }}>
                  {" "}
                  React.js and Next.js
                </b>
              </i>
            </p>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
    </Container>
  );
}
export default Intro;
