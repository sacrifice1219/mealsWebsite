import { UseGlobalContext } from "../context";

const Favourites = () => {

    const { favourites,selectMeal, removeFromFavourites } = UseGlobalContext();

    return <section className="favorites">
        <div className="favorites-content">
            <h5>Favourites</h5>
            <div className="favorites-container">
                {favourites.map((item) => {
                    const { idMeal, strMealThumb: image } = item;

                    return <div key={idMeal} className="favorite-item">
                        <img src={image} alt={image} className="favorites-img img" onClick={() => selectMeal(idMeal, true)} />
                        <button className="remove-btn" onClick={() => removeFromFavourites(idMeal)}> remove</button>
                    </div>
                })}
            </div>
        </div>
    </section>
}
 
export default Favourites;