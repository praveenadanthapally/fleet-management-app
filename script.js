let fleet=[]
const form = document.getElementById("fleet-form");
const list = document.getElementById("main-content");
const catf = document.getElementById("category-filter");
const availF = document.getElementById("availability filter");
const clearF = document.getElementById("clear filter btm");
function render()
{
  iist.innerHTML="":
  let data=fleet.filter(v=>catfvalue==="All"||v.category===catF.value)&&(availF.value==="All"|v.isAvailable===availF.value));
  if(data.length===0){
    list.innerHTML="<p>No</p>";
    return;
  }
  form.addEventListener("submit",e->{
    e.preventDefault();
  fleet.push({
    regno:regno.value,
    category:category.value

  driver:drivername.value
  isavailble:isavailable.value
  });

  fleet.push(
    {regno:"TS01A1234",category:"car",driver:"jon",isavailable:"available"},
    {regno:"TS01A1334",category:"truck",driver:"ion",isavailable:"unavailable"},
  
  )
}
render();
