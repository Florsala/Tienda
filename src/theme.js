import { createTheme } from '@mui/material/styles';


const theme = createTheme({
    palette: {
        primary: {
            light: '#62ebff',
            main: '#00b8d4',
            dark: '#0088a3',
            contrastText: '#000000',
        },
        secondary: {
            light: '#ffffcf',
            main: '#ffee58',
            dark: '#ffb300',
            contrastText: '#000000',

        }
    } ,
    typography: {
        fontFamily:'Poppins',
        fontWeightLight: 200,
        fontWeightRegular: 300,
        fontWeightMedium: 400,
    } 
})


export default theme;