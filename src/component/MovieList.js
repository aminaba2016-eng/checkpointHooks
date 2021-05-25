import React from 'react'
import MovieCard from './MovieCard'
import NameSearch from './NameSearch'

function MovieList({films}) {
	const [state, setstate] = useState(initialState)
	const [state, setstate] = useState(initialState)
	return (
		<div>
			<NameSearch/>

				<div className='container'>
			{films.map(el =><MovieCard film={el}/>)}
		</div>

		</div>
	)
}

export default MovieList

