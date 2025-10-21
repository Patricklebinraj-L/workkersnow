import React, { useEffect, useState, useRef } from "react";
import "./index.css";
import Flexbox from "../../components/flexbox";
import SearchBar from "../../components/searchBar";
import SnackBars from "../../components/snackBar";
import ScollerBar from "../../components/scollerBar";
import SimpleLoading from "../../components/simpleLoading";
import BoxLoading from "../../components/boxLoading";
import CircularLoading from "../../components/circularLoading";
import SliderBar from "../../components/SliderBar";
import ElementToolBar from "../../components/ElementToolBar";
import { Drawer, List, ListItem, ListItemText, Box, Menu, MenuItem, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material";

const Home = (props) => {

    const [snackBarOpen, setSnackBarOpen] = useState(false);
    const images = ['web1.png', 'web2.jpg', 'web3.jpg', 'web4.jpg', 'web5.jpg', 'web6.png'];
    const image_dir = './images/';
    const [data, setData] = useState([]);
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);
    const container = useRef(null);

    const theme = useTheme();

    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const md = useMediaQuery(theme.breakpoints.down('md'));
    const lg = useMediaQuery(theme.breakpoints.up('md'));



    return (<>

        <div
            className="posts-container"
            style={sm || md ? {
                paddingLeft: 0,
                alignItems: 'center'
            } : {}}
            ref={container}
        >


            {
                loading ?
                    <CircularLoading />
                    : null
            }
        </div>

    </>)

}

export default Home;