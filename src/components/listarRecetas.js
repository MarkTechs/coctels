import React, {useContext} from 'react';
import Receta from './Recetas';
import {RecetasContext} from '../Context/RecetasContext';




const ListaRecetas = () => {
    
    const {recetas} = useContext(RecetasContext);

    return ( 
        <div className="row mt-5">
        {recetas.map(receta => (
            <Receta 
                key={receta.idDrink}
                receta={receta}
            />
        ))}
            </div>

        );

}
 
export default ListaRecetas;