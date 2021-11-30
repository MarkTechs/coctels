import React,{useContext, useEffect, useState} from 'react';
import axios from 'axios';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

export const ModalContext = React.createContext();



const ModalProvider = (props) => {
    
    const [idReceta, setIdReceta] = useState(null);
    const [informacion, setReceta] = useState({});


    useEffect(() => {
        const obtenerReceta = async () => {
            if(!idReceta) return;

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;
            const result = await axios.get(url);
            setReceta(result.data.drinks[0]);
        }
        obtenerReceta();
    }, [idReceta]);
    
    return (
        <ModalContext.Provider value={{informacion, setIdReceta, setReceta}}>
            {props.children}
        </ModalContext.Provider>
    );
}

export default ModalProvider;