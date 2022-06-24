import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: "row",
        justifyContent: "left",
        alignItems: "left",
        paddingLeft: '30px',
        paddingRight: '30px',
    },
    heading: {
        color: 'rgba(0,0,0,0.5)',
    },
    image: {
        marginLeft: '15px',
        marginTop: '5px',
        float: 'right'
    },
    [theme.breakpoints.down('sm')]: {
        mainContainer: {
            flexDirection: "column-reverse"
        },
        heading: {
            fontSize: '35px',
            paddingTop: '4px'
        },
        image: {
            marginTop: "0"
        },
        appBar: {
            justifyContent: 'center',
            alignItems: 'center',
        }
    }
}));