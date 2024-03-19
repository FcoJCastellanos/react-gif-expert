import { useState, useEffect } from 'react';
import { GifGridItem } from './GifGridItem';
//import { getGifs } from '../helpers/getGifs';
import { useFecthGifs } from '../hooks/useFetchGifs';

export const GifGrid = ( {category} ) => {

    const {images, isLoading} = useFecthGifs(category);

    return (
    <>
        <h3>{ category}</h3>
        {
            isLoading&&(<h2>Cargando...</h2>)
        }

        <div className='card-grid'>
        {
            images.map((image) => (
                <GifGridItem key={image.id}
                    {
                        ...image
                    }
                />
            ))
        }
        </div>
    </>
  )
}
