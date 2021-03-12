

var x = document.getElementById("age");
document.getElementById('data').onclick = abc;
function abc(){
    var d = new Date;
    var current_year = d.getFullYear();
    var birth = x.value;
    var days = (current_year-1-birth) * 365;
    
    var p = '';
    p  = '<h1> You are ' + days + ' Days Old!';

    document.getElementById('block').innerHTML = p;

}

// function getdays(x.input.data){

// }