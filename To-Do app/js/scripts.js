function newItem() {
  
    //adding new item to list
  let list = $('#list');
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);
  
  if (inputValue === '') {
    alert("You must write something!");
  } else { 
    list.append(li); // remember that (li) is not a string and no '' needed
  }
  
  //crossing out item
  function crossOut() {
    li.toggleClass("strike");
  }
       
  li.on("dblclick", crossOut);
  
  // adding delete button
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);
  // make function to add .delete class to item
  function deleteListItem() {
    li.addClass('delete')
  }
  // add event to crossOutButton
  crossOutButton.on('click', deleteListItem);
  
  list.sortable();
    
}