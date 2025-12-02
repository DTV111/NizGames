console.log("System Online")
function changegame(name, desc, url){
    gurl = document.getElementById("ParentScreen")
    gdesc = document.getElementById("GameDesc")
    gname = document.getElementById("GameTitle")

    gurl.src = url
    gname.innerHTML = name
    gdesc.innerHTML = desc
}