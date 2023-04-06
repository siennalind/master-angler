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
            />)}
        </ul>
    )
}

export default ItemList