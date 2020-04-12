import React from "react"

import "./search-box.styles.css"

export const SearchBox = ({ placeholder, handleChange }) => {
 return (
  <div>
   <input
    className="search"
    type="serch"
    placeholder={placeholder}
    onChange={handleChange}
   />
  </div>
 )
}