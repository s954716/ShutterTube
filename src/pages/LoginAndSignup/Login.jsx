import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { TabPanel } from "@material-ui/lab";
import { IconButton, Input, InputAdornment } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useUserLogin } from "../../hooks";

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

const Login = ({ value }) => {
  const classes = useStyles();
    const {
      handleloginedUserName,
      handleUserToLogin,
      handleloginedUserPassword
    } = useUserLogin();
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


  return (
    <TabPanel value={value} index={0}>
      <form className={classes.form} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Input
              autoComplete="fname"
              name="firstName"
              required
              fullWidth
              id="firstName"
              placeholder="Username"
              autoFocus
              size="normal"
              style={{padding:"15px 0"}}
                onChange={handleloginedUserName}
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              id="password"
              fullWidth
              size="normal"
              placeholder="Password"
              type={values.showPassword ? 'text' : 'password'}
              style={{padding:"15px 0"}}
              onChange={handleloginedUserPassword}
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
            onClick={handleUserToLogin}
        >
          Login
        </Button>
      </form>
    </TabPanel>
  );
};

export default Login;
