import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      ingredient:'',
      recipes: []
    }
  }

  getRecipes = async (e) => {
    e.preventDefault();
    const server='http://localhost:3001';
    const recipes = await axios.get(`${server}/recipes`, {params: {ingredient: this.state.ingredient}});
    this.setState({ recipes: recipes.data });
  }

  render() {
    return(
      <>
        <form onSubmit={this.getRecipes}>
          <label>enter an ingredient</label>
          <input onChange={(e) => this.setState({ ingredient:e.target.value })} type="text" name="ingredient"></input>
          <button>submit</button>
        </form>

        {this.state.recipes.length && this.state.recipes.map((recipe, idx) => (
          <div key={idx}>
            <h2><a href={recipe.uri}>{recipe.name}</a></h2>
            <img src={recipe.image_url} />
            <ul>
              {recipe.ingredients.map(ingredient => (
                <li key={Math.random()}>{ingredient}</li>
              ))}
            </ul>
          </div>
          ))
        }
      </>
    )
  }
}

export default App;
