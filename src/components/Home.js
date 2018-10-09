import React from 'react';
import { Container, Jumbotron, Button } from 'reactstrap';

class Home extends React.Component {
  render() {
    return (
      <Container className="main-container">
        <div>
          <Jumbotron>
            <p className="lead">Three Elements in TangleID</p>
            <p className="my-2">
              Basically, there are three main players in TangleID: Issuer,
              Holder and Inspector-Verifier. Sometimes, to further deliberate
              the framework, Identifier Registry will be emphasized, but here we
              focus on major three elements and give them descriptions in
              reference of W3C.
            </p>
            <p className="my-2">
              <img
                src="/static/imgs/vc_roles.4fb3f701.png"
                width="60%"
                height="60%"
              />
            </p>
            <p className="my-2">
              <b>1. Issuer</b>
            </p>
            <p className="my-2">
              The entity that creates a claim and associates it with a
              particular subject (Often known as Holder, but not always).
            </p>
            <p className="my-2">
              <b>2. Holder</b>
            </p>
            The entity who controls a particular claim. A holder is typically
            the initiator of the transmission of a claim.
            <br />
            <p className="my-2">
              <b>3. Inspector-Verifier</b>
            </p>
            <p className="my-2">
              The entity verifying a claim about a given subject.
            </p>
            <p className="my-2">
              In the certification scenario, Issuer is the authorites; Holder is
              you; Inspector Verifier is the bank. The flow can be described as
              follow: Holder (you) applies for the loan, hence the identity
              authentication to Issuer (the authorities) by Inspector Verifier
              (bank). That is, TangleID, a powerful tool, can reduce the costs
              by M2M mechanics and further rebuild the trust without trusts by
              DLT.
            </p>
            <p className="lead">
              <Button color="primary">Learn More</Button>
            </p>
          </Jumbotron>
        </div>
      </Container>
    );
  }
}

export default Home;
