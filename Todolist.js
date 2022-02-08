 window.addEventListener('DOMContentLoaded',function(){



 const newList = document.querySelector('#newList')
 /*let input = document.querySelector('#to-do') */
 const toDoForm = document.querySelector('form');
 
 const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
 for (let i = 0; i < savedTodos.length; i++) {
     let newLi = document.createElement('li');
     newLi.innerText = savedTodos[i].task;
     newLi.isCompleted = savedTodos[i].isCompleted ? true : false
     if(newLi.isCompleted) {

        newLi.style.textDecoration = 'line-through'
     }

       newList.appendChild(newLi);

 }
 
 toDoForm.addEventListener('submit', function(e){
     e.preventDefault();
    
     let btn = document.createElement("button");
     btn.innerText = "X";
      
      let newLi = document.createElement('li');
      newLi.innerText = document.querySelector('#to-do').value;
    
      newList.appendChild(newLi);
      newLi.appendChild(btn);
      toDoForm.reset();
     

      savedTodos.push({ task: newLi.innerText, isCompleted: false });
      localStorage.setItem("todos", JSON.stringify(savedTodos));





 });
   


 
newList.addEventListener('click', function(e) {
      let clickedListItem = e.target; 
     /*if(e.target.tagName === 'LI'){
        e.target.style.textDecoration = "line-through";
    
    
    }else if(e.target.tagName === 'BUTTON'){
       e.target.parentNode.remove()
      }   */
       
      if (!clickedListItem.isCompleted) {
        clickedListItem.style.textDecoration = "line-through";
        clickedListItem.isCompleted = true;
      } else {
        clickedListItem.style.textDecoration = "none";
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

