
// JavaScript to show/hide tables based on radio button selection
document.getElementById('radioButton1').addEventListener('click', function() {
    document.getElementById('dataTable1').style.display = 'table';
    document.getElementById('dataTable2').style.display = 'none';
    document.getElementById('dataTable3').style.display = 'none';
    document.getElementById('b1').style.border = '2px solid #42A35E;';
    document.getElementById('b2').style.border = '2px solid #42A35E;';
    document.getElementById('b3').style.border = '1px solid #42A35E;';
    document.getElementById('total').innerHTML = 'Total : $10.00 USD';
});

document.getElementById('radioButton2').addEventListener('click', function() {
    document.getElementById('dataTable1').style.display = 'none';
    document.getElementById('dataTable2').style.display = 'table';
    document.getElementById('dataTable3').style.display = 'none';
    document.getElementById('b1').style.border = '2px solid #42A35E;';
    document.getElementById('b2').style.border = '2px solid #42A35E;';
    document.getElementById('b3').style.border = '2px solid #42A35E;';
    document.getElementById('total').innerHTML = 'Total : $18.00 USD';
});

document.getElementById('radioButton3').addEventListener('click', function() {
    document.getElementById('dataTable1').style.display = 'none';
    document.getElementById('dataTable2').style.display = 'none';
    document.getElementById('dataTable3').style.display = 'table';
    document.getElementById('b1').style.border = '2px solid #42A35E;';
    document.getElementById('b2').style.border = '2px solid #42A35E;';
    document.getElementById('b3').style.border = '2px solid #42A35E;';
    document.getElementById('total').innerHTML = 'Total : $24.00 USD';
});