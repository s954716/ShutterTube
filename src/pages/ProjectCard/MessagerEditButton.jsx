import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Col, Form, Modal, Row, Spinner } from 'react-bootstrap';
import styled from "styled-components";

const StyledBtn = styled(Button)`
    color: rgba(0, 0, 0, 1.0);
    background: transparent;
    border: .1rem dashed rgba(0, 0, 0, 1.0);
    transition: 0.2s linear;
    padding: 15px;

    :hover {
        color: rgba(0, 0, 0, 1.0);
        background: transparent;
        opacity: 0.5;
    }
`;


const MessagerEditButton = ({icon,children,onMessagerSelect}) => {
    const [lgShow, setLgShow] = useState(false);
    const [messagerLabel,setMessagerLabel] = useState("");
    const [messagerPlaceholder,setMessagerPlaceholder] = useState("");
    const [isDefaultOption,setIsDefaultOption] = useState(true);
    const [isSubmit,setIsSubmit] = useState(false);
    const [selectedMessagerData,setSelectedMessagerData] =useState({selectedValue:"",userInfor:""});

    const handleMessagerSelected = (e) => {
        setSelectedMessagerData({
            ...selectedMessagerData,selectedValue:e.target.value
        });
        switch (e.target.value) {
            case "facebook":
                setMessagerLabel("Facebook username");
                setMessagerPlaceholder("Enter your Facebook username only");
                setIsDefaultOption(false);
                break;
            case "whatsapp":
                setMessagerLabel("Your WhatsApp number including country code");
                setMessagerPlaceholder("+886 0912345678");
                setIsDefaultOption(false);
                break;
            case "telegram":
                setMessagerLabel("Telegram username");
                setMessagerPlaceholder("Enter your Telegram username only");
                setIsDefaultOption(false);
                break;
            case "skype":
                setMessagerLabel("Skype username");
                setMessagerPlaceholder("Enter your Skype username only");
                setIsDefaultOption(false);
                break;
            default:
                break;
        }
    }

    return (
        <Row>
            <Col className="px-1">
                <StyledBtn  variant="outline-dark" size="lg" block onClick={() => setLgShow(true)}>
                    <FontAwesomeIcon icon={icon} color="black"  size="sm" className="mr-3"/>
                    {children}
                </StyledBtn>
                <Modal
                    size="md"
                    show={lgShow}
                    centered="true"
                    onHide={() => {setLgShow(false); setIsDefaultOption(true);}}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg" style={{color: "#354558"}}>
                        Create a Messenger Link
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p style={{color: "#9ca8b3",fontWeight: "500",fontSize: "14px"}}>Choose the contact method for which you want to create a link</p>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label style={{color: "#354558"}}>Contact Method</Form.Label>
                            <Form.Control as="select" size="lg" onChange={handleMessagerSelected} style={{fontSize:"16px"}}>
                                <option value="none" disabled="disabled" selected="selected">Choose an option</option>
                                <option value="facebook">Facebook</option>
                                <option value="whatsapp">WhatsApp</option>
                                <option value="telegram">Telegram</option>
                                <option value="skype">Skype</option>
                            </Form.Control>
                        </Form.Group>
                        {
                            !isDefaultOption &&
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label style={{color: "#354558"}}>{messagerLabel}</Form.Label>
                                <Form.Control type="text" size="lg" placeholder={messagerPlaceholder} style={{fontSize:"16px"}} onChange={(e) => {setSelectedMessagerData({...selectedMessagerData,userInfor:e.target.value})}}/>
                            </Form.Group>
                        }
                        <Form.Group className="d-flex justify-content-center">
                            <Button variant="primary" onClick={() => {onMessagerSelect && onMessagerSelect(setIsSubmit,selectedMessagerData,setLgShow,setIsDefaultOption)}}>
                                {
                                    isSubmit && 
                                    <Spinner
                                        as="div"
                                        animation="border"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                        className="ml-2 mr-2"
                                    />
                                }
                                {
                                    !isSubmit && 
                                    <span>Add Url</span>
                                }    
                            </Button>
                        </Form.Group>

                    </Modal.Body>
                </Modal>
            </Col>
        </Row>
    )
};

export default MessagerEditButton;