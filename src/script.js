function tabuar() {

    let num = document.getElementById("num");
        
    let res = document.querySelector('div#res')
    res.innerHTML = '';
    
    if (num.value.lenght == 0) {
        alert('Por favor digite um número!')
    } else {
    for (let i=0; i <= 10; i++) {
    n = Number(num.value);
    res.innerHTML += `${n} X ${i} = ` + n*i + "<br>";
    }

    //teste
}
}