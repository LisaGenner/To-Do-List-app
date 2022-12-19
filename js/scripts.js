function newItem() {

//jQuery adding new item to the list
let li = $('<li></li>');
let inputValue = $('#input').val();
let text = document.createTextNode(inputValue);
li.append(text);

if (inputValue === '') {
    alert("You must write something!");
} else {
    let list = $('#list');
    list.append(li);
}


//2. crossing out an item from the list of items:

//jQuery replacement//
function crossOut() {
    li.toggleClass('strike');
}

li.on('dblclick', crossOut);



// 3(i). Adding the delete button "X":
let crossOutButton = $('<button>X</button>');
li.append(crossOutButton);

crossOutButton.on('click', deleteListItem);

// 3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
function deleteListItem() {
    li.addClass('delete');
}

// 4. Reordering the items:
$('#list').sortable();


}

