import dimensions from './dimensions';
import { createTheme } from '@mui/material/styles';
 

export default {

    MuiCssBaseline: {
        "@global": { 
            
            "*": {
                "scrollbar-width": "thin",
            },
            "*::-webkit-scrollbar": {
                width: "5px",
                height: "5px",
            },
            "*::-webkit-scrollbar-track": {
                backgroundColor: "#30485C",
            },
            "*::-webkit-scrollbar-thumb": {
                backgroundColor: "#566276",
                borderRadius: "4px",
                // outline: "3px solid slategrey",
            },
            "*::-webkit-file-upload-button": {
                //visibility: 'hidden',
                fontWeight: 900,
                width: "95px",
                padding: "5px 0 5px 0",
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                backgroundColor: "#22A7F0",
                fontSize: '13px',
                border: `1px solid #22A7F0`,
                'box-shadow': '0px 6px 14px 4px rgba(0, 0, 0, 0.11)',
            },
            "input[type=number]::-webkit-inner-spin-button":{
                "-webkit-appearance": "none"
              },
              '.react-daterange-picker__inputGroup__input' :{
                color: '#768296'
            },
            '.react-daterange-picker__wrapper':{
                border: 'thin solid #22A7F0',
                height:"22px",
                borderRadius:'4px'
            }
        },
    },
    



};