function Item (props) {
    return (
        <li>
            <p>{props.name}</p>
            <p>Type: {props.type}</p>
            <p>Zone: {props.zone}</p>
            <p>Rarity: {props.rarity}</p>
            <p>Achievements: {props.achievements}</p>
        </li>
    )
}

export default Item