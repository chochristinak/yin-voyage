import RetreatListItem from '../../components/RetreatsListItem/RetreatsListItem'
import * as retreatsAPI from '../../utilities/retreats-api'
import { useState } from 'react'

export default function RetreatsListPage(){
    const [retreats, setRetreats] = useState([])

    return (
        <>
        <h1>Retreats List Page</h1>
        <RetreatListItem />
        </>
    )

}