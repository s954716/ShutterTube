import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import AuthContext from "./components/AuthContext";



export const useNewUserSignup = () => {
    const history = useHistory();
    const [newEmail, setNewEmail] = useState("");
    const [newUserName, setNewUserName] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const { userData, setUserData } = useContext(AuthContext);
  
    const NewUserInfor = {
      records: [
        {
          fields: {
            name: newUserName,
            password: newPassword,
            email: newEmail
          }
        }
        ]
    };
  
    const handleEmailChange = (e) => {
      setNewEmail(e.target.value);
    };
  
    const handleUserNameChange = (e) => {
      setNewUserName(e.target.value);
    };
  
    const handlePassword = (e) => {
      setNewPassword(e.target.value);
    };
  
    const handleNewUser = () => {
      if (
        NewUserInfor.records[0].fields.email === "" ||
        NewUserInfor.records[0].fields.username === "" ||
        NewUserInfor.records[0].fields.password === ""
      ) {
        Swal.fire({
          icon: "error",
          title: "Please fill in the blanks completely",
          confirmButtonText: "OK"
        });
      } else {
          axios
          .post("https://api.airtable.com/v0/appzUYfhFTQydamJK/users", 
            NewUserInfor,
            {
                headers: {
                    Authorization: `Bearer keyMHZ3pIwRcsJmoj`
                }
            }
          )
          .then((res) => {
            console.log(res);
            Swal.fire({
            icon: "success",
            title: "Registration success!",
            confirmButtonText: "OK"
            }).then(() => {
            setUserData &&
                setUserData({
                userName: res.data.records[0].fields.name,
                id: res.data.records[0].id,
                hasLogin: true
                });
            localStorage.setItem( "userName",res.data.records[0].fields.name);
            localStorage.setItem("id", res.data.records[0].id);
            localStorage.setItem("hasLogin", true);

            axios
            .patch("https://api.airtable.com/v0/appzUYfhFTQydamJK/users",
                    {...NewUserInfor,
                        records: [
                            {
                                id: res.data.records[0].id,  
                                fields: {
                                    name: newUserName,
                                    password: newPassword,
                                    email: newEmail,
                                    id: res.data.records[0].id
                                }
                            }
                        ]
                    },
                    {
                        headers: {
                            Authorization: `Bearer keyMHZ3pIwRcsJmoj`
                        }
                    }
            )
            .then((res) => {
                console.log("update id",res);
                history.push(`/shuttertube/dashboard/${res.data.records[0].id}`);
            })
            .catch((err) => {console.log(err)})
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    };
  
    return {
      handleEmailChange,
      handleUserNameChange,
      handlePassword,
      handleNewUser
    };
};


export const useUserLogin = (onLoginSuccess) => {
const history = useHistory();
const [userName, setUserName] = useState("");
const [userPassword, setUserPassword] = useState("");

const { setUserData } = useContext(AuthContext);

const handleloginedUserName = (e) => {
    setUserName(e.target.value);
};

const handleloginedUserPassword = (e) => {
    setUserPassword(e.target.value);
};

const userInfor = {
    records: [
        {
          fields: {
            name: userName,
            password: userPassword
          }
        }
    ]
};

const handleUserToLogin = () => {
    if (userInfor.records[0].fields.name === "" || userInfor.records[0].fields.password === "") {
        Swal.fire({
            icon: "error",
            title: "Please fill in the blanks completely",
            confirmButtonText: "OK"
        });
    } else {
    axios
        .get("https://api.airtable.com/v0/appzUYfhFTQydamJK/users?maxRecords=3&view=Grid%20view",
            {
                headers: {
                    Authorization: `Bearer keyMHZ3pIwRcsJmoj`
                }
            }
        )
        .then((res) => {
        console.log("get all users",res.data.records);
        const filterRecord = res.data.records.filter((record) => {
            return(
                record.fields.name === userInfor.records[0].fields.name && record.fields.password === userInfor.records[0].fields.password
            )
        })

        
        if (filterRecord.length ===  0) {
            Swal.fire({
                icon: "error",
                title: "Logon failure : unknown user name or password incorrect",
                confirmButtonText: "OK"
              });
        }
        else {
            Swal.fire({
            icon: "success",
            title: "sign in suceesfully",
            confirmButtonText: "OK"
            })
            .then(() => {
                setUserData &&
                setUserData({
                    userName: filterRecord[0].fields.name,
                    id: filterRecord[0].fields.id,
                    hasLogin: true
                });
                localStorage.setItem("userName",filterRecord[0].fields.name);
                localStorage.setItem("id", filterRecord[0].fields.id);
                localStorage.setItem("hasLogin", true);
                history.push(`/shuttertube/dashboard/${filterRecord[0].fields.id}`);
            })
            .catch((error) => {
                console.log(error);
            });
        }
        })
        .catch((err) => {
        console.log(err);
        });
    }
};

return {
    handleloginedUserName,
    handleUserToLogin,
    handleloginedUserPassword
};
};