function Item (props) {
    return (
        <li>
            <p>{props.name}</p>
            <p>Type: {props.type}</p>
            <p>Zone: {props.zone}</p>
            <p>Rarity: {props.rarity}</p>
            <ul>Achievements: {props.achievements}</ul>
        </li>
    )
}

export default Item