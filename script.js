async function foo(){
    let response =await fetch("https://pokeapi.co/api/v2/ability/?limit=20&offset=20");
    let result = await response.json();
    console.log(result);
}
foo();
let pokemons = result.filter(function(name){
    return name;
})
console.log(pokemons);