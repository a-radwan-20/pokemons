const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const container = document.querySelector('#container');

for (let i = 1; i < 899; i++){
  let pokemon = document.createElement('div');
  let label = document.createElement('span');
  let newImage = document.createElement('img');
  
  pokemon.classList.add('pokemon')
  label.innerText = `${i}`;
  
  
  newImage.src = `${baseUrl}${i}.png`;
  
  pokemon.appendChild(newImage);
  pokemon.appendChild(label);
  
  container.appendChild(pokemon);
}
