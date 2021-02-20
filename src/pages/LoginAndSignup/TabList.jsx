import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import { TabContext } from "@material-ui/lab";
import { useHistory } from "react-router-dom";
import Logo from "../../images/shutter_tube_logo.png";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  paper: {
    marginTop: theme.spacing(0),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const TabList = () => {
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = useState(0);
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root} style={{background:"#f9f9f9",height:"100vh",display:"flex",alignItems:"center"}}>
      <Container component="main" maxWidth="xs" style={{background:"#FFFF",boxShadow: "0 3px 5px rgb(0 0 0 / 5%)",borderRadius:"0.5em"}}>
        <div className="text-center pt-3 pb-3">
            <img src={Logo} alt="ShutterTube" style={{ height: "65px",cursor:"pointer"}} onClick={() => {history.push("/shuttertube");}}/>
        </div>
        <div className={classes.paper}>
          <TabContext value={value}>
            <AppBar position="static" style={{zIndex:"1050"}}>
              <Tabs value={value} onChange={handleChange} style={{background:"#2f2f2f"}}>
                <Link
                  to="/shuttertube/login"
                  style={{
                    flex: "1 0 0",
                    color: "#FFF",
                    textDecoration: "none"
                  }}
                  onClick={() => {
                    setValue(0);
                  }}
                >
                  <Tab
                    label="Login"
                    {...a11yProps(0)}
                    style={{ width: "100%" }}
                  />
                </Link>
                <Link
                  to="/shuttertube/signup"
                  style={{
                    flex: "1 0 0",
                    color: "#FFF",
                    textDecoration: "none"
                  }}
                  onClick={() => {
                    setValue(1);
                  }}
                >
                  <Tab
                    label="Sign up"
                    {...a11yProps(1)}
                    style={{ width: "100%" }}
                  />
                </Link>
              </Tabs>
            </AppBar>
            {value === 0 && <Login value={value}></Login>}
            {value === 1 && <Signup value={value}></Signup>}
          </TabContext>
        </div>
      </Container>
    </div>
  );
};

export default TabList;
