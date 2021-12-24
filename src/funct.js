import {coord} from "./coord.js"
export const createOption=(...options)=>{
	const select = document.getElementById("select-vector")
  for(let option=0;option<options.length;option++){
		const opt = document.createElement("option")
		opt.value = options[option]
		opt.innerText = options[option]
    opt.classList.add('option-vector')
    opt.dataset.option=option
		select.appendChild(opt)
  }
}
export const handleOption=(input,option)=>{
  if(!(!!option.value&&!input.disabled&&!!input.value)){
    document.getElementById("red-text").innerText="Vui lòng điền đầy đủ vào ô trống"
    input.classList.add("error-css")
    option.classList.add("error-css")
    return false
  } else {
    document.getElementById("red-text").innerText=""
    input.classList.remove("error-css")
    option.classList.remove("error-css")
    return true
  }
}
export const coordElements=res=>{
  const main = document.createElement("div")
  const time = document.createElement("span")
  const coordRes = document.createElement("span")
  coordRes.classList.add("coordRes")
  coordRes.innerText=res
  time.classList.add("timeRes")
  time.innerText=new Date().toLocaleString('vi-VN')
  main.appendChild(time)
  main.appendChild(coordRes)
  main.classList.add("flex-style")
  let divField = document.getElementById("div-field")
  divField.appendChild(main)
  divField.scrollBy(0,10000)
}
export const coordEval=(func,args)=>{
  args=JSON.stringify(args).trim().replace(/;/g,',').replace(/\(/g,'[').replace(/\)/g,']')
  let script = JSON.stringify(eval(`coord.${func}(${JSON.parse(args)})`))
  return script.replace(/,/g,';').replace(/\[/g,'(').replace(/\]/g,')')
}