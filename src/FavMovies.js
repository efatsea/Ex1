import React, { Component } from 'react'
import PropTypes from 'prop-types'

class FavMovies extends Component{
  
  render(){
    return(
      <ul>
      	{this.props.profiles.map((profile)=>{
    					const userN = this.props.users[profile.userID].name;
    					const mov = this.props.movies[profile.favoriteMovieID].name;
      					return(
                          <li key={profile.id}>
                            <p>{`${userN} 's favorite movie is ${mov}`}</p>
                          </li>
    					);

  		})} 
      </ul>
    );
  }
}

export default FavMovies