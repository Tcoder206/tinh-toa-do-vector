import {handleCoord,menu} from "./handle.js"
const $ = document.querySelector.bind(document)
menu()
$("#form-vector").onsubmit=e=>{
  e.preventDefault()
  handleCoord($("#input-vector"),$("#select-vector"))
}