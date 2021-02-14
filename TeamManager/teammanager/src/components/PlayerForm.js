import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import { Button } from '@material-ui/core';
export default props => {
    const { initialPlayer , initialPosition , onSubmitProp } = props;
    const [player, setPlayer] = useState(initialPlayer);
    const [position, setPosition] = useState(initialPosition);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({player , position});

    }
        
    return (
        <form onSubmit={onSubmitHandler}>
<h2>
<Link to={"/players/"}>
    List
</Link>

|

<Link to={"/player/"}>
    Add Player
</Link>
</h2>
            <h1>Add Player</h1>
            <p>
                <label>Player Name</label><br />
                <input 
                    type="text" 
                    player="player" value={player} 
                    onChange={(e) => { setPlayer(e.target.value) }} />
            </p>
            <p>
                <label>Preferred Position</label><br />
                <input 
                    type="text" 
                    position="position" value={position} 
                    onChange={(e) => { setPosition(e.target.value) }} />
            </p>
            <Button color="secondary" variant="contained" type="submit" >Add</Button>


        </form>
    )
}
