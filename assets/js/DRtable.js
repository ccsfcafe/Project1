//Precondition: menuItems: is an m-array of strings which represent the items on the menu
//              dietaryRestrictions: is an n-array of strings which represent the range of possible dietary restrictions
//              whichWhich: is an n*m row major array of booleans telling which menu item has which dietaryRestriction
function DRTable (menuItems, dietaryRestrictions, whichWhich) {
    var container = document.createElement("section");
    container.className = "container";
    for (var i = 0; i < menuItems.length; i++) {
        for (var j = 0; j < dietaryRestrictions.length; j++) {
            var idx = i + j;
            var elem = document.createElement("section");

            switch (whichWhich[idx]) {
                case true :
                    elem.className = "true";
                case false :
                    elem.className = "false";
            }
            elem.style.top = 20*i;
            elem.style.left = 20*j;
            container.appendChild(elem);
        }
    }
    document.body.appendChild(container);

}



