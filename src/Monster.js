import "./Monster.css";
import React, { useEffect, useState } from "react";
import CardList from "./components/cardList/cardList";
import SearchBox from "./components/searchBox/searchBox";

function Monster() {
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  const fetchMonsters = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMonsters(data);
        setFilteredMonsters(data);
      });
  };

  const filterMonsters = (e) => {
    const searchString = e.toLocaleLowerCase();
    const filterMonster = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchString);
    });
    setFilteredMonsters(filterMonster);
  };

  useEffect(() => {
    fetchMonsters();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox filterMon = {filterMonsters} placeholder = {'search Monsters'} className={'searchBox'}/>
        <CardList data = {filteredMonsters} />
      </header>
    </div>
  );
}

export default Monster;
