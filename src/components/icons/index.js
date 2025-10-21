import MenuIcon from '@mui/icons-material/Menu';
import {Person} from "@mui/icons-material";

export default function Icons(props){

    const {type} = props;

    if(!type){
        return null;
    }

    switch(type){

        case "menu":
            return <MenuIcon {...props} />
        case "profile":
            return <Person {...props} />
    }


}