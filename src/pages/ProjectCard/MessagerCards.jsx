import React, { useState } from "react";
import { Button, Col, Form, Overlay, Popover, Row } from "react-bootstrap";
import styled from "styled-components";


const StyledMessagerCard = styled(Button) `
    color: rgba(0, 0, 0, 1.0);
    background: transparent;
    border: .1rem solid rgba(0, 0, 0, 1.0);
    padding: 15px;
    margin:15px 0;

    :hover {
        color: rgba(0, 0, 0, 1.0);
        background: transparent;
        opacity: 0.9;
        border: .1rem solid rgba(0, 0, 0, 1.0);
    }

    :active {
        color: rgba(0, 0, 0, 1.0);
        background: transparent;
        opacity: 0.9;
        border: .1rem solid rgba(0, 0, 0, 1.0);
    }
`;
const StyledFormContainer = styled.div`
    position: relative;
    background: #FFF

    ::before {
        content: "";
        position: absolute;
        top: -12px;
        left: 50%;
        margin-left: -14px;
        width: 0;
        height: 0;
        border-left: 14px solid transparent;
        border-right: 14px solid transparent;
        border-bottom: 14px solid #fff;
    }
`;


const MessagerCards = () => {
    const [show, setShow] = useState(false);
    const handleClick = (event) => {
      setShow(!show);
    };


    return(
        <Row>
            <Col xs={12} sm={6} className="justify-content-center">
                <StyledMessagerCard onClick={handleClick} block>Holy guacamole!</StyledMessagerCard>
                {
                    show &&
                    <StyledFormContainer>
                        <Form style={{borderRadius: "4px",boxShadow: "0px 2px 18px 0px rgb(0 0 0 / 20%)",padding:"20px",margin:"20px 0 50px 0",background:"#FFF"}}>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label> Destination Url</Form.Label>
                                <Form.Control type="text" size="lg" value/>
                            </Form.Group>
                        </Form>
                    </StyledFormContainer>
                }
            </Col>
        </Row>
    )
}

export default MessagerCards;