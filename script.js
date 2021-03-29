const uno=()=>{
    let char='Hola Mundo';
    var char2;
    char2=char.split().reverse();
    document.getElementById('uno').innerHTML=char2;
}

const dos =()=>{
    let char='Hola Mundo';
    var char2;
    char2=char.split('').reverse();
    document.getElementById('dos').innerHTML=char2;
}

const tres =()=>{
    let char='Hola Mundo';
    var char2;
    char2=char.split('').reverse().join('');
    document.getElementById('tres').innerHTML=char2;
}

