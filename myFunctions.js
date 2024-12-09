var check1 = document.getElementById('1')
var check2 = document.getElementById('2')
var check3 = document.getElementById('3')
var check4 = document.getElementById('4')
var check5 = document.getElementById('5')
var div1 = document.getElementById('div1')
var div2 = document.getElementById('div2')
var div3 = document.getElementById('div3')
var div4 = document.getElementById('div4')
var div5 = document.getElementById('div5')
var form = document.getElementById('form')
var btnContinue = document.getElementById('continue')
var radio1 = document.getElementById('radio')
var national = document.getElementById('national')
var radio2 = document.getElementById('radio2')
var radio3 = document.getElementById('radio3')
var radio4 = document.getElementById('radio4')
var radio5 = document.getElementById('radio5')
var price1 = document.getElementById('price1')
var name1 = document.getElementById('name1')
var id1 = document.getElementById('id1')
var author1 = document.getElementById('author1')
var detailes1 = document.getElementById('detailes1')

var price2 = document.getElementById('price2')
var name2 = document.getElementById('name2')
var id2 = document.getElementById('id2')
var author2 = document.getElementById('author2')
var detailes2 = document.getElementById('detailes2')

var price3 = document.getElementById('price3')
var name3 = document.getElementById('name3')
var id3 = document.getElementById('id3')
var author3 = document.getElementById('author3')
var detailes3 = document.getElementById('detailes3')

var price4 = document.getElementById('price4')
var name4 = document.getElementById('name4')
var id4 = document.getElementById('id4')
var author4 = document.getElementById('author4')
var detailes4 = document.getElementById('detailes4')

var price5 = document.getElementById('price5')
var name5 = document.getElementById('name5')
var id5 = document.getElementById('id5')
var author5 = document.getElementById('author5')
var detailes5 = document.getElementById('detailes5')

var btnSend = document.getElementById('send')

check1.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    div1.style.display = 'block'
} else {
    div1.style.display = 'none'
  }
})


check2.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
      div2.style.display = 'block'
  } else {
      div2.style.display = 'none'
    }
})

check3.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
      div3.style.display = 'block'
  } else {
      div3.style.display = 'none'
    }
})


check4.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
      div4.style.display = 'block'
  } else {
      div4.style.display = 'none'
    }
})


check5.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        div5.style.display = 'block'
    } else {
        div5.style.display = 'none'
    }
})
var detail = [{id:'',name:'',price:'',author:''}]


btnContinue.onclick = function(){
    if( radio1.checked || radio2.checked ||radio3.checked ||radio4.checked ||radio5.checked )
    {
        form.style.display = 'block'
    }
    else{
        form.style.display = 'none'
        alert("please choose one book")
    }
    detail = []
    if(radio1.checked)
    {
        detail.push({id:id1.textContent,name: name1.textContent,price:price1.textContent,author:author1.textContent})
    }
        
    if(radio2.checked)
    {
        detail.push({id:id2.textContent,name: name2.textContent,price:price2.textContent,author:author2.textContent})
    }

    
    if(radio3.checked)
    {
        detail.push({id:id3.textContent,name: name3.textContent,price:price3.textContent,author:author3.textContent})
    }

    if(radio4.checked)
    {
        detail.push({id:id4.textContent,name: name4.textContent,price:price4.textContent,author:author4.textContent})
    }

    if(radio5.checked)
    {
        detail.push({id:id5.textContent,name: name5.textContent,price:price5.textContent,author:author5.textContent})
    }
    console.log(detail)
    localStorage.setItem('deatil',JSON.stringify(detail))

}

var char= [national.value]

national.oninput = function(){
    var char= [national.value]
    char.forEach((e)=>{
        if(national.value.length == 2)
        {
            national.value = national.value +"-"
        }
    })
}


btnSend.onclick = function(){

    if(national.value != "")
        {
            setTimeout(() => {
                location = 'AboutUs.html'
            }, 10);
        }
}

console.log(detail)


