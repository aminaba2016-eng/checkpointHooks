import React from 'react'
import ReactStars from "react-rating-stars-component";


function NameSearch({filterText,filterRate}) {
	return (
		<div className='fil'>
			<input onChange={(e)=>filterText(e.target.value)}/>
			<ReactStars
    count={5}
    onChange={(newRating)=>filterRate(newRating)}
    size={24}
    activeColor="#ffd700"
  />

		</div>
	)
}

export default NameSearch
