import React, {Component} from 'react'

class UserList extends Component {
  render(){
   return(
     // need to wrap code in a parent element in order to use 'this'
     <ul>
     { /* maps over the profiles prop*/}
      {this.props.profiles.map((profile)=> {
     // declares two const, userName and favMovie. userName's value is set to the users object
     // and based on the current profile object we are mapping over, gets a string. IE. the first
     // profile.userID value is '1' and that will be applied to the first userName. IE userName= this.props.users.1.name;
     // the same concept is used for the favMovie const
       const userName= this.props.users[profile.userID].name;
       const favMovie= this.props.movies[profile.favoriteMovieID].name;
         return(
           //creates a li element for each profiles object and sets the key to profile.id
           <li key={profile.id}>
           {
           //Uses the value of userName an favMovie for each time it repeats the code
           // each time the value of userName and favMovie is updated
         }
           {userName}'s favorite movie is {favMovie}
           </li>
         )
       }
      )
     }
   </ul>
    )
  }
}

export default UserList;