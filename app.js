 
 
 document.addEventListener('DOMContentLoaded', getTodos);
 
 const newList = document.querySelector('#newList');
 const toDoForm = document.querySelector('form');
 const getSpan = document.getElementsByClassName('span')
 
  
 
 toDoForm.addEventListener('submit', function(e){
     e.preventDefault();
    
    const checkBtn = document.createElement('button')
    const submitTodo = document.querySelector('#to-do')
    
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
      newSpan.innerText = submitTodo.value;
      
      // add todo to local storage 
      saveLocalTodos(submitTodo.value);
      
      newLi.appendChild(newSpan);
      newList.appendChild(newLi);
      newLi.prepend(checkBtn);
      newLi.prepend(trashBtn);
      toDoForm.reset();
      

  });
   


 
newList.addEventListener('click', function(e) {
      let clickedListItem = e.target; 
     
      if(clickedListItem.className === 'remove-button'){
        removeLocalTodos(clickedListItem);
       clickedListItem.parentNode.remove()
       }
       else if (clickedListItem.className === 'check-button') {
         clickedListItem.parentNode.style.textDecoration = 'line-through'
       }

});
            function saveLocalTodos(todo){
              let todos;

              if(localStorage.getItem('todos') === null){
                     todos = []
              }else{
                todos = JSON.parse(localStorage.getItem('todos'));
              }
              todos.push(todo);
              localStorage.setItem('todos', JSON.stringify(todos));
            }

            function getTodos(){
              
              let todos;

              if(localStorage.getItem('todos') === null){
                     todos = []
              }else{
                todos = JSON.parse(localStorage.getItem('todos'));
              }
              todos.forEach(function(todo){
                const checkBtn = document.createElement('button')
                const submitTodo = document.querySelector('#to-do')
    
                checkBtn.innerHTML = '<i class="fa-solid fa-square-check"></i>'
                checkBtn.className = 'check-button'
    
    
     
                 const trashBtn = document.createElement('button');
                 trashBtn.innerHTML = '<i class="fa-solid fa-trash"></i>'
                 trashBtn.className = 'remove-button'
     
                 const newLi = document.createElement('li');
                 newLi.className = 'new-todo'
      
                 const newSpan = document.createElement('span')
                 newSpan.className = 'span'
                 newSpan.innerText = todo;
      
       
                  newLi.appendChild(newSpan);
                  newList.appendChild(newLi);
                  newLi.prepend(checkBtn);
                  newLi.prepend(trashBtn);


              });
             
            }

            function removeLocalTodos(todo) {
              let todos;

              if(localStorage.getItem('todos') === null){
                     todos = []
              }else{
                todos = JSON.parse(localStorage.getItem('todos'));
              }
            
              const todoIndex = newList.children[0].innerText
              console.log(todoIndex)
              todos.splice(todos.indexOf(todoIndex), 1)
              localStorage.setItem('todos', JSON.stringify(todos));

            }

      

