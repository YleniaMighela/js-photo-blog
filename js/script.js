// Milestone 2
// Utilizzando Postman, testiamo una chiamata a questo endpoint:
// https://lanciweb.github.io/demo/api/pictures/
// Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.
// Milestone 3
// // Inseriamo il JavaScript ed effettuiamo una chiamata AJAX all’API, sfruttando la risposta per generare dinamicamente in pagina una serie di foto!



// MILESTONE 2 
// attraverso l'utilizzo di postman verifico che all'interno dell'API è contenuta un array di oggetti




// MILESTONE 3 



// seleziono l'elemento di Output dal DOM

const contenitore_grande = document.querySelector ('.contenitore_grande');
// console.log(contenitore_grande);




// Axios(libreria) ci permette di fare una chiamata AJAX
axios.get('https://lanciweb.github.io/demo/api/pictures/')

.then(risposta =>{
    // da questo console log riesco a visualiazzare l'array di oggetti e le sue proprietà
    // console.log(risposta);
    
    
    // per capire come è composta l'array, creo una costante cui valore è dato dalla funzione e dall'estrapolazione della proprietà in questione
    
    const arrayData = risposta.data;
    // console.log(arrayData);
    
    
    // una volta estrapolato l'array,
    // attraverso un ciclo, tiro fuori ogni elemento
    for(let i = 0; i < arrayData.length; i++){
        let dataIesimo = arrayData[i];
        console.log(dataIesimo);
        
        
        
        // una volta visualizzato come è composto l'array, per prendere le proprietà che mi servono, la destrutturo salvandomi le proprietà in una costante 
        
        const { title, date, url} = dataIesimo;
        // console.log(id, title, date, url);
        
        

        // selezionando l'elemento preso dal Dom e assegnandogli il metodo INNERHTML,faccio sì che passo l'intera struttura dell'html, con l'utilizzo del += si aggiungono i contenitori polaroid finché il ciclo continua a funzionare all'interno dell'array
        contenitore_grande.innerHTML += 
        `
    
         <div class="contenitore_polaroid">
            
                
                <img src=${url}>
            
                <div class="didascalia">
                    <p class="date">${date}</p>
                    <h2 class="font">${title.toUpperCase()}</h2>
                </div>
                
                <div class="puntina_rossa">
                    <img id="pin" src="img/pin.svg" alt="">
                 </div>
                 
           </div>
    `

        
    };
    
   
});
