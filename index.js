$(function(){
  //add item to list
  $('#js-shopping-list-form').submit(event => {
       event.preventDefault();
       let item = $(this).find('input[name="shopping-list-entry"]').val();
       $('.shopping-list').append($(`<li>
       <span class="shopping-item">${item}</span>
       <div class="shopping-item-controls">
         <button class="shopping-item-toggle">
           <span class="button-label">check</span>
         </button>
         <button class="shopping-item-delete">
           <span class="button-label">delete</span>
         </button>
       </div>
     </li>`));

  });

  $('ul').on('click', '.shopping-item-toggle', function(event) {
    let element = $(this).parent().prev();
    //uncheck item
    if(element.hasClass('shopping-item__checked')){
      $(this).parent().prev().attr('class', 'shopping-item');
    //check item
    }else{  
      $(this).parent().prev().attr('class', 'shopping-item  shopping-item__checked');
    };
  });
  
  //delete item from list  
  $('ul').on('click', '.shopping-item-delete', function(event) {
    $(this).parent().parent().remove();
  });
})

