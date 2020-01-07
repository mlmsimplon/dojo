console.log("test");

let img = document.querySelector("main > section > aside > div").onmouseenter = function(){
    this.style.borderRadius = "0%";
    };
    document.querySelector("main > section > aside > div").onmouseleave = function(){
    this.style.borderRadius = "50%";
    };



    // let fleche = document.querySelector("main > section > section > article > header > h2").className("picto")
    // console.log(fleche);
    
    function toggle(e) {
        let menu = document.querySelector("main > section > section > article > div");
        
    if (menu.style.visibility = "hidden") {
        menu.style.visibility = "visible";
        menu.style.height = "auto";
    } else {
        menu.style.visibility = "hidden";
        menu.style.height = "0";
    }
    }
       toggle();

    

        
    
        

    // let fleche = document.getElementsByClassName("picto");
    // fleche.addEventListener('onclick', function() {
    //     if (menu.style.visibility == "hidden") {
    //         menu.style.visibility = "visible";
    //         menu.style.height = "100px";
    //     } else {
    //         menu.style.visibility = "hidden";
    //         menu.style.height = "0";
    //     }
    // })
   
    // }




// fleche.addEventListener('click', function() {
//     let menu = document.getElementById("un");
//     menu.style.visibility = "visible";
// })


