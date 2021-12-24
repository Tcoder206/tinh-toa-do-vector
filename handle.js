import {createOption,handleOption,coordElements,coordEval} from "./src/funct.js"
export const menu=()=>createOption("",
  "Tính tọa độ của vector",
  "Cộng tọa độ của các vector",
  "Trừ tọa độ của các vector",
  "Nhân tọa độ của các vector với 1 số",
  "Tính tọa độ trung điểm của 2 vector",
  "Tính tọa độ trọng tâm trong tam giác",
  "Biểu thức tọa độ của vector",
  "Tính góc giữa của 2 vector",
  "Tính độ dài của vector"
)
const func = ['','create','add','subtract','multi','average','average','coExp','midAngle','size']
export function handleCoord(input,option){
  if(handleOption(input,option)){
    if(option.selectedIndex!=0) coordElements(coordEval(func[option.selectedIndex],input.value))
  }
}