let req = {}
let query = ""
let data5 = []
let pw = "Bailey10"
let netID = "jad64177"
let event = []
let database = "375groupb4"

test.onshow=function(){
    // set height property of textarea control 
    // - special code
    Textarea1.style.height = "100px"
}

Button1.onclick=function(){
     query = "SELECT * FROM calendar"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + database + "&query=" + query)

    if (req.status == 200) {
        data5 = JSON.parse(req.responseText)
        console.log(`the results are : \n ${data5}`)
        if (data5.length == 0)
            console.log("There are no customers in the database.")
        else {
            let message = ""
            for (i = 0; i < data5.length; i++)
                message = message + data5[i] [5]
                Textarea1.value = message
        }

    }
}
