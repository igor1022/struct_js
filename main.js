let div = document.querySelector('.conteiner');
let input = document.querySelector('input[name="input"]');
let elem = document.querySelector('.bod');

let mass = ['<ol>', '</ol>'];
//console.log('mass1:', mass);

const text = (ev) => {
    let value = '<li>' + input.value + '</li>';
    mass.pop();
    mass.push(value);
    mass.push('</ol>');
    console.log('mass2:', mass);
    
    div.innerHTML = mass;
}

elem.addEventListener('click', text);

