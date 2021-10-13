import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

//rafc
export const GridGif = ({ category }) => {

    // const [count, setcount] = useState(0);
    
    const { data :images ,loading}= useFetchGifs( category );
    console.log(loading);

    return (
        <>
            <h2 className = "gif animate__animated animate__fadeIn">{category}</h2>

            {loading && <p className = "gif animate__animated animate__flash">Loading...</p>}

            <div className="cardGrid">
                {/* <button onClick = {()=>setcount(count+1)}>incremento</button> */}

                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }

            </div>
        </>
    )
}
