function checkIf(num){
    if(isNaN(num)){
        throw " No its not  a number";
    }else{console.log("Its a number");
    }
}

try{
    checkIf("dsasds");
}
catch(catchID){
    console.log("catch an error"+catchID)
}
console.log("Another Step");