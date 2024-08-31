const func1 = (callbackfunc) =>{
    let value = 20;
    callbackfunc(value);
  };
  func1(
    function(value){
      console.log("hello world");
      document.querySelector('#header').innerHTML = value;
    }
  );