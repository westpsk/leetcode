const magic = (n) => {
  let row = 0
  let col = Math.floor(n / 2)
  const res = []
  for(let i = 0; i < n; i++){
    res[i] = [...Array(n).fill(0)]
  }
  res[row][col] = 1
  for(let k = 2; k < n * n + 1; k++){
    let r = (row - 1 + n)%n
    let l = (col + 1)%n
    if(res[r][l] === 0){
      row = r
      col = l
    }else{
      row = (row + 1)%n
    }
    res[row][col] = k
  }
  return res
}
const res = magic(3)
console.log(res)