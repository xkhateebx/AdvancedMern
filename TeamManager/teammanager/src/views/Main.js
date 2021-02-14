import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PlayerForm from '../components/PlayerForm';
import PlayerList from '../components/PlayerList';
import { navigate } from '@reach/router';
export default () => {
    const [player, setPlayer] = useState([]);
    const [position, setPosition] = useState([]);

    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
            .then(res =>{ 
                setPlayer(res.data)
                setLoaded(true);
            });
    }, [])
    const removeFromDom = playerId => {
        setPlayer(player.filter(player => player._id != playerId));
    }
    const createPlayer = player => {
        axios.post('http://localhost:8000/api/player', player)
            .then(res=>{
                setPlayer([player, res.data]);
            })
    }
    return (
        <div>
           <PlayerForm onSubmitProp={createPlayer} initialPlayer="" initialPosition="" />
           <hr/>
        </div>
    )
}
