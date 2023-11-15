async function getTodos() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    
      const data = await response.json();
      return data;
    
  } catch (error) {
    console.error('Error:', error);
  }
}

getTodos()
  .then(todos => {
    if (todos) {
      const tbody = document.getElementById("data")
      todos.forEach(element => {
        const tr = document.createElement("tr")
        const id = document.createElement("td")
        const title = document.createElement("td")
        const completed = document.createElement("td")
        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"   
        id.textContent = element.id 
        title.textContent = element.title
        checkbox.checked = element.completed
        completed.appendChild(checkbox)
        tr.appendChild(id)
        tr.appendChild(title)
        tr.appendChild(completed) 
        tbody.appendChild(tr)
      });;
    } else {
      console.log('Can not get it');
    }
  })
  .catch(error => console.error('Error:', error));

  
  // for(let i = 0; i <data.length; i++) 
  //           table += `<tr><td>${data[i].id}</td><td>${data[i].title}</td><td>${data[i].completed}</td></tr>`
    