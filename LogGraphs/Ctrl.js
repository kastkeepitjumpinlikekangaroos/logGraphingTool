angular.module('app').controller('Ctrl',function($scope){
  $scope.a = 1;
  $scope.b = 1;
  $scope.c = 0;
  $scope.d = 0;
  $scope.exp = 1;
  $scope.base = 10;
  $scope.transformedPointString = "";
  $scope.finishedPointString = "";
  $scope.extraString = "";
  $scope.calculate = function(){

    if ($scope.base == 'e' || $scope.base == 'E'){
      $scope.base = Math.E;
    }
    $scope.a = parseFloat($scope.a);
    behold = $scope.b;
    $scope.b = 1/parseFloat($scope.b);
    $scope.c = parseFloat($scope.c);
    $scope.d = parseFloat($scope.d);
    $scope.exp = parseFloat($scope.exp);
    $scope.base = parseFloat($scope.base);
    var x = 1;
    var y = 0;
    x = x*$scope.b + $scope.c;
    y = y + $scope.d;
    $scope.transformedPointString ="Your transformed point is at (" + x + "," + y + ").";
    y = -$scope.d;
    y = y/($scope.exp*$scope.a);
    y = Math.pow($scope.base, y);
    y = y*$scope.b;
    y = y+$scope.c;
    y = Math.pow(y, (1/$scope.exp))
    $scope.finishedPointString = "Your  x intercept is " + y + ". Your equation of the asymptote is x = " + $scope.c + ".";
    if ($scope.exp%2 == 0){
    $scope.extraString = "Your other x intercept is x = " + (-y);
    $scope.b = behold;
    }
    else{
      $scope.extraString = "";
    }
  }
})
