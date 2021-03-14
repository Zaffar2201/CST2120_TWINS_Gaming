//populate funct to fill html table by highest scores
function populateTable() {

    // Link table DOM to JS
    var table = document.getElementById("scoreTable");

    // Users array objects
    var users = [];

    //Loop through localStorage data
    // Push objects into array
    for (let a = 0; a < localStorage.length; a++) {

        users.push(JSON.parse(localStorage.getItem(localStorage.key(a))));

    }

    // Calls SortByHighestPoints function
    SortByHighestPoints(users);

    //Add data to html table
    for (var i = 0; i < users.length; i++) {
        table.innerHTML += "<tr><td>" + (i + 1) + "</td><td>" + users[i].username + "</td><td>" + users[i].high_score + "</td></tr>";
    }



}
// Sort users by lowest point
// First bubble sort
// Then reverse
function SortByHighestPoints(users) {

    var length = users.length;

    for (let x = 0; x < users.length - 1; x++) {

        for (let y = 0; y < (users.length - x - 1); y++) {

            if (users[y].high_score > users[y + 1].high_score) {

                var temp = users[y];
                users[y] = users[y + 1];
                users[y + 1] = temp;


            }



        } // End of inner for loop

    } // end of outer for loop

    //Reverse array
    users.reverse();
}