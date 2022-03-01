function execute(){
    v1=document.cycle_form.valueX.value;
    v2=document.cycle_form.valueY.value;
    vali1 = false;
    vali2 = false;

    //valor 1 checar si hay un valor y si está dentro de 1 y 10
    if(v1.length==0){
        alert("Error: Se debe indicar un valor en X")
        document.cycle_form.valueX.style.background="red";
    }else{
        v1=parseInt(v1);
        if(v1 >= 1 && v1 <=10){
            vali1 = true;
          //valor 2 checar si hay un valor y si está dentro de 1 y 5
            if(v2.length==0){
                alert("Error: Se debe indicar un valor en Y")
                document.cycle_form.valueY.style.background="red";
            }else{
                v2=parseInt(v2);
                if(v2 >= 1 && v2 <=5){
                    vali2 = true;
                }else{
                alert("Error: Se debe indicar un valor entre 1 y 5")
                document.cycle_form.valueY.style.background="red";
                }
            }
        }else{
            alert("Error: Se debe indicar un valor entre 1 y 10")
            document.cycle_form.valueX.style.background="red";
        }
    }
    if(vali1==true && vali2==true){
        ans = Math.pow(v1, v2);
        document.cycle_form.res.value=ans;
    }
}

function resetFieldX(){
    document.cycle_form.valueX.style.background="white";
}
function resetFieldY(){
    document.cycle_form.valueY.style.background="white";
}