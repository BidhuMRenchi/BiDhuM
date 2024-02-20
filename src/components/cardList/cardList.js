import React from "react";
import './cardList.css';

const CardList = (props) => {
  const data = props.data;
  return (
    <>
      <div className="card-list">
        {data.length > 0 && (
          data.map((data) => (
            <div className="card-container" key={data.id}>
                <img alt={`monster ${data.name}`} src={`https://robohash.org/${data.id}?set=set4&size=180x180`}/>
                <h2>{data.name}</h2>
                <h2>{data.email}</h2>
            </div>
            ))
        )}
      </div>
    </>
  );
};

export default CardList;
