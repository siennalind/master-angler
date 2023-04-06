function Item (props) {
    return (
        <li>
            <p>{props.name}</p>
            <p>{props.type}</p>
            <p>{props.zone}</p>
            <p>{props.rarity}</p>
        </li>
    )
}

export default Item