

function append(input){
    document.getElementById("input").value += input;
}

function clr(){
    document.getElementById("input").value = "";
}
function equal(){
    try{
        document.getElementById("input").value = eval(document.getElementById("input").value);
    }
    catch(err){
        document.getElementById("input").value = "Syntax Error!";
    }
    
}