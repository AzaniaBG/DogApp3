'use strict'
function getDogImages(breed) {
    
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`).then(response =>{
        if(response.ok) {
            return response.json()
        }
        throw new Error(response.statusText);
    }).then(responseJson => displayImages(responseJson.message)).catch(error => alert('OOPSIE POOPSIE! Please type your request in the following format...'));

}


function displayImages(images) {
    $(".results-img").replaceWith(`<img src="${images}" class="results-img">`);
    $(".results").removeClass("hidden");
}

function watchForm() {
    $('form').submit(event =>{
        event.preventDefault();
        let inputValue = $("input").val();
        if(inputValue.indexOf(" ") > -1) {
            inputValue.split(" ");
            inputValue = inputValue.replace(" ", "-");
            console.log(`inputValue is ${inputValue}`)
        }
        console.log(`inputValue is ${inputValue}`)
        getDogImages(inputValue);  
    });
}

function handleDogPicApp() {
    console.log(`handleDogPicApp ran`);
    watchForm();
}

$(handleDogPicApp);