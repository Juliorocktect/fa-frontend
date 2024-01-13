import React from 'react'
import "./SearchDesk.css"
import NavbarDesk from "../navbar/NavbarDesk"

function SearchDesk({query,setSearch}) {
  return (
    <><div className="search-desk"><NavbarDesk searchQuery={query} setSearch={setSearch}/></div></>
  )
}

export default SearchDesk