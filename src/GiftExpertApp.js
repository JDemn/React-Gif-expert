import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GridGif } from './components/GridGif';

// const categories = ['One Punch', 'Samurai x', 'Dragon ball Z', 'Naruto'];


const GiftExpertApp = () => {
    const [categories, setcategories] = useState(['Naruto']);

    // const agregar =()=>{

    //     // setcategories([...categories, 'Kimetsu noyaiba']);
    //     setcategories(newCat => [...newCat, 'Kimetsu noyaiba']);
    // };

    return (
        <>
            <h1>GiftExpertApp</h1>
            <AddCategory setCategories={setcategories} />
            <hr></hr>
            {/* <button onClick={agregar}>Agregar</button>     */}
            <ol>
                {
                    categories.map(category => (
                        //   return <h1 key = {category}>{category}</h1>
                        <GridGif
                            key = {category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    )
}


export default GiftExpertApp;