import React, {Component} from 'react';
import Navbar from '../navbar/Navbar'
import './AddRecipe.css';
import axios from 'axios';

export default class AddRecipe extends Component{
    constructor(){
        super()
        this.addRecipe = this.addRecipe.bind(this);
    }

    addRecipe(){
        let newRecipe = {
            img: this.refs.img.value,
            title: this.refs.title.value,
            category: this.refs.category.value,
            stars: this.refs.stars.value,
            ingredients: this.refs.ingredients.value,
            instructions: this.refs.instructions.value
        }
        axios.post(`/api/recipes/`, newRecipe).then(res =>{
            console.log(res);
        })
    }

    render(){
        return(
            <div className='addrecipe'>
                <Navbar/>
               <div className='left-bar'></div>
               <div className='main-content'>
               <div className='title'>
                    <div className='comments'>Have a Favorite Recipe? Add it here for our team to review to add to our collection!</div>
               </div>

               <div className='add-content'>
               <input className='title-input' placeholder='Recipe title..' ref='title'></input>
               <input className='category-input' placeholder='What kind of cuisine?' ref='category'></input>
               <input className='stars-input' placeholder='Rank out of 5 stars..' ref='stars'></input>
               <input className='img-input' placeholder='Paste recipe image here..' ref='img'></input>
               <input className='ingredients-input' placeholder='List ingredients..' ref='ingredients'></input>
               <input className='instructions-input' placeholder='Write instructions here..' ref='instructions'></input>
               <div className='submit'onClick={this.addRecipe}>Submit Recipe</div>
               </div>
               </div>
            </div>
        )
    }

}