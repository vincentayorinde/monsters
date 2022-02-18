import { Component } from 'react'
import logo from './logo.svg'
import { CardList } from './components/CardList/card-list.component'
import { SearchBox } from './components/SearchBox/search-box.component'
import './App.css'

class App extends Component {
	constructor() {
		super()
		this.state = {
			monsters: [],
			searchField: '',
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((res) => res.json())
			.then((users) => this.setState({ monsters: users }))
	}

	handleChange = (e) => this.setState({ searchField: e.target.value })

	render() {
		const { monsters, searchField } = this.state
		const filteredMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField.toLowerCase()),
		)
		return (
			<div className='App'>
				<h1> Monsters Rolodex </h1>
				<SearchBox
					handleChange={this.handleChange}
					placeholder='search monsters'
				/>
				<CardList monsters={filteredMonsters} />
			</div>
		)
	}
}

export default App
