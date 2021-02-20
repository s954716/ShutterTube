import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt,faPencilAlt, faPlus } from '@fortawesome/free-solid-svg-icons'
import { Alert, AlertTitle, Skeleton } from "@material-ui/lab";
import { Link } from "react-router-dom";

const StyledMainTitle = styled.h4`
  font-size: 24px;
  font-weight: 500;
  color: #354558;
`;

const StyledSubTitle = styled.h6`
  font-size: 14px;
  font-weight: 500;
  color: #354558;
`;

const StyledNewProjectBtn = styled(Button)`
  :hover {
    background-color: #074073;
    border: 1px solid #074073;
  }
`;

const StyledTable = styled(Table)`
  border-radius: 5px;
`;

const StyledTh = styled.th`
  border-top: none !important;
  padding: 1.5rem !important;
  text-align: center;
`;

const StyledTbody = styled.tbody`
  background: #fff;
  color: #212529;
`;

const StyledTd = styled.td`
  border-top: none !important;
  text-align: center;
  padding-left:1.5rem !important;
  padding-right:1.5rem !important
`;



export const ProjectTitle = () => {
  return (
    <>
      <StyledMainTitle>Your Projects</StyledMainTitle>
      <StyledSubTitle>All your available projects</StyledSubTitle>
    </>
  );
};

export const NewProjectBtn = ({onCreateNewProject}) => {

  return (
    <div className="text-right">
      <StyledNewProjectBtn variant="primary" size="md" onClick={() => {onCreateNewProject && onCreateNewProject()}}>
        <FontAwesomeIcon icon={faPlus} color="white" size="sm"/> 
        <span className="d-none d-sm-inline-block pl-2 pr-2">Create a Project</span> 
      </StyledNewProjectBtn>
    </div>
  );
};

export const ProjectTable = ({userProjects,onRecordDeleted}) => {
  console.log("in ProjectTable", userProjects)
  const [projectState, setProjectState] = useState("default");


  useEffect(() => {
    userProjects? setProjectState("loading") : setProjectState("error");
    setTimeout(() => {
      setProjectState("success")
    }, 2000);
  }, []);

  return (
    <StyledTable striped variant="dark">
      <thead>
        <tr>
          <StyledTh style={{ textAlign: "left" }}>Name</StyledTh>
          <StyledTh className="d-none d-sm-table-cell">Create</StyledTh>
          <StyledTh>Edit</StyledTh>
          <StyledTh>Delete</StyledTh>
        </tr>
      </thead>
      <StyledTbody>
        {
          (projectState === "default" || projectState === "loading") &&
          (
            <>
            <tr>
              <td colSpan="4" style={{borderTop:"none",padding:"5px 0"}}>
                <Skeleton animation="wave" height={60} />
              </td>
            </tr> 
            <tr>
              <td colSpan="4" style={{borderTop:"none",padding:"5px 0"}}>
                <Skeleton animation="wave" height={60} />
              </td>
            </tr> 
            <tr>
              <td colSpan="4" style={{borderTop:"none",padding:"5px 0"}}>
                <Skeleton animation="wave" height={60} />
              </td>
            </tr> 
            </>
          )
        }
        {
        projectState === "success" &&
          userProjects.map((project) => {
            const thisId = project.id;
                return (
                  <tr>
                    <StyledTd style={{ textAlign: "left" }}>{project.fields.name}</StyledTd>
                    <StyledTd className="d-none d-sm-table-cell">{project.fields.create}</StyledTd>
                    <StyledTd>
                      <Link to={`/shuttertube/project/${thisId}`}>
                        <FontAwesomeIcon icon={faPencilAlt} color="Dodgerblue"  size="sm"/>
                      </Link>
                    </StyledTd>
                    <StyledTd>
                      <FontAwesomeIcon icon={faTrashAlt} color="Tomato" size="sm" style={{cursor:"pointer"}} onClick={() => {onRecordDeleted && onRecordDeleted(thisId)}}/>
                    </StyledTd>
                  </tr>
                  );
          })
        }
        {
          projectState === "error" && (
                            <tr>
                              <td colSpan="4">
                              <Alert severity="error">
                                <AlertTitle>Error</AlertTitle>
                                loading projects error — <strong>check it out!</strong>
                              </Alert>
                              </td>
                            </tr> 
                          )
        }

      </StyledTbody>
    </StyledTable>
  );
};
