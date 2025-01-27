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



// seleziono l'elemento di Output dal DOM

const contenitore_grande = document.querySelector ('.contenitore_grande');
// console.log(contenitore_grande);


const bottone = document.querySelector('#button');
// console.log(bottone);




const overlay = document.querySelector('.overlay');


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
        // console.log(id, title, date, url);
        
        
        
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
    
    `
    };
    
    
    
    
    
    
    // creo un evento in cui al momento del click della foto si apre l'overlay con al suo interno l'immagine grande in questione
    
    // salvo in una costante l'elemento di output
    const imgPolaroid = document.querySelectorAll('.img_polaroid');

    // creo un ciclo in modo da raggiungere l'elemento iesimo all'interno della costante imgPolaroid
    for(let i = 0; i < imgPolaroid.length; i++){
        let imgIesima = imgPolaroid[i];
    // console.log(imgIesima);


    imgIesima.addEventListener('click', () => {
        // se all'interno della node list (imgIesima) contiene la classe (img_polaroid)

        if(imgIesima.classList.contains('img_polaroid')){

            //mi salvo il valore src in una costante

            const imgSrc = imgIesima.src;
            // console.log(imgSrc);
            

            //  seleziono l'immgine che si trova all'interno del contenitore overlay
            const overlayImg = overlay.querySelector('img');

            // console.log(overlayImg);


            // dopodichè trascrivo il src" con l'immagine cliccata
            overlayImg.src = imgSrc;
     
        }
    //  rimuovo la classe display none

        overlay.classList.remove('d_none');
    });
    
    };
    
    
    // dopodicè apro un altro evento relativo al bottone in cui al momento del click (sul bottone) si chiude l'overlay e l'img    
   
    
    bottone.addEventListener('click', () => {
        
        overlay.classList.add('d_none');
    });

   
});
