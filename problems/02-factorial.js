const fact = (num) =>{
    if(num===0){
      return 1;
    }
    else if(num<0){
      return "enter non negative numbers";
    }
    else{
      return num * fact(num-1);
    }
  }
  let res = fact(5);
  console.log(res);