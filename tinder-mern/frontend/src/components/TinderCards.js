import { useState } from "react"
import TinderCard from 'react-tinder-card'
import './TinderCards.css'

const TinderCards = () => {
    const [people, setPeople] = useState([
        { name: "Man 22", imgUrl: "https://randomuser.me/api/portraits/men/22.jpg" },
        { name: "Man 26", imgUrl: "https://randomuser.me/api/portraits/men/26.jpg" },
        { name: "Woman 22", imgUrl: "https://randomuser.me/api/portraits/women/22.jpg" },
        { name: "Woman 26", imgUrl: "https://randomuser.me/api/portraits/women/26.jpg" },
    ])

    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
    }

    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
    }

    return (
        <div className="tinderCards">
            <div className="tinderCards__container">
                {people.map(person => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        onSwipe={onSwipe}
                        onCardLeftScreen={() => onCardLeftScreen('fooBar')}
                        preventSwipe={['up', 'down']}
                    >
                        <div style={{ backgroundImage: `url(${person.imgUrl})` }} className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}
export default TinderCards