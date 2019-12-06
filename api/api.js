$(document).ready(function(){
    requestAPI();
})

// reuest api
var requestAPI = () => {
    $.ajax({
    dataType: 'json',
    url: getUrl(),
    success:(data) => getRecipe(data),
    error: () => getError(),
    });
}

// get url
var getUrl = () => {
    var url = "https://raw.githubusercontent.com/ronanogor/jquery-project/master/database-v1.json";
       return url;
}
// get Error
var getError = () => console.log("Error");

//get getRecipe
var getRecipe = (myData) => {
    console.log(myData);
    myData.recipes.forEach(element => {
        // get recipe : element
        getIngredient(element.ingredients); 
    });
}
// get ingredient
    var getIngredient = (ing) => {
    ing.forEach(item => {
        conputeHTML(item);
    })
}

// computer to html
var conputeHTML = (display) => {
    var compute = "";
    compute +=  `
        <tr>
            <td><img src="${display.iconUrl}" width="100"></td>
            <td>${display.name}</td>
            <td>${display.quantity}</td>
            <td>${display.unit[0]}</td>
        </tr>
    `;
    printOut(compute);
}
// print out
printOut = (out) => {
    $('#ingredient').append(out);
} 