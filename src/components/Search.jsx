import { useState } from "react";
import { UseGlobalContext } from "../context";

const Search = () => {
    const [text, setText] = useState('');
    const { setSearchTerm, fetchRandomMeal } = UseGlobalContext();

    const handlechange = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text) {
            setSearchTerm(text)
        }
    };

    const handleRandomMeal = () => {
          setSearchTerm(text)
          setText('')
          fetchRandomMeal()
    }

    return <header className="search-container">
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="type favourite meal" value={text} onChange={handlechange} className="form-input" />
            <button type="submit" className="btn">Search</button>
             <button type="button" className="btn btn-hipster" onClick={handleRandomMeal}>Surprise me!</button>
        </form>
    </header>
}
 
export default Search;