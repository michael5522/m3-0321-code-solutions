import React from 'react';
import ReactDOM from 'react-dom';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

function ListPokemon(props) {
  const xd = props.pokemon;

  const listPoke = xd.map(x =>
    <li key={x.number}>{x.name}</li>
  );
  return (
    <ul>{listPoke}</ul>
  );
}

ReactDOM.render(
  < ListPokemon pokemon={pokedex}/>,
  document.getElementById('root')
);
