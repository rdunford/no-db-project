import React, { Component } from 'react';
import Navbar from '../navbar/Navbar';
import './Mainpage.css'
import axios from 'axios'

class Mainpage extends Component {
    constructor(props) {
        super(props)
        // console.log(props, "props on mainpage in constructor")

        this.state = {
            recipes: []
        }
        // this.saveToFavorites = this.saveToFavorites.bind(this);
    }

    componentDidMount() {
        axios.get(`/api/recipes/`).then(res => {
          this.setState({
            recipes: res.data
          })
        })
      }
    
    saveToFavorites(id){
        axios.put(`/api/recipes/favorites/${id}`).then(res =>{
            this.setState({
                favorites: res.data
            })
        })
        console.log('within the saveToFavorites function',this.state.favorites)
    }

    filter(category){
        axios.get(`/api/recipes/${category}`).then(res =>{
            console.log('axios call for category data',res.data)
            this.setState({
                recipes: res.data
            })
        })
    }

    getAllRecipes(){
        axios.get(`/api/recipes/`).then(res => {
            this.setState({
              recipes: res.data
            })
          })
    }


    render() {

        //Displays recipes in state
        let recipe = this.state.recipes.map((recipe, index) => {
            return (
                <div className="recipe" key={index}>
                    <div className='image-container'>
                    <img className="recipe-img" src={recipe.img} alt='' />
                    </div>

                    <ol>
                        <ul><h2>Recipe Name: {recipe.title}</h2></ul>
                        <ul><h3>Cuisine: {recipe.category}</h3></ul>
                        <ul><h3>Stars: {recipe.stars}</h3></ul>
                    </ol>
                    
                    <div className='bottom'>
                    <div className='add' onClick={() => this.saveToFavorites(recipe.id)}>+ SAVE</div>
                    <div className='share'> SHARE </div>
                    </div>
                </div>
            )
        })

        // console.log(this.state.recipes, "this is state on mainpage")
        return (
            <div className='mainpage'>
                <Navbar />
                <div className='filter-category'>
                    <div className='item' onClick={()=> this.filter('American')}>American</div>
                    <div className='item' onClick={()=> this.filter('French')}>French</div>
                    <div className='item' onClick={()=> this.filter('Italian')}>Italian</div>
                    <div className='item' onClick={()=> this.filter('Chinese')}>Chinese</div>
                    <div className='item' onClick={()=> this.filter('Japanese')}>Japanese</div>
                    <div className='item' onClick={()=> this.filter('Mexican')}>Mexican</div>
                    <div className='item' onClick={()=> this.getAllRecipes()}>Everything</div>
            </div>
                <div className='recipe-header'>RECIPES</div>
                <div className='recipe-list'>
                    {recipe}
                    {console.log("mainpage",this.state.recipes)}
                </div>

            </div>
        )
    }

}

export default Mainpage;