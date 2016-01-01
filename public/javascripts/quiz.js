


//var quiz= require('quiz_data.json');

(function(){

var app= angular.module('myquiz',[]);
app.controller('quizCTRL',['$scope','$http','$sce',function($scope,$http,$sce){

$scope.score= 0;
$scope.activeq=-1;
$scope.activeqa=0;
$scope.perc=0;




$http.get('/fulldata').then(function(quizdata){
$scope.myquestion=quizdata.data;
$scope.totalquestions=$scope.myquestion.length;
$scope.q1=$scope.myquestion[0].answers;
});

    $scope.selectans=function(qIndex,aIndex) {


        var questionstate = $scope.myquestion[qIndex].questionstate;
        if (questionstate  != 'answered') {
            $scope.myquestion[qIndex].selectedAnswer = aIndex;
            var correctans = $scope.myquestion[qIndex].correct;
            $scope.myquestion[qIndex].correctans= correctans;
            if (aIndex === correctans) {
                $scope.myquestion[qIndex].correctness = 'correct';
                $scope.score += 1;

            }
            else {
                $scope.myquestion[qIndex].correctness = 'incorrect';
            }
            $scope.myquestion[qIndex].questionstate = 'answered';

        }
        $scope.perc=(($scope.score/$scope.totalquestions)*100).toFixed(2);


    }

    $scope.isSelected = function(qIndex,aIndex){
        return $scope.myquestion[qIndex].selectedAnswer === aIndex;
    }
    $scope.isCorrect = function(qIndex,aIndex){
        return $scope.myquestion[qIndex].correctans === aIndex;
    }
    $scope.selectContinue = function(){
        return $scope.activeq +=1;

    }

}]);

})()