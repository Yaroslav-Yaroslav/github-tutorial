export const getPokemonCard = ({
  name,
  weight,
  height,
  sprites,
}) => `<div class="card">
  <div class="card-img-top"><img src="${sprites.front_default}" alt="{name}"></div >
    <div class="card-body">
      <h2 class="card-title">Name:${name} </h2>
      <p class="card-text">Weight:${weight} </p>
      <p class="card-text">Height:${height} </p>
    </div>
</div>`;
