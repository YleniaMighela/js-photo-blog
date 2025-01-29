// Milestone 2
// Utilizzando Postman, testiamo una chiamata a questo endpoint:
// https://lanciweb.github.io/demo/api/pictures/
// Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.
// Milestone 3
// // Inseriamo il JavaScript ed effettuiamo una chiamata AJAX all’API, sfruttando la risposta per generare dinamicamente in pagina una serie di foto!

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Milestone 2
// Facciamo sparire l’overlay con l’aiuto di una classe CSS che imposti il display: none .
// Dopodiché facciamo sì che cliccando una qualunque foto. L’overlay ricompaia.
// Cliccando invece il button di chiusura, l’overlay scompare nuovamente
// Milestone 3
// Inseriamo il pezzo di logica finale: quando una foto viene cliccata, dobbiamo fare in modo che sia proprio quella foto a essere mostrata all’interno dell’overlay.






// MILESTONE 2 
// attraverso l'utilizzo di postman verifico che all'interno dell'API è contenuta un array di oggetti




// MILESTONE 3 



// seleziono l'elemento di Output dal DOM, che mi servirà da contenitore per la struttura dell' HTML

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
        
        const {title, date, url} = dataIesimo;
        // console.log( title, date, url);
        
        
        
        // selezionando l'elemento preso dal Dom e assegnandogli il metodo INNERHTML,faccio sì che passo l'intera struttura dell'html, con l'utilizzo del += si aggiungono i contenitori polaroid finché il ciclo continua a funzionare all'interno dell'array
        
        contenitore_grande.innerHTML += 
        `
    
                 <div class="contenitore_polaroid">
                
                        <!-- foto -->
                        <img src=${url} alt="" class="img_polaroid">
                        
                        <!-- descrizione della foto -->
                        <div class="didascalia">
                            <p class="date">${date}</p>
                            <h2 class="font">${title.toUpperCase()}</h2>
                        </div>
                
                        <!-- puntina rossa -->
                        <div class="puntina_rossa">
                            <img id="pin" src="img/pin.svg" alt="">
                        </div>
        
                 <!-- </div> -->
    
    `
    };
    
    
    
    
    
    
    // creo un evento in cui al momento del click della foto si apre l'overlay con al suo interno l'immagine grande in questione
    
    
    // selezione gli elementi di output che mi servono per estrapolare le immagini
    const imgPolaroid = document.querySelectorAll('.img_polaroid');
    
    const overlay = document.querySelector('.overlay');
    
    
    
    // creo un ciclo in modo da raggiungere l'elemento iesimo dell'array imgPolaroid
    for(let i = 0; i < imgPolaroid.length; i++){
        let imgIesima = imgPolaroid[i];
        // console.log(imgIesima);
        
        // inizializzo una variabile che mi servirà all'interno della condizione
        let imgSrc;


        // trovata la singola immagine genero un evento click
        imgIesima.addEventListener('click', () => {
            
            //creo un condizione in cui se IMGSRC è uguale al percorso dell'elementoIesimo immagine
            if (imgSrc = imgIesima.src){

                // allora selezionando l'elemento preso dal Dom e assegnandogli il metodo INNERHTML,faccio sì che passo l'intera struttura dell'html. Con l'utilizzo del = mi andrà a trascrivere l'html con l' immagine finché il ciclo continua a funzionare all'interno dell'array
                
                overlay.innerHTML = 
                
                `
                    <div class="contenitore_click">
                        <button id="button">Chiudi</button>
                        <img src=${imgSrc} alt="" class="immagine_aperta">
                    </div> 
                                
  
  
                `;
                
                //  dopdichè rimuovo la classe display none
                
                overlay.classList.remove('d_none');
            };
            
            
            
            
            
            // dopodicè creo un altro evento relativo al bottone, prendendomi l'emento di Output dal DOM,  in cui al momento del click (sul bottone) si chiude l'overlay e l'img    
            
            const bottone = document.querySelector('#button');
            
            bottone.addEventListener('click', () => {
                
                overlay.classList.add('d_none');
            });
            
            
            
        });   //  FINE ADDEVENET LISTENER
        
        
        
    }; // FINE FOR
    
    
    
    
    
    
    
});   //  FINE THEN


