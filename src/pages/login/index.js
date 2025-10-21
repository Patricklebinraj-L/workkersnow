import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import "./index.css";
import { Modal, Fade, Paper } from "@mui/material";
import { goBack, navigateTo, checkValidEmail } from "../../utils/tools";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ModalBox from "../../components/ModalBox";
import { useDispatch, useSelector } from "react-redux";
import CircularLoading from "../../components/circularLoading/";
import SnackBars from "../../components/snackBar";

const Login = (props) => {

    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.up('sm'));
    const md = useMediaQuery(theme.breakpoints.up('md'));
    const [values, setValues] = useState({});
    const [list, setList] = useState([]);
    const dispatch = useDispatch();

    // const [error, setError] = useState(false);
    // const [success, setSuccess] = useState(false);
    const [open, setOpen] = useState(false);
    const {setSnack} = useOutletContext();


    const { actions, name } = props;
    const [boxActions] = actions || [];
    const { addUser, clear, clearResponse ,login} = boxActions || {};



    const states = useSelector((state) => state?.[name[0]]);
    const error = useSelector((state) => state?.[name[0]]?.response?.error);
    const message = useSelector((state) => state?.[name[0]]?.response?.message);
    const { loading, response } = states;

    useEffect(() => {
        if (message) {

            setSnack(error,message,clearResponse);

        }

    }, [states])



    const defaultList = [
        {
            label: 'User',
            placeholder: 'user/email',
            name: 'user',
            error: false,
            value: null,
        },
        {
            label: 'Password',
            placeholder: 'password',
            name: 'password',
            error: false,
            value: null,
        },
    ];



    const handleChange = (e, id) => {

        e?.preventDefault();
        let value = e?.target?.value;
        let len = value?.length;

        if ((id) || (id == 0)) {

            let obj = defaultList[id] || {};
            let { name, label } = obj;

            switch (name) {

                case 'user':
                    if (len < 5 && len > 0) {
                        obj["error"] = label + " should be atleast 5 characters!"
                    }
                    else {
                        obj["error"] = false;
                        obj["value"] = value;
                    }
                    break

                case 'email':
                    let valid = checkValidEmail(value);
                    if (!valid) {
                        obj["error"] = label + " is invalid!"
                    }
                    else {
                        obj["error"] = false;
                        obj["value"] = value;
                    }
                    break

                case 'password':
                    if (len < 4 && len > 0) {
                        obj["error"] = label + " should be atleast 4 characters!"
                    }
                    else {
                        obj["error"] = false;
                        obj["value"] = value;
                    }
                    break

                case 'cpassword':

                    let pass = list.filter((e, i) => e?.name == 'password')[0];
                    let passVal = pass?.value;

                    if (value != passVal) {
                        obj["error"] = label + " should be match password!"
                    }
                    else {
                        obj["error"] = false;
                        obj["value"] = value;
                    }
                    break



            }

            let newObj = [...list];
            newObj[id] = obj;
            setList(newObj);

        }


    }


    const handleClick = () => {

        let errors = false;
        let newList = [...list].map((e, i) => {
            let obj = e ? { ...e } : {};
            if (obj?.value == '' || !obj?.value) {
                if (!obj?.error) {
                    obj["error"] = "Required!";
                }
                errors = true;
            }
            if (obj?.error) {
                errors = true;
            }
            return obj;
        });
        if (errors) {
            setList(newList);
        }
        else {

            let finalObj = {};
            for (let x of list) {
                let name = x?.name;
                let value = x?.value;
                finalObj[name] = value;
            }
            dispatch(login(finalObj));
        }

    }



    useEffect(() => {

        setList(defaultList);

    }, [])



    return (<>

        <ModalBox style={{ background: '#282a35' }}>

            <p className="login-title">Login</p>
            <div className="login-inputbox">

                {list && list?.map((e, i) => {

                    return (
                        <>
                            <div key={i}>
                                <label>{e?.label}</label>
                                <input type="text" className="login-input" name={e?.name} placeholder={e?.placeholder} onChange={(e) => handleChange(e, i)} />
                                {e?.error && <p>{e?.error}</p>}
                            </div>

                        </>
                    )

                })}

                <div>
                    <a className="login-link">sign up? click here</a>
                </div>

                <div>
                    <button className="login-button" onClick={handleClick}>login</button>
                </div>

            </div>


            {loading ? <CircularLoading /> : null}


        </ModalBox>


    </>);
}

export default Login;