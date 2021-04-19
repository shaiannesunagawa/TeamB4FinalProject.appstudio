hmbrNav.onclick=function(s){
  if (typeof(s) == "object") { // do nothing - they just clicked on the control
       return
    } else {
       switch(s) {
            case "New User":
                ChangeForm(savesData)
                break
            case "Yelp":
                ChangeForm(Yelp)
                break
            case "Map":
                ChangeForm(CUMap)
                break
            case "Event Calendar":
                ChangeForm(interactiveCalander)
                break
       } 
   } 
}
