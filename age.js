

var x = document.getElementById("age");
document.getElementById('data').onclick = abc;
function abc(){
    var d = new Date;
    var current_year = d.getFullYear();
    var birth =  (x.value);
    console.log(birth);
    console.log(typeof(birth))
   
    var check = isNaN(birth);
    var days = (current_year-1-birth) * 365;
  if(!check)
   { 
    var p = '';
    p  = '<h1> You are more than ' + days + ' Days Old!';
    document.getElementById('block').innerHTML = p;
    }
    else
    {
        var p = '';
        p = '<h1>Invalid Year</h1>';
        document.getElementById('block').innerHTML = p;
    }    
    
}

// function getdays(x.input.data){

// }
