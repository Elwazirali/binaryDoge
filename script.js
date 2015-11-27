// Code goes here

// Code goes here



var MainController = function($scope) {
  var count = 0;
  var answer = null;
  var input = null;
  var obj = {val:null, cels:null, val2:null, fehr:null}
  
  function roundToTwo(num) {    
    return +(Math.round(num + "e+2")  + "e-2");
}
  
  var toBinary = function(number){
    number = number.toString();
    var length = number.length;
	
	for(var i=0; i<number.length; i++)
    {
      
      if(number[length-1]==1)
      {
        count+=Math.pow(2,i);
      }
      else if(number[length-1] > 1 )
      {
        return "invalid input. Come on bro, just type in some binary code.";
      }
      length--;
      
    }
    answer = count;
    count=0;
    return answer;
   
}  
    
  var toNumber = function(likes){
          input = likes;
          obj.val = toBinary(input);
          input=0;
   
  }
  
  $scope.toNumber = toNumber;
  $scope.obj = obj;

};
