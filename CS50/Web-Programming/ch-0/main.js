
let cntr = 0;
window.addEventListener('load', () => {
    console.log(document.getElementById('h1'))
    document.title = "Hello World!" // changes the webpage ttle, but the doc.html will be unchanged.    
    //document.getElementById('h1').innerHTML += " -> Javasript Session"
    document.querySelectorAll('p').forEach((elt)=>{
        elt.innerHTML += " -> js effects"
    })
    document.querySelector('p').innerHTML += " -> js effects"
    document.getElementById('b1').addEventListener('click', () => {
        //document.body.innerHTML = "" // This will not work because document.body is an html elemnt type object, not a text which can be set like this
        cntr += 1
        document.getElementById('b1').innerHTML = cntr.toString()
    })

})

console.log("typeof(document): " + typeof (document))
console.log(document)
console.log(document.all)
console.log(document.body)
console.log(document.URL)
console.log(document.head)
document.all[8].innerHTML += ":*:"
console.log(document.head.children)
console.log(document.images)
console.log(document)
