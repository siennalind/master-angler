import DUMMY_DATA from "../DUMMY_DATA"
import Item from "./Item"

function ItemList () {
    const data = DUMMY_DATA

    return (
        <ul>
            {data.map(item => 
            <Item 
                key={item.name}
                name={item.name}
                type={item.type}
                zone={item.zone}
                rarity={item.rarity}
                achievements={item.achievements.map(achievement => 
                <li key={achievement}>{achievement}</li>)}
            />)}
        </ul>
    )
}

export default ItemList