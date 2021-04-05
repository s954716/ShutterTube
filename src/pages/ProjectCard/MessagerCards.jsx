import { faFacebookMessenger, faSkype, faTelegramPlane, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faSignature } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Col, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import styled from "styled-components";



const StyledMessagerCard = styled(Button) `
    color: rgba(0, 0, 0, 1.0);
    background: ${({messagerCardStyle}) => ( messagerCardStyle.outline === true ? "transparent" : "#FFF")};
    border:  ${({messagerCardStyle}) => ( messagerCardStyle.outline === true ? ".1rem solid rgba(0, 0, 0, 1.0);" : ".1rem solid #FFF;")};
    padding: 15px;
    margin-bottom: 20px;


    :hover {
        color: rgba(0, 0, 0, 1.0);
        border:  ${({messagerCardStyle}) => ( messagerCardStyle.outline === true ? ".1rem solid rgba(0, 0, 0, 1.0);" : ".1rem solid #FFF;")};
        background: ${({messagerCardStyle}) => ( messagerCardStyle.outline === true ? "transparent" : "#FFF")};
        opacity: 0.6;
    }
    :active {
        color: rgba(0, 0, 0, 1.0);
    }
    :focus {
        box-shadow: none;
    }

`;
const StyledFormContainer = styled.div`
    position: relative;
    background: #FFF;
    padding: 18px;
    border-radius:4px;
    margin-top: 20px;
    box-shadow: 0px 2px 18px 0px rgb(0 0 0 / 20%);

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

const StyledInforTitle = styled.h4`
        font-size: 28px;
        color: #354558;
        font-weight: 600;
`;

const StyledItemTitle = styled.span`
        font-size: 14px;
        color: #354558;
        font-weight: 700;
`;


const MessagerCards = ({messager,index}) => {
    const [show, setShow] = useState(false);
    const [outlineEnabled,setOutlineEnabled] = useState(false);
    const [messagerCardStyle,setMessagerCardStyle] = useState({
        outline: true
    });

    const handleOutlineEnabled = (e) => {
        setOutlineEnabled(!outlineEnabled);
        if(e.target.checked === false) {
            setMessagerCardStyle({...messagerCardStyle,outline: false})
        }else{
            setMessagerCardStyle({...messagerCardStyle,outline: true})
        }
    };

    const messagerIcon = (iconType) => {
        switch (iconType) {
            case "facebook":
                return faFacebookMessenger;
            case "skype":
                return faSkype;
            case "telegram":
                return faTelegramPlane;
            case "whatsapp":
                return faWhatsapp;
            default:
                break;
        }
    };


    return(
            <Col xs={12} sm={6} className="justify-content-center px-1">
                <StyledMessagerCard messagerCardStyle={messagerCardStyle} onClick={() => {setShow(!show)}} variant="outline-dark" block>
                    <FontAwesomeIcon icon={messagerIcon(messager.fields.name)} color="black"  size="sm" className="mr-1"/>
                    {messager.fields.name}
                </StyledMessagerCard>
                {
                    show &&
                    <StyledFormContainer>
                        <div className="d-flex justify-content-between">
                            <StyledInforTitle>Settings</StyledInforTitle>
                        </div>
                        <label htmlFor="basic-url">
                            <FontAwesomeIcon icon={faSignature} color="#354558"  size="sm" className="mr-1"/>
                            <StyledItemTitle>Destination Url</StyledItemTitle> 
                        </label>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon3">
                                    <FontAwesomeIcon icon={messagerIcon(messager.fields.name)} color="#354558"  size="sm" className="mr-1"/>
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl id="basic-url" aria-describedby="basic-addon3" size="lg" value={messager.fields.messagerInfor}/>
                        </InputGroup>
                        <Form.Check 
                            type="switch"
                            id={`custom-switch${index}`}
                            checked={outlineEnabled}
                            label="outline"
                            onClick={handleOutlineEnabled}
                        />
                        <label htmlFor="basic-url">                                
                            <StyledItemTitle>Border Radius</StyledItemTitle> 
                        </label>
                        <InputGroup className="mb-3">
                            <Form.Control as="select" size="lg" style={{fontSize:"16px"}}>
                                <option value="straight">Straight</option>
                                <option value="rounded" selected="selected">Rounded</option>
                                <option value="round">Round</option>
                            </Form.Control>
                        </InputGroup>
                    </StyledFormContainer>
                }
            </Col>
    )
}

export default MessagerCards;