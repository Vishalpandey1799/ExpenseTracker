const expenseName = document.querySelector(".expense");
const expense = document.querySelector(".amount");

const addExpense = document.querySelector(".expenseadd");
const tableBody = document.querySelector(".tbody");
const tablefooter = document.querySelector(".footer");
const totalexpense = document.querySelector("#amountotal");
const invalidInput = document.querySelector(".alert");
 let total = 0;
addExpense.addEventListener("click" , (e) =>{
    e.preventDefault();
    console.log("click");
    let boughtThing = expenseName.value
    let boughtPrice = parseFloat(expense.value);

    if(boughtThing != "" && boughtPrice != null){
        const tableRow = document.createElement("tr");
        const thing  = document.createElement("td");
        const thingAmt  = document.createElement("td");
        const thingBtn  = document.createElement("td");
        const dltButton = document.createElement("button");
        dltButton.textContent = "delete"
        dltButton.classList.add("delete");

        thing.textContent = boughtThing;
        thingAmt.textContent = boughtPrice;
        tableBody.append(tableRow);
        thingBtn.appendChild(dltButton);
        tableRow.appendChild(thing);
        tableRow.appendChild(thingAmt);
        tableRow.appendChild(thingBtn);
           invalidInput.style.display = "none";
        total += boughtPrice;
        tablefooter.style.display = "flex"
        totalexpense.textContent = total;
        dltButton.addEventListener("click" , () =>{
            total -= boughtPrice;
            totalexpense.textContent = total
            tableBody.removeChild(tableRow);
       });
    } 

  
});