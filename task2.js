//написать модуль,который способен выполнять операции с числами любой длины: 4 метода 
//для сложения, умножения, вычитания и деления
//класс 
class OperationNum {
  constructor(a,b) {
    this.a = a;
    this.b = b
  }
    
  
//сложениe

sum() {
let a = [...this.a].reverse()
let b = [...this.b].reverse()

for (let i = 0; i < b.length; ++i) {
  if ((a[i] = ~~a[i] + ~~b[i]) > 9) {
    a[i] -= 10
    b[i+1] = ~~b[i+1] + 1
  }
}

return a.reverse().join("");
}



//вычитание
difference() {
let max;
let min;
let a = this.a;
let b = this.b;

    if(+a >= +b) {
   max=a.split('').reverse();
   min=b.split('').reverse();
    } else if (+b > +a) {
  max = b.split('').reverse();
  min = a.split('').reverse();
    }

       let result = [];
    for (let i = 0, b = 0, c = 0; i < max.length; i++) {
        b = max[i] - (min[i] || 0) + c;
        result[i] = b < 0 ? (c = -1, 10 + b) : (c = 0, b)
    }
    
    result = result.reverse(). join('').replace(/^0+/, '');
  if(+b > +a){
   result = '-'+result;
    } else if(a === b) {
    result = 0;
    }
   return result;
}


//умножение 
multiply() {
let aArr = this.a.split('').reverse();
let bArr = this.b.split('').reverse();

let result = [];
for (let i = 0; i < aArr.length; i++) {
  for (let j = 0; j < bArr.length; j++) {
    let m = aArr[i] * bArr[j];
    result[i + j] = (result[i + j]) ? result[i + j] + m : m;
  }
}

for (let i = 0; i < result.length; i++) {
  let num = result[i] % 10;
  let move = Math.floor(result[i] / 10);
  result[i] = num;

  if (result[i + 1])
    result[i + 1] += move;
  else if (move != 0)
    result[i + 1] = move;
}

return result.reverse().join('');
}      

}

let obj = new OperationNum('12999999999999999999999999', '1100000000000');
obj.sum();
obj.difference();
obj.multiply()