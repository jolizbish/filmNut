import React from 'react';
import { render } from 'react-dom';
import SearchMovies from './SearchMovies.jsx';
import MovieList from './MovieList.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      allMyMovies: [{
        'title': 'Hatari',
        'year': 1962,
        'genre': 'comedy'
      }, {
        title: 'The Pink Panther',
        'year': 1963,
        'genre': 'comedy'
      }, {
        title: 'Charade',
        'year': 1963,
        'genre': 'thriller'
      }],
      maybeTonights: []
    };
    this.onTextEntryHandleChange = this.onTextEntryHandleChange.bind(this);
    this.select = this.select.bind(this);
    this.deselect = this.deselect.bind(this);
  }

  componentDidMount() {
    console.log('Component mounted!');
  }

  onTextEntryHandleChange(event) {
    console.log('entry changed!');
    // console.log('input: ', event.target.value);
    //
    // fetch('/',{
    //   method: 'POST',
    //   body: JSON.stringify({
    //     text: event.target.value
    //   }),
    //   headers: {"Content-Type": "application/json"}
    // })
    // .then((response) => {
    //   return response.json();
    //
    // })
    // .then((response) => {
    //   console.log(response);
    //   var skills = response.map((skill) => skill[0]);
    //     this.setState({
    //     suggestedSkills: skills,
    //     selectedSkills: []
    //   })
    // })
    // .catch(function(err) {
    //   console.log(err);
    // });
  }
  select(movie) {
    var newAllMyMovies = this.state.allMyMovies.filter((el) => el !== movie);
    var newMaybeTonights = this.state.maybeTonights.concat(movie);
    this.setState({
      allMyMovies: newAllMyMovies,
      maybeTonights: newMaybeTonights
    });
    console.log('current state: ', this.state);
    console.log(movie, "is selected");
  }

  deselect(movie) {
    var newMaybeTonights = this.state.maybeTonights.filter((el) => el !== movie);
    var newAllMyMovies = this.state.allMyMovies.concat(movie);
    this.setState({
      allMyMovies: newAllMyMovies,
      maybeTonights: newMaybeTonights
    });
    console.log('current state: ', this.state);
    console.log(movie, "is deselected");
  }

  render() {
    return (
      <div>
        <hr class="top-bar"/>
        <SearchMovies onTextEntryHandleChange={this.onTextEntryHandleChange}/>
        <hr />
        <MovieList
          id="all-movies"
          title="ALL MOVIES"
          symbol="+"
          movies={this.state.allMyMovies}
          onSelect={this.select}
        />
        <hr />
        <MovieList
          id="potential-movies"
          title="MAYBE TONIGHT"
          symbol="X"
          movies={this.state.maybeTonights}
          onSelect={this.deselect}
        />
      </div>
    );
  }
}

export default App;
