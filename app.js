/* Step à réaliser pour les cookies
* 1) Récupérer les inputs
* 2) Ajouter les évènements correspondant pour le formulaire 
* 3) Créer un objet cookie contenant les valeurs des champs input + une date d'expiration
* 
*/

const inputName = document.querySelectorAll('input')[0];
console.log(inputName)
const inputValue =document.querySelectorAll('input')[1];
console.log(inputValue)
const form = document.querySelector('form');

function setCookie(name, value , exdays)
{
    const date =new Date();
    date.setTime(date.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
    
}
form.addEventListener('submit' , function(e){
    e.preventDefault();
    const nameValue = inputName.value;
    const associatedValue = inputValue.value;
    setCookie(nameValue, associatedValue, 7);
    inputName.value = '';
    inputValue.value = '';
})

function getCookies(){
    let outPutName = document.getElementById('name');
    if (inputValue.value != ""){
    outPutName.innerHTML = inputName.value;
    }
    let outPutValue = document.getElementById('value');
    if (inputValue.value!= "") {
        outPutValue.innerHTML = inputValue.value; 
    }
    if(expire.value!="" && expire.value>currentDate){
    let outPutExpire = document.getElementById('expire');
    outPutExpire.innerHTML = expire.value;
    }

}
let obj_cookie = new Object();