let campo = document.querySelector('.b1')
let operation = '';
let n1 = 0;

function goToInput(v)
{
    campo.value += v;
}

function getNumber(op)
{
    
    if (op === 5)
    {
        n1 = campo.value;
        campo.value =  `${n1} +`;

        operation = 5;
    }

    else if (op === 4)
    {
        n1 = campo.value;
        campo.value =  `${n1} -`;

        operation = 4;
    }

    else if (op === 10)
    {
        n1 = campo.value;
        campo.value =  `${n1} +`;

        operation = 10;
    }
}

function getResults()
{
    let n2 = campo.value;
    let N1 = Number(n1);
    let N2 = Number(n2);
    campo.value = '';
    if (operation === 5)
    {
        campo.value = N1 + N2;
    }
    else if ( operation === 4)
    {
        campo.value = N1 - N2;
    }
    else if ( operation === 10)
    {
        campo.value = N1 * N2;
    }
}