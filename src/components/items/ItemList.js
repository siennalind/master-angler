import DUMMY_DATA from "../DUMMY_DATA"
import Item from "./Item"

function ItemList (props) {
    const data = DUMMY_DATA

    return (
        <ul>
            {data.map(item => 
            <Item 
                name={item.name}
                type={item.type}
                zone={item.zone}
                rarity={item.rarity}
                achievements={item.achievements.map(achievement => 
                <p>{achievement}</p>)}
            />)}
        </ul>
    )
}

export default ItemList