import React, { useEffect, useState } from 'react'
import Table from '@material-ui/core/Table';
import axios from 'axios';
import DeleteButton from './DeleteButton';
import { Link } from '@reach/router';

import { TableBody, TableRow ,TableHead, TableCell, TableContainer, TableSortLabel, TableFooter } from '@material-ui/core';
export default props => {
    const [player, setPlayer] = useState([]);
    const [position, setPosition] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
            .then(res => setPlayer(res.data));
            
    }, [])
    const removeFromDom = playerId => {
        setPlayer(player.filter(player => player._id != playerId))
    }
    return (
        <div>
            <h2>
            <Link to={"/player/"}>
    Add Another Player
</Link>
</h2>
<Table>
    <TableCell> <h2>Team Name</h2></TableCell>
    <TableCell><h2>Prefered Position</h2></TableCell>
    <TableCell><h2>Action</h2></TableCell>

    </Table>
  {player.map((player, idx) => {
                return (<p key={idx}>
      <Table>
    <TableCell>{player.player}</TableCell>
    <TableCell>{player.position}</TableCell>
    
    <DeleteButton playerId={player._id} successCallback={()=>removeFromDom(player._id)}/>
    
    </Table>
  
                    </p>
                )
            })}
        </div>
    )
}
