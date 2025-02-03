const log = (msg) => console.log(msg);



// Användaren startar vid ett formulär och ni skall formulärvalidera följande
// --- Tränarens namn måste vara mellan 5 och 10 tecken långt
// --- Tränaren måste vara mellan 10 och 15 år gammal
// --- Tränaren måste ha bockat i om hen är en pojke eller en flicka

let oGameData = {};
log(oGameData);

function initGlobalObject() {
    oGameData.trainerName = document.querySelector(`#nick`);
    oGameData.trainerAge = Parseint(document.querySelector(`#age`));

    oGameData.timeRef = document.querySelector(`#errorMsg`);
    oGameData.querySelector('#form');
}   

function validateForm(event) {
    log('validateForm()'); 

    oGameData.trainerName = document.querySelector (`#nick`).value;
    oGameData.trainerAge = document.querySelector (`#age`).value;

    // ID: nick i en variabel? global, hente den her inne som der ^

    try {
        if(oGameData.trainerName.length < 5) {
            alert (`Your IRL name cannot possibly be that short... change name.`);
            
        } else if (oGameData.trainerName.length > 10) {
            alert (`Seriously? that name is way too long! Get a shorter one.`);
        }


        if(oGameData.trainerAge.value < 10) {
            alert (`You're too young for this... wait a few years and try again.`);
            
        } else if (oGameData.trainerAge.value > 15) {
            alert (`You are way too old for Pokémon! (for legal reasons... that was a joke)`);
        }
        

        document.querySelector('#errorMsg').textContent = ''; 

    } catch (error) {
        log(error.message);
        document.querySelector('#errorMsg').textContent = error.message;
        event.preventDefault();
    }
}