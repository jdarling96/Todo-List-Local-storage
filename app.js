 window.addEventListener('DOMContentLoaded',function(){
 
const newList = document.querySelector('#newList');
 /*let input = document.querySelector('#to-do') */
 const toDoForm = document.querySelector('form');
 const getSpan = document.getElementsByClassName('span')
 
 const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
 for (let i = 0; i < savedTodos.length; i++) {
     let newLi = document.createElement('li');
     getSpan.innerText = savedTodos[i].task;
     getSpan.isCompleted = savedTodos[i].isCompleted ? true : false
     if(newLi.isCompleted) {

        newLi.style.textDecoration = 'line-through';
     }

       
 
 } 
 
 toDoForm.addEventListener('submit', function(e){
     e.preventDefault();
    
    
    const checkBtn = document.createElement('button')
    checkBtn.innerHTML = '<i class="fa-solid fa-square-check"></i>'
    checkBtn.className = 'check-button'
    
    
     // create a trash button
     const trashBtn = document.createElement('button');
     trashBtn.innerHTML = '<i class="fa-solid fa-trash"></i>'
     trashBtn.className = 'remove-button'
     
      const newLi = document.createElement('li');
      newLi.className = 'new-todo'
      
      const newSpan = document.createElement('span')
      newSpan.className = 'span'
      newSpan.innerText = document.querySelector('#to-do').value;
      
      newLi.appendChild(newSpan);
      newList.appendChild(newLi);
      newLi.prepend(checkBtn);
      newLi.prepend(trashBtn);
      toDoForm.reset();
     

      //savedTodos.push({ task: newSpan.innerText, isCompleted: false});
      localStorage.setItem("todos", JSON.stringify(savedTodos));

});
   


 
newList.addEventListener('click', function(e) {
      let clickedListItem = e.target; 
     
      if(clickedListItem.className === 'remove-button'){
       clickedListItem.parentNode.remove()
       }
       else if (clickedListItem.className === 'check-button') {
         clickedListItem.parentNode.style.textDecoration = 'line-through'
       }

       
      
       
      if (!clickedListItem.isCompleted) {
        //clickedListItem.style.textDecoration = "line-through";
        clickedListItem.isCompleted = true;
      } else {
        //clickedListItem.style.textDecoration = "none";
        clickedListItem.isCompleted = false;
      }
      for (let i = 0; i < savedTodos.length; i++) {
        if (savedTodos[i].task === clickedListItem.innerText) {
          savedTodos[i].isCompleted = !savedTodos[i].isCompleted;
          localStorage.setItem("todos", JSON.stringify(savedTodos));
        }
      } 
      
});

      });

