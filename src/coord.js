export const coord=(()=>{
	let __result = [0,0]
	function __compactSqrt(number){
		let lastRes = 0
		for(let numb=0;numb<number+1;numb++){
			if(number%numb==0){
				let sqrtRes = parseFloat(Math.sqrt(numb))
				if(typeof(sqrtRes)==Number) lastRes = `{sqrtRes}√{parseFloat(number/numb)}`
      }
    }
		if(lastRes.split("√")[0]=="1") lastRes=lastRes.slice(1)
		return lastRes
  }
	function __numberInSqrt(number){
		let mainSqrt = String(number).split("√")
		if(mainSqrt.length==2&&mainSqrt[0].length>0){
			return (Number(mainSqrt[0])**2)*Number(mainSqrt[1])
    } else {
			return Number(mainSqrt.join(''))
    }
  }
	function __fixMidAngle(number){
		let removeDot = String(number).split(".")[1]
		if(removeDot.length>=14&&removeDot[0]=='0'&&String(number).slice(-1)=="1"){
			return Math.round(parseFloat(number))
    } else{return parseFloat(number)}
  }
	const create=(a,b)=>{
		if(Array.isArray(a)||Array.isArray(b)){
			__result[0]=b[0]-a[0]
			__result[1]=b[1]-a[1]
			if(a.length==3&&b.length==3){
				__result.push(0)
				__result[2]=b[2]-a[2]
      }
    }
    return __result
  }
	const add=(...vectors)=>{
		__result = [0,0]
		for(let vector of vectors){
			if(Array.isArray(vector)){
				__result[0]+=vector[0]
				__result[1]+=vector[1]
				if(vector.length==3){
					__result.push(0)
					__result[2]+=vector[2]
					if(Array(__result).slice(-1)==0) __result.pop()
        }
      }
    }
		return __result
  }
	const subtract=(...vectors)=>{
		__result = [vectors[0][0],vectors[0][1]]
		for(let vector of vectors.slice(1)){
			if(Array.isArray(vector)){
				__result[0]-=vector[0]
				__result[1]-=vector[1]
				if(vector.length==3){
					__result.push(0)
					__result[2]-=vector[2]
        }
      }
    }
    return __result
  }
	const multi=(k,...vectors)=>{
		let vectorList = []
		for(let vector of vectors){
      __result = [0,0]
			if(Array.isArray(vector)){
				__result[0]=k*vector[0]
				__result[1]=k*vector[1]
				if(vector.length==3){
					__result.push(0)
					__result[2]=k*vector[2]
					if(__result.slice(-1)==0) __result.pop()
        }
      }
			vectorList.push(__result)
    }
		if(vectorList.length>1){return vectorList}
		else{return vectorList[0]}
  }
	const co_exp=(a,b)=>{
		__result = [0,0]
		let vecto = 0
		if(Array.isArray(a)||Array.isArray(b)){
			__result[0]=a[0]*b[0]
			__result[1]=a[1]*b[1]
			vecto += __result[0] + __result[1]
			if(a.length==3&&b.length==3){
				__result.push(0)
				__result[2]=a[2]*b[2]
				vecto += __result[2]
      }
    }
		return vecto
  }
	const average=(...vectors)=>{
		let vectoLength = vectors.length
		let sumVector = add(...vectors)
		__result[0]=parseFloat(sumVector[0]/vectoLength)
		__result[1]=parseFloat(sumVector[1]/vectoLength)
		if(sumVector.length==3) __result[2]=parseFloat(sumVector[2]/vectoLength)
		return __result
  }
	const size=(vector,compact=false)=>{
		let vectorLength = 0
		for(let vec of vector){vectorLength+=vec**2}
		let sqrtLength = Math.sqrt(vectorLength)
		if(!compact){return parseFloat(sqrtLength)}
		else{
			if(!String(parseFloat(sqrtLength)).includes(".")){
				return parseFloat(sqrtLength)
      }else{return __compactSqrt(vectorLength)}
    }
  }
	const mid_angle=(a,b)=>{
		try{
			const numerator = co_exp(a,b)
			const a_length = __numberInSqrt(size(a,true))
			const b_length = __numberInSqrt(size(b,true))
			const denominator = Math.sqrt(a_length*b_length)
			const degMidAng = Math.degrees(Math.acos(numerator/denominator))
			return __fixMidAngle(degMidAng)
    } catch {return "Math Error"}
  }
  return {
    create:(a,b)=>create(a,b),
    add:(...vecs)=>add(...vecs),
    subtract:(...vecs)=>subtract(...vecs),
    multi:(k,...vecs)=>multi(k,...vecs),
    coExp:(a,b)=>co_exp(a,b),
    average:(...vecs)=>average(...vecs),
    size:(vec,comp)=>size(vec,comp),
    midAngle:(a,b)=>mid_angle(a,b)
  }
})()