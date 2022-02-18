import React from 'react'
import './card-list.styles.css'
import { Card } from '../Card/card.component'

export const CardList = ({ monsters }) => {
	return (
		<div className='card-list'>
			{monsters.map((monster) => (
                <Card key={monster.id} monster={monster} />
			))}
		</div>
	)
}
