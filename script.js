 //1.Пошук середнього арифметичного числа
 const arr = `134tyu567!!!vbnm890...22`; 
 function seachAverage(arr){
 let j = 1;
 let sum = 0;
 let average = 0;//середне-арифметичне числових елементів масиву
 
 for (let i=0; i <= arr.length; i++){
     if(Number(arr[i]))
    { sum += +arr[i];
     j ++;}
     continue}
 console.log(sum,j)//сума чисел масиву та кількість цифр
 average = sum/j;
 console.log(average);}
 const mass=`670poimn6789vc4vb43x/78bnmbv`
seachAverage(mass);

//2.Математичні дії в змінній
      
function doMath(){
    let x = +(prompt(`Input numeric 'x'`));
    let y = +(prompt(`Input numeric 'y'`));
     let znak = prompt(`Input operation sign:+, -, *, /, %, ^ (exponentiation ) `);
     let oper;
     switch(znak)
     {case "+":
       oper = x+y;
       break;
      case "-":
        oper=x-y;
        break;
      case "*":
       oper=x*y;
       break;
       case "/":
         oper=x/y;
         break;
       case "%":
         oper=x%y;
         break;
       case "^":
         oper=x**y;
         break;
     }
     console.log(oper);
     alert(`${oper}`)
    }
    doMath();

    //3.Заповнення масиву
    function fillArray(){
        var M = +prompt('Enter the array length');
        var N = +prompt('Enter number of inner arrays ');
       
          let arrM = []; // создаем пустой массив длины M
        for (var i = 0; i < M; i++) {
          let arrN = [];
          for (let j=0;j < N;j++) {
             arrN[j] = prompt('enter the number');}
             arrM[i] = arrN + `,`;}
             console.log(arrM)};
             fillArray();
       
        //4.Функція видалення.
     function remuveElem(simb,res){
        var simb = '';
       simb = prompt(` input row`);
      var arrMas =  Array.from(simb);
        var res=[];
      res = prompt(`What characters to removу?`);
        var arrNas =Array.from(res);
      for (let i=0;i<arrMas.length;i++){
          for (let j=0;j<res.length;j++)
       {if(arrMas[i] === res[j]){arrMas.splice([i],1);}
      else continue;}
       arrMas.join(``);}
       console.log(arrMas.join(``))};
       remuveElem();