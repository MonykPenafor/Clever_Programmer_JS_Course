//INDEX.HTML


//<body> 
//<h2 id="title">lets gour</h2>
//</body>

console.log("hello there") //you can see on the console when runnig the index html

let title = document.getElementById('title')
console.log(title) // <h2 id="title">lets gour</h2> in the console
console.log('before: ', title.innerText) // lets gour

title.innerText = 'NEW LETS GO!'
console.log('after: ', title.innerText) 

title.innerHTML = '<h3> put a h3 inside the h2 </h3>' // <h2 id="title"><h3> changing the tag </h3></h2>


//AFTER PUTTING THE H2 INSIDE A DIV WITH ID=TITLE:

title.innerHTML = '<h3> put a h3 inside the DIV </h3>' //<div id="title"><h3> put a h3 inside the h2 </h3></div>

let message = 'hey guys, this is my message, put this BETWEEN BACK TIPS(`)'
title.innerHTML = `<p> testing: ${message} </p>` //<div id="title"><h3> put a h3 inside the h2 </h3></div>

title.style.color = "blue" // gives a style to the element


