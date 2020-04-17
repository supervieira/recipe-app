import React from 'react';
import style from './recipe.module.css';

const Recipe = (props) => {
    return(
        <div className={style.recipe}>
            <h2>{props.title}</h2>
            <img src={props.image} alt={props.title}/>
            <p>Calorie count: {Math.ceil(props.calories)}</p>
            <ul>
                {
                    props.ingredients.map(ingredient => (
                        <li>{ingredient.text}</li>
                    ))
                }
            </ul>
            <a href={props.url} target="_blank">Recipe here</a>
        </div>
    );
};

export default Recipe;