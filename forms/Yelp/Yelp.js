let searchItem = drpCategorySearch.text
let categories = []
let myToken = 'AUtEe-t6YW4wWTIu5HueBA49KF3rdHceN7-19sWdPRZUrpmk7XGRzRbPjHYdS6cOzItchcSt1Q5vtOpm-8p_YyogQDvnLqN2tTL4HbhuUrHvC-0Gi4s8LvZJG3lrYHYx'

// 1. *** use your own url copied from Postman ****
let requestURL = "https://api.yelp.com/v3/businesses/search?term="+ searchItem +"&radius=8000&latitude=41.265331&longitude=-95.949364"

function onXHRLoad() {
    let message = ""
    
    // 'this' is another name for the object returned from the API call
    let apiData = JSON.parse(this.responseText)
    
    for (i = 0; i <= apiData.businesses.length-1; i++) {
        console.log(`${apiData.businesses[i].name}`)
        message = message + apiData.businesses[i].name + "\n"
    }
    
    // 2. *** put your textarea control name here ****
    txtaRestaurants.value = message
    
    // if want to add to database call a function here that does that
    // addToDatabase()
}

function callAPI(URL) {
    var xhttp = new XMLHttpRequest();
    
    // if you need cors (you'll get a cors error if you don't have it and you need it)
    // use this code to add the cors code to your url 
    xhttp.open('GET', 'https://cors.bridged.cc/' + requestURL)
    
    // if you DON'T need cors use this code:
    //xhttp.open('GET',URL)
    
    /* Headers */
    // if you need to set the returned data type, use this line of code: 
    //xhttp.setRequestHeader('Content-Type', 'application/json')
    
    // if you need authorization token (stored in myToken) use this line of code: 
    xhttp.setRequestHeader('Authorization', 'Bearer ' + myToken)
    
    // if you need a key and it's not in the url use code in one of the following
    // examples (think of headers as parameters)
    // or just use the Postman url which has all the parameters already added like I did here. 
    
    
    // Here are headers you might need: 
    /*
    xhttp.setRequestHeader('key','AIzaSyCE-pjULPU_Gp5Qf0qL39tVsdJBX55J0cY')
    xhttp.setRequestHeader('location','41.276900,-95.942310')
    xhttp.setRequestHeader('rankby','distance')
    xhttp.setRequestHeader('type','restaurant')
    */

    // make the API request
    xhttp.addEventListener('load', onXHRLoad)
    xhttp.send()
}
/*
// 3. *** add a new button onclick event and put the callAPI code into it ***
btnSeeThai.onclick=function(){
    // call the code that will make the API call, then process what comes back
    callAPI(requestURL)
}
*/
Yelp.onshow=function(){
    drpCategorySearch.clear()   
    callAPI(requestURL)
    let apiData = JSON.parse(this.responseText)
    results = JSON.parse(req.responseText)  
    for (i = 0; i < apiData.businesses[i].categories; i++)
            drpCategorySearch.addItem(results[i])
    }
