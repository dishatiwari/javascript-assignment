  let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1;

    let yyyy = today.getFullYear();
 if(dd<10){
        dd='0'+dd;
    } 
    if(mm<10){
        mm='0'+mm;
    } 
    function firstFormate()
{
    let today = dd+'-'+mm+'-'+yyyy;
    Console.log(today);
}
 function secondFormate()
{
    let today = dd+','+mm+','+yyyy;
    console.log(today);
    
}


firstFormate();
secondFormate();
