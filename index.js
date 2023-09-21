let getAdvice = () => {
  document.querySelector(".advice-id").innerHTML="ADVICE #"
  document.querySelector(".advice-txt").innerHTML=""
  let request =new XMLHttpRequest();
  request.addEventListener("readystatechange",()=>{
    if(request.readyState === 4 && request.status === 200){
        let data = JSON.parse(request.responseText)
        console.log(data)
        let id = data.slip.id;
        let advice = data.slip.advice;


        let textId = document.createTextNode(id);
        document.querySelector(".advice-id").appendChild(textId)
        let textAdvice =  document.createTextNode(advice);
      document.querySelector(".advice-txt").appendChild(textAdvice)
    }
    else if (request.readyState === 4 && request.status !== 200){
      console.log("some thing happend")
    }
  })
  request.open("GET","https://api.adviceslip.com/advice");
  request.send()
}

getAdvice()
window.addEventListener("resize",()=>{
  if(window.innerWidth > 420)
  {
    console.log(window.innerWidth > 420)
    document.querySelector(".divider").src="./images/pattern-divider-desktop.svg"
  }else {
    document.querySelector(".divider").src="./images/pattern-divider-mobile.svg"

  }
})
document.querySelector(".circle").addEventListener("click",getAdvice)