
var percent;
const tip =['5', '10', '15', '20', '50'];

function removeAttr() {
    let custom =   document.getElementById('custom');
    custom.setAttribute('value',"");
    custom.value = ""
    removetip = document.getElementsByClassName('tip');
    for (let index = 0; index < removetip.length; index++) {
            removetip[index].classList.remove("active");    
        }
    custom.classList.add('active');
}

function myfunction(t){
           
    if(t.id === "custom"){
       
        t.classList.add('active');
        percent = (t.value)        
    } else {
        percent = (t.value);
        const addtip = document.getElementById(`${percent}`);
        document.getElementById('custom').classList.remove("active");
        document.getElementById('custom').value = "Custom"
        document.getElementById('custom').setAttribute("value","Custom");
        for (let i = 0; i < tip.length; i++) {
            if (percent != tip[i]) {
                const removetip = document.getElementById(`${tip[i]}`);
                removetip.classList.remove('active');
                
            } else {
                addtip.classList.add("active");
                //console.log(tip[i])
            }
        }
    }
    calcl();
    return percent;
} 



function calcl(){
    percent;
    let bill = parseFloat(document.getElementById('bill').value);
    let people = parseFloat(document.getElementById('num-people').value);
   
    let billbypeople = ((bill * percent / 100) + bill) / people;
    let tipbyperson = ((bill * percent / 100)) / people;
    
    if (billbypeople){
        document.getElementById('tip-amout').innerHTML = tipbyperson.toFixed(2);
        document.getElementById('tip-total').innerHTML = billbypeople.toFixed(2);
    }
}

function reset() {
    document.getElementById('tip-amout').innerHTML = "0";
    document.getElementById('tip-total').innerHTML = "0";
    document.getElementById('bill').value = "";
    document.getElementById('num-people').value = "";
    removetip = document.getElementsByClassName('tip');
        for (let index = 0; index < removetip.length; index++) {
            removetip[index].classList.remove("active");
            
        }    
}
