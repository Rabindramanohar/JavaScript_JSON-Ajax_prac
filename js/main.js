var pageCounter = 1;
var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");


btn.addEventListener('click', function() {
    var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-'+pageCounter+'.json');
ourRequest.onload = function() {
    if (ourRequest.status >= 200  && ourRequest.status < 400) {
        var ourData = JSON.parse(ourRequest.responseText);
        //console.log(outData[0]);
        renderHTML(ourData);
    } else {
        console.log("We connected to server, but it returned error");
    }
}

ourRequest.onerror = function() {
    console.log("connection error");
}
ourRequest.send();
pageCounter++;
if (pageCounter > 3) {
    btn.classList.add("hide")
}
});

function renderHTML(data) {
    var htmlString = "";

    for (let index = 0; index < data.length; index++) {
        htmlString += `<p> ${data[index].name} is a ${data[index].species} that likes to eat `

        for (let i = 0; i < data[index].foods.likes.length; i++) {
            if (i == 0) {
                 htmlString += data[index].foods.likes[i];
            }else {
                htmlString += ` and ${data[index].foods.likes[i]}`;
            }
          /*   htmlString += ` and dislikes  `;
            for (let i = 0; i < data[index].foods.dislikes.length; i++) {
                if (i == 0) {
                     htmlString += data[index].foods.dislikes[i];
                }else {
                    htmlString += ` and ${data[index].foods.dislikes[i]}`;
                } 
            }*/
            htmlString += `.</p>`;
        }
    }
    animalContainer.insertAdjacentHTML('beforeend', htmlString); 
} 