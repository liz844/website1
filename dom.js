// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.domain);
// console.log(document.title);
// console.log(document.all);

// console.log(phones);

var button = document.getElementById('button').addEventListener('click', buttonClick);

function buttonClick(e){
    console.log('Button clicked');
    console.log(e);
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.classList);
    var output = document.getElementById('output');
    output.innerHTML = '<h1>'+e.target.id+'</h1>';

console.log(e.type);
console.log(e.clientX);
console.log(e.clientY);

console.log(e.offsetX);
console.log(e.offsetY);

console.log(e.altKey);
console.log(e.ctrlKey);
console.log(e.shiftKey);
}

var button = document.getElementById('button');


button.addEventListener('click', runEvent);
button.addEventListener('dblclick', runEvent);
button.addEventListener('mousedown', runEvent);
button.addEventListener('mouseup', runEvent);



function runEvent(e){
  e.preventDefault();
  console.log('EVENT TYPE: '+e.type);

     console.log(e.target.value);
     document.getElementById('output').innerHTML = '<h1>'+e.target.value+'</h1>';

     output = '<h1>MouseX: '+e.offsetX+' </h1><h1>MouseY: '+e.offsetY+'</h1>';

     button.style.backgroundColor = "rgb("+e.clientX+","+e.clientY+", 1050)";
}