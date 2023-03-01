//Создаем класс для товаров
class Product {
  constructor (name, price, quantity, description)  {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.description = description;
  }}



//наполняем массив товарами
const product1 = new Product('курfdтка', 2, 5, 'новая красивая женская курткаabc');
const product2 = new Product('fdшорты', 3500, 5, 'удобные мужские шортыabc');
const product3 = new Product('пппfdm', 2, 5, 'gggabc');
let arr =[];
arr.push(product1);
arr.push(product2);
arr.push(product3);



//функция-фильтр
function filter(str1, arr) {
  let arrFilter = str1.replace(/(=|>=|<=|>|<)/g, '$1-').split('&');
  
  const valuesArr = arrFilter.map(
   elem => ({
     property: elem.split
      ('-')[0],
     operation: elem.split('-')[1],
     value: elem.split('-')[2]
  })
  )
  //количество фильтров равно длине массива valuesArr
  const countValues = valuesArr.length;
  
  let count;//счётчик для количества совпадений продукта с требуемыми свойствами;
  
  let result = []; //возвращаемый массив с подходящими элементами
  
    for(let i=0; i<arr.length; i++){ 
      count = 0;
      for(let j=0; j<valuesArr.length;j++) {
        //начинаем сравнение с name
        if(valuesArr[j].property === "name") {
         if(valuesArr[j].operation === 'starts' && arr[i].name.startsWith(valuesArr[j].value)) {
        count ++;
        if(count === countValues) {
        result.push(arr[i])
        }   
     } else if(valuesArr[j].operation === "ends" && arr[i].name.endsWith(valuesArr[j].value)) {
        count ++;
        if(count===countValues) {
        result.push(arr[i]);
        }   
     }  else if(valuesArr[j].operation === 'contains' && !arr[i].name.endsWith(valuesArr[j].value) && !arr[i].name.startsWith(valuesArr[j].value) && arr[i].name.includes(valuesArr[j].value)) {
      count ++;
      if(count === countValues) {
        result.push(arr[i]);
      }
        }
      }//заканчиваем if с name;
  
  //начинаем if для description 
  if(valuesArr[j].property === 'description')   {
        if(valuesArr[j].operation === 'starts' && arr[i].description.startsWith(valuesArr[j].value)) {
      count ++;
      if(count===countValues) {
       result.push(arr[i]);
      }   
   } else if(valuesArr[j].operation === "ends" && arr[i].description.endsWith(valuesArr[j].value)) {
      count++;
    if(count===countValues) {
      result.push(arr[i])
      }   
   }  else if(valuesArr[j].operation === 'contains' && !arr[i].description.endsWith(valuesArr[j].value) && !arr[i].name.startsWith(valuesArr[j].value) &&              arr[i].description.includes(valuesArr[j].value)) {
      count ++;
     if(count === countValues) {
       result.push(arr[i])
     }
      }
    }//заканчиваем if с description
        
       // начинаем if для цены (=,>,<,>=,<=) (price)
      if(valuesArr[j].property === 'price') {
     if(valuesArr[j].operation === '=' && arr[i].price === +(valuesArr[j].value)) {
     count ++;
       if(count===countValues) {
      result.push(arr[i]);
       }   
     } else if(valuesArr[j].operation === ">" && arr[i].price > + (valuesArr[j].value)) {
      count +=1;
      if(count===countValues) {
      result.push(arr[i]);
      }   
  }  else if(valuesArr[j].operation === "<" && arr[i].price < + (valuesArr[j].value)){
     count++;
     if(count === countValues) {
       result.push(arr[i]);
     }
        } 
     else if(valuesArr[j].operation === "<=" && arr[i].price <= + (valuesArr[j].value)){
     count++;
     if(count === countValues) {
      result.push(arr[i]);
     }
       }  
     else if(valuesArr[j].operation === ">=" && arr[i].price >= + (valuesArr[j].value)){
     count++;
     if(count === countValues) {
     result.push(arr[i]);
     }
      }   
     } //заканчиваем if с price 
      
     //начинаем if cquantity
     if(valuesArr[j].property === 'quantity') {
     if(valuesArr[j].operation === '=' && arr[i].quantity === +(valuesArr[j].value)) {
       count ++;
       if(count === countValues) {
         result.push(arr[i]);
       }
    } 
     else if(valuesArr[j].operation === ">" && arr[i].quantity > +(valuesArr[j].value)) {
       count ++;
       if(count === countValues) {
      result.push(arr[i]);
      }   
     }  
     else if(valuesArr[j].operation === "<" && arr[i].quantity < +(valuesArr[j].value)){
      count++;
     if(count === countValues) {
      result.push(arr[i]);
     }
      } 
       else if(valuesArr[j].operation === "<=" && arr[i].quantity <= + (valuesArr[j].value)){
    count++;
    if(count === countValues) {
       result.push(arr[i]);
     }
       }  
      else if(valuesArr[j].operation === ">=" && arr[i].quantity >= + (valuesArr[j].value)){
    count++;
     if(count === countValues) {
     result.push(arr[i])
     }
       }   
     } //заканчиваем сравнение с quantity
        //заканчиваем два цикла
    }
      
    }
   return result;
   
  }
  
  //строка для фильтрации и вызов функции
  let str1 = "name-contains-fd&price-=2&quantity->=5&description-ends-abc";
  filter(str1, arr);
  
  