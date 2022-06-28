import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
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
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
