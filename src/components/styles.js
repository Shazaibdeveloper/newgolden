import { Typography, Divider, Button, TextField } from '@mui/material'
import { styled, withTheme } from '@mui/material/styles'


export const Headingmain = styled(Typography)(() => ({
    fontSize: "30px",
    fontWeight: 500,
    margin: '0 auto 20px',
    color: "#ef5734",
    backgroundImage: "-webkit-linear-gradient(315deg, #ef5734 0%, #ffcc2f 74%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
}));

export const SubHeading = styled(Typography)(() => ({
    fontSize: 20,
    fontWeight: 500,
    marginBottom: 15,
    color: "#ef5734",
    backgroundImage: "-webkit-linear-gradient(315deg, #ef5734 0%, #ffcc2f 74%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
}));

export const Text = styled(Typography)(() => ({
    fontSize: 17,
    color: "#ffffffe8",
}));

export const Dividerstyled = styled(Divider)(() => ({
    width: "80px",
    borderWidth: "3px",
    opacity: 0.09,
    marginTop: "15px",
    marginBottom: "15px",
    backgroundColor: "#eee",
    borderTop: "1px solid #eee",
}));

export const Buttonstyled = styled(Button)(() => ({
    borderRadius: 290,
    color: '#222',
    background: " -webkit-linear-gradient(315deg, #ef5734 0%, #ffcc2f 74%)",
    padding: 7,
    marginTop: 10,
}));

export const TextFieldstyled = styled(TextField)(() => ({
    width: "100%",
    marginBottom: "15px",
    '& .MuiInputBase-input': {
        height: '7px',
        background: "#222",
        border: "1px solid white",
        color: "white",
    },
    '& 	.MuiOutlinedInput-notchedOutline': {
        border: "none"
    }
}));

export const TextFieldBigstyled = styled(TextField)(() => ({
    width: "100%",
    marginBottom: "15px",
    '& .MuiInputBase-input': {
        height: "40vh",
        background: "#222",
        border: "1px solid white",
        color: "white",
    },
    '& 	.MuiOutlinedInput-notchedOutline': {
        border: "none"
    }
}));

