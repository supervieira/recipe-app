import React from 'react';
import style from './recipe.module.css';

const Recipe = (props) => {
    return(
        <div className={style.recipe}>
            <h1>{props.title}</h1>
            <p>{props.calories}</p>
            <img src={props.image} alt={props.title}/>
            <ul>
                {
                    props.ingredients.map(ingredient => (
                        <li>{ingredient.text}</li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Recipe;