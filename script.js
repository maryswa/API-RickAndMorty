let contador = 1;

const inc = ()=>{
    contador +=1;
   // console.log(contador);
   fetchPersonagem(contador);
}

const dec = ()=>{
   if(contador > 1){
    contador -=1;
    //console.log(contador);
    fetchPersonagem(contador);
   } 
}

const fetchPersonagem =  async (contador)=>{
   let url = "https://rickandmortyapi.com/api/character/" + contador;
   const api = await fetch(url);
   const data = await api.json();
   console.log(data);
   ImageRES = document.getElementById("imagem");
   ImageRES.src = data.image;
   nomeRES = document.getElementById('nome');
   nomeRES.innerText = data.name;
   descricaoRES = document.getElementById('descricao');
   descricaoRES.innerText = data.status + " " 
   + data.species + " " 
   + data.type + " " 
   + data.gender + " Planeta de Origem  " 
   + data.origin.name + "Episódio: " 
}

fetchPersonagem(contador);
