import React from 'react'
import ReactStars from "react-rating-stars-component";


function NameSearch() {
	return (
		<div>
			<input/>
			<ReactStars
    count={5}
    // onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
  />

		</div>
	)
}

export default NameSearch
