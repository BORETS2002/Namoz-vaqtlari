
const Select = document.querySelector(".select")
const Form = document.querySelector(".form")
const contris = document.querySelector(".contris")


const BtnKun = document.querySelector(".kunlik")
const BtnHafta = document.querySelector(".haftalik")
const BtnOy = document.querySelector(".oylik")



const elList = document.querySelector(".list")
const Frag = new DocumentFragment()

let arr = []
function RenderArry (item) {
  arr = [item]
  
  arr.flat(Infinity).forEach(item => {
    const Temp = document.querySelector(".template").content.cloneNode(true)
    
    console.log(item.times.tong_saharlik);
    Temp.querySelector(".data").textContent  = item.weekday

    Temp.querySelector(".bomdod").textContent  = item.times.tong_saharlik
    Temp.querySelector(".quyosh").textContent  = item.times.quyosh
    Temp.querySelector(".Peshin").textContent  = item.times.peshin
    Temp.querySelector(".Asr").textContent  = item.times.asr
    Temp.querySelector(".Shom").textContent  = item.times.shom_iftor
    Temp.querySelector(".Xufton").textContent  = item.times.hufton
    
    Frag.appendChild(Temp)
  });
  
  
  
  
  
  elList.appendChild(Frag)
  
  
  
}

async function feachFunk(url) {
  elList.innerHTML = ""
  try {
    const res = await fetch(url)
    const data = await res.json()
    RenderArry(data)
  } catch (error) {
    console.log(error);
  }
  
}


feachFunk("  https://islomapi.uz/api/present/day?region=Toshkent ")

Form.addEventListener("submit", evt => {
  evt.preventDefault()
  feachFunk(` https://islomapi.uz/api/present/day?region=${Select.value} `)
  contris.textContent = Select.value
  
})

 BtnKun.addEventListener("submit", evt =>{
  evt.preventDefault()
  feachFunk(` https://islomapi.uz/api/present/day?region=${Select.value} `)
 })

 BtnHafta.addEventListener("click", evt =>{
  evt.preventDefault()
  feachFunk(` https://islomapi.uz/api/present/week?region=${Select.value} `)
 })

 BtnOy.addEventListener("click", evt =>{
  evt.preventDefault()
  feachFunk(`https://islomapi.uz/api/monthly?region=${Select.value}&month=11`)
 })