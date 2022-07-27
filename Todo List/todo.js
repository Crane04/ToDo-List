let inpEl=document.querySelector("input")
let button=document.querySelector("button")
let list=document.querySelector("ul")
let addEl=document.querySelector("#addEl")
let savedTasks=JSON.parse(localStorage.getItem("tasks")) ||[]

savedTasks.forEach(create)

function create(text){
    //list
   
    let li=document.createElement("li")
    li.innerHTML=text
    
    let textNode=inpEl.value
    li.append(textNode)
    list.append(li)
    list.insertBefore(li,list.childNodes[0])
    //delete button
    let delBtn=document.createElement("button")
    let cancel="X"
    delBtn.append(cancel)
    li.append(delBtn)
    
    
    
    delBtn.addEventListener("click", function(){
    li.parentNode.removeChild(li)
    savedTasks=savedTasks.filter((e)=>
        e!==text)
        localStorage.setItem("tasks",JSON.stringify(savedTasks))
    
})
    
}

addEl.addEventListener("click", function(){
    let text=inpEl.value
  if (inpEl.value==""||inpEl.value==" "||inpEl.value=="  "){
    alert("Create a Todo!")
  }
    else{
       savedTasks.push(text)
       localStorage.setItem("tasks",JSON.stringify(savedTasks))
       inpEl.value=""
        create(text)
    }
})