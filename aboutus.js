var divdetail = document.getElementById('divaaa')
var details = JSON.parse(localStorage.getItem('deatil'))

function draw(){
    divdetail.innerHTML = ''
    details.map((e)=>{
        divdetail.innerHTML += `
           <p class="choses-book">معلومات الكتاب اللذي اخترته</p>
        <p class="choses-book"><span style="color:red;">id : </span> ${e.id}</p>
        <p class="choses-book"><span style="color:red;">name : </span> ${e.name}</p>
       <p class="choses-book"> <span style="color:red;">price : </span> ${e.price}</p>
       <p class="choses-book"> <span style="color:red;">author : </span> ${e.author}
        </p>`
    })
}
draw()

console.log(details)
