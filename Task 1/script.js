let url = "https://blockchain.info/ticker"
let table = document.getElementById("tableBody")

// Calls the API and passes the data to the function
fetch(url)
    .then(response => {
        return response.json();
     })
     .then(data => {
        
        createTable(data)
        
     });

    
  
//  Populates the table by looping through the data  
function createTable(info) {

    for (let item in info) {
        let newRow = document.createElement("tr")
    
        let currency = document.createElement("td")
        currency.innerHTML = item
        newRow.appendChild(currency)

        let y = info[item]
        for (let x in y) {
            let td = document.createElement("td")
            td.innerHTML = y[x]
            newRow.appendChild(td)
        }

        table.appendChild(newRow)
    }
}