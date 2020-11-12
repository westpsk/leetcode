const magic = (n) => {
  const res = []
  for(let i = 0; i < n; i++){
    res[i] = [...Array(n).fill(0)]
  }
  if(n%2 === 1){
    // 奇数阶幻方, 罗伯特法
    odd(n, 0, 0, 0, res)
  }else if(n%4 === 0){
    // 双偶阶幻方 
    douleEven(n, res)
  }else{
    // 单偶阶幻方 划分四个奇数幻方 
    singleEven(n, 0, res)
  }
  return res
}

const singleEven = (n, res) => {
  // 第一象限
  let ox = oy = 0
  let tempN = Math.floor(n/2)
  let subSum = tempN*tempN/4

  odd(tempN, ox, oy, subSum*0, res)

  // 第四象限
  ox = oy = tempN
  odd(tempN, ox, oy, subSum*1, res)

  // 第二象限
  ox = tempN
  oy = 0
  odd(tempN, ox, oy, subSum*2, res)

  // 第三象限
  ox = 0
  oy = tempN
  odd(tempN, ox, oy, subSum*3, res)
  
  let m = (n - 2)/4
  let temp
  for(let i = 0; i < tempN; i++){
    for(let j = 0; j < m; j++){
      let k = (i === n/4) ? n/4+j : j
      temp = res[i][k]
      res[i][k] = res[i+tempN][k]
      res[i+tempN][k] = temp
    }
  }
  for(let j = 0; j < m - 1; j++){
    let k = tempN + Math.floor(n/4) + j
    temp = a[i][k]
    a[i][k] = a[i+tempN][k]
    a[i+tempN][k] = temp 
  }
}

const douleEven = (n, res) => {
  let row = col = 0
  for(let i = 1; i < n * n + 1; i++){
    res[row][col] = i
    if(i%n === 0){
      row = 0
      col++
    }else{
      row++
    }
  }
  // 以 4*4 大小分割幻方
  const total = n * n + 1
  const m = n/4
  let ox = oy = 0
  for(let j = 1; j < m * m + 1; j++){
    fourXFour(res, ox, oy, total)
    if(j%m === 0){
      ox = 0
      oy += 4
    }else{
      ox = j%m*4
    }
  }
}

const fourXFour = (res, ox, oy, total) => {
  for(k = 0; k < 4; k++){
    res[oy+k][ox+k] = total - res[oy+k][ox+k]
    res[oy+k][ox+(4-k-1)] = total - res[oy+k][ox+(4-k-1)]
  }
}

const odd = (n, ox, oy, index, res) => {
  let row = 0
  let col = Math.floor(n / 2)
  for(let i = index + 1; i < n * n + index + 1; i++){
    res[oy+row][ox+col] = i
    if(i%n === 0){
      row++
    }else{
      col++
      row--
    }
    row = (row%n+n)%n
    col = (col%n+n)%n
  }
}
const res = magic(4)
console.log(res)