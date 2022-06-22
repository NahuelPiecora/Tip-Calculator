document.querySelector('#leftButton').addEventListener('click', tipAmount)
      
function tipAmount() {
        let billAmount = Number (document.querySelector(`#billAmount`).value);
        let tipAmount = Number(document.querySelector(`#tipAmount`).value);
        let tipValue = billAmount * (tipAmount/100)
        let finalAmount = billAmount + tipValue
        console.log(finalAmount)
        document.querySelector('#answerHere').innerText = finalAmount
        let billSplit = Number (document.querySelector(`#pplAmount`).value);
        let splitAmount = finalAmount / billSplit
        document.querySelector(`#splitTip`).innerText = splitAmount
        let tipIs = billAmount * (tipAmount/100)
        document.querySelector(`#tipIs`).innerText = tipIs        
        
       }

       document.querySelector('#rightButton').addEventListener('click', clearResult)
       
       function clearResult(){
        document.getElementById("topForm").reset();
        document.getElementById("middleForm").reset();
        document.getElementById("bottomForm").reset();

        document.getElementById("answerHere").innerHTML=" "
        document.getElementById("splitTip").innerHTML=" "
        document.getElementById("tipIs").innerHTML=" "

      }
  
   