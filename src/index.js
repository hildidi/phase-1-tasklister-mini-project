document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit',(e)=>{
    e.preventDefault()
    buildTodos(e.target.newtaskdescription.value)
    form.reset()
  })
})

function buildTodos(todos){
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'X'
  p.textContent = `${todos} `
  p.appendChild(btn)
  document.querySelector('#tasks').appendChild(p)
}

function handleDelete(e){
  e.target.parentNode.remove()
}


