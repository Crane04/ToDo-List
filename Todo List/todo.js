let inpEl=document.querySelector("input")
let button=document.querySelector("button")
let list=document.querySelector("ul")
let addEl=document.querySelector("#addEl")
let savedTasks=JSON.parse(localStorage.getItem("tasks")) ||[]

savedTasks.forEach(create)

function create(text){
    //list
   
    let node=document.createElement("li")
    node.innerHTML=text
    
    let textNode=inpEl.value
    node.append(textNode)
    list.append(node)
    list.insertBefore(node,list.childNodes[0])
    //delete button
    let delBtn=document.createElement("button")
    let cancel="X"
    delBtn.append(cancel)
    node.append(delBtn)
    
    
    
    delBtn.addEventListener("click", function(){
    node.parentNode.removeChild(node)
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