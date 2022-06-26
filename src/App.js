import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchText: "",
      monsters: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  updateState = (e) => this.setState({ searchText: e.target.value });
  render() {
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name
        .toLowerCase()
        .includes(this.state.searchText.toLowerCase());
    });
    return (
      <div className="App">
        <input onInput={this.updateState} placeholder="Search Monster"></input>
        {filteredMonsters.map((monster) => (
          <h1 key={monster.name}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
