import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    container: {
        display: "flex",
        height: "100vh",
        width: "100vw",
    },
    canvas: {
        border: "1px solid #ccc",
        flex: 1,
        cursor: "move",
    }
});

export default useStyles;
