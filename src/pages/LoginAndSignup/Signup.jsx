import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { TabPanel } from "@material-ui/lab";
import { IconButton, Input, InputAdornment } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useState } from "react";
import { useNewUserSignup } from "../../hooks";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    marginTop: theme.spacing(0),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Signup = ({ value }) => {
  const classes = useStyles();
  const {
    handleEmailChange,
    handleUserNameChange,
    handlePassword,
    handleNewUser
  } = useNewUserSignup();

  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // const handleChange = (prop) => (event) => {
  //   setValues({ ...values, [prop]: event.target.value });
  // };

  return (
    <TabPanel value={value} index={1}>
      <form className={classes.form} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              placeholder="Email Address"
              name="Email Address"
              autoComplete="email"
              autoFocus
              style={{ padding: "15px 0" }}
                onChange={handleEmailChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="lastName"
              placeholder="Username"
              name="lastName"
              autoComplete="lname"
              style={{ padding: "15px 0" }}
                onChange={handleUserNameChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              id="password"
              fullWidth
              size="normal"
              placeholder="Password"
              type={values.showPassword ? "text" : "password"}
              style={{ padding: "15px 0" }}
              onChange={handlePassword}
                // onChange={handlePassword}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </Grid>
        </Grid>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          style={{ background: "#2f2f2f" }}
          size="large"
            onClick={handleNewUser}
        >
          Register
        </Button>
      </form>
    </TabPanel>
  );
};

export default Signup;
