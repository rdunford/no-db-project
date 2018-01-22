import React, { Component } from 'react';
import Navbar from '../navbar/Navbar'
import './Favorites.css'
import axios from 'axios'

class Favorites extends Component {
    constructor() {
        super()

        this.state = {
            favorites: []
        }
    }

    componentDidMount() {
        axios.get(`/api/recipes/favorites`).then(res => {
            this.setState({
                favorites: res.data
            })
        })
    }

    removeItem(id) {
        axios.delete(`/api/recipes/${id}`).then(res => {
            this.setState({
                favorites: res.data
            })
        })
    }

    updateRecipe(id) {
        axios.put(`/api/recipes/${id}`).then(res => {
            this.setState({
                favorites: res.data
            })
        })
    }

    render() {

        let recipe = this.state.favorites.map((recipe, index) => {
            return (
                <div className="recipe" key={index}>
                    <div className='image-container'>
                        <img className="recipe-img" src={recipe.img} alt='' />
                    </div>

                    <ol>
                        <ul><h2>Recipe Name: {recipe.title}</h2></ul>
                        <ul><h3>Cuisine: {recipe.category}</h3></ul>
                        <ul><h3>Stars: {recipe.stars}</h3></ul>
                        <ul><h3>Ingredients: {recipe.ingredients}</h3></ul>
                        <ul><h3>Instructions: {recipe.instructions}</h3></ul>
                    </ol>

                    <div className='bottom'>
                        <div className='delete' onClick={() => this.removeItem(recipe.id)}>- DELETE</div>
                        <div className='share'> SHARE </div>
                    </div>
                </div>
            )
        })
        return (
            <div>
                <Navbar />

                {recipe}
            </div>
        )
    }

}
export default Favorites;