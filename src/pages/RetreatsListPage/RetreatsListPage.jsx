import RetreatListItem from "../../components/RetreatsListItem/RetreatsListItem";
import * as retreatsAPI from "../../utilities/retreats-api";
import { useState, useEffect } from "react";
import './RetreatsListPage.css'


export default function RetreatsListPage() {
  const [retreats, showRetreats] = useState(true)
  const [retreatListItems, setRetreatListItems] = useState([]);

  useEffect(function() {
  async function getRetreats() {
    const retreats = await retreatsAPI.getAll();
    setRetreatListItems(retreats)
  } 
  getRetreats();
},[])


  return (
    <>
      <h1>Retreats List Page</h1>
      <div className="Retreats-list-wrapper">
        {retreatListItems.map((retreat, index) => (
          <RetreatListItem key={index} retreat={retreat} />
        ))}
      </div>
    </>
  );
}