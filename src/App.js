import React from 'react';
import './App.css';
import axios from "axios"
import { CardList } from "./components/card-list/card-list.component"
import { SearchBox } from "./components/serch-box/serch-box.component"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      serchField: ""
    }
  }
  handleChange = (e) => {
    this.setState({ serchField: e.target.value })
  }
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        console.log(response)
        this.setState({ monsters: response.data })
      })
  }
  render() {
    const { monsters, serchField } = this.state
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(serchField.toLowerCase())
    })

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder="serch monster"
          handleChange={this.handleChange}
        />

        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
