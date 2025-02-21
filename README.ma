Descrizione

Questa applicazione permette di visualizzare informazioni relative ad aeroporti, voli e compagnie aeree. Utilizza un frontend sviluppato in React.js e un backend in Flask, con dati caricati da un file JSON.

Funzionalità

Lista Aeroporti: Mostra tutti gli aeroporti disponibili.

Voli oltre 600 minuti: Visualizza i voli con durata superiore a 600 minuti.

Voli con durata superiore alla media della compagnia: Filtra e mostra i voli con durata superiore alla media della compagnia di appartenenza.

Città servite dalla compagnia Apitalia: Elenca le città in cui opera la compagnia Apitalia.

Compagnie aeree ordinate per anno di fondazione: Mostra le compagnie aeree ordinate per anno di fondazio

AVVIARE APPLICAZIONE

si devono aprire due termnali uno per  per il server Chiamato SerCielo che per mandarlo in esecuzione Si deve scrivere sul terminale python3 SerCielo
invece per Mandare in esecuzione React si deve vedere tramite nvm -v e npm -v le versioni e se non sono giuste si deve usare il comando nvm install node poi dopo questo passaggio si puo lanciare il comando che avvia il react npm run dev 

API Endpoints
metodo       end point         descrizione
get          /query/1          Ottieni la lista degli aeroporti

get          /query/2          Voli con durata superiore alla media della compagnia

get          /query/3          Città servite dalla compagnia Apitalia

get         /query/4           Voli con durata maggiore di 600 minuti

get         /query/5           Compagnie aeree ordinate per anno di fondazione 


Tecnologie Utilizate 

Frontend: React.js, React Router, Axios

Backend: Flask, Flask-CORS

Database: JSON (simulazione di un database)