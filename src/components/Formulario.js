import React, {useContext, useState} from 'react';
import {CategoriaContext} from '../Context/categoriaContext';
import {RecetasContext} from '../Context/RecetasContext';


const Formulario = () => {
    
    
    const [busqueda, guardarBusqueda] = useState({
        nombre: '',
        categoria: ''
    });
    
    const {categorias} = useContext(CategoriaContext);

    const {buscarRecetas, setConsultar} = useContext(RecetasContext);

    //console.log(categorias);

    const  obtenerDatosReceta = e => {    
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    
    return (
    <form className='col-12' onSubmit={ e => {
            e.preventDefault();
            buscarRecetas(busqueda);
            setConsultar(true);
    }}>
        <fieldset className='text-center'>
            <legend> buscar bebidas por categoría o ingrendiente</legend>
        </fieldset>

        <div className='row mt-4'>
            <div className='col-md-4'> 
                <input type='text' name='nombre' className='form-control' onChange={obtenerDatosReceta} placeholder='Buscar por ingrediente'/>
            </div>

            <div className='col-md-4'>
                <select name="categoria" className='form-control' onChange={obtenerDatosReceta} >
                    
                    <option value=''>-- Seleccione una categoría --</option>
                    {categorias.map(categoria => (

                    <option key={categoria.strCategory} value={categoria.strCategory}>{categoria.strCategory}</option>

                    ))}

                </select>    
            </div>
            <div className='col-md-4'>
                <input type='submit' className='btn btn-block btn-primary' value='Buscar'/>
            </div>

            </div>
        
    </form>

    


    );
}
 
export default Formulario;