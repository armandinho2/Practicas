const searchForm = document.getElementById("input");
searchForm.addEventListener("submit", function(event){
  event.preventDefault();
fetch(`https://books.googleapis.com/books/v1/volumes?q=${document.getElementById("input1").value}&key=AIzaSyDSCn55W82VJ6zMCKL02LoRJoTnFheJj64`, {
        headers: {
            Accept: 'application/json'
        },
        method: 'GET'
    })
        .then(res => {
            console.log("Response here")
            return res.json()
    })
        .then(response => {
            results = response;
            console.log("Updating table");
            updateTable(); 
    })
        .catch(e => {
            console.error("Error " + e); 
            alert("Sorry, no results found, try again!"); 
    })
    return false;
    })
     function updateTable(){
            let html='';
            results.forEach(function(object, i){
                html+=
                '<tr>\n' +
                `        <th scope="row">${object.items.volumeInfo.title}</th>\n` +
                `        <td>${object.items.volumeInfo.author}</td>\n` +
                `        <td>${object.items.volumeInfo.publisher}</td>\n` +
                `        <td>${object.items.volumeInfo.publishedDate}</td>\n` +
                '</tr>';
            })
            document.getElementById("table-content").innerHTML = html;
        }