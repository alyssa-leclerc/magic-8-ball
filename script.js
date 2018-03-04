$(document).ready(function(){

	var magic8Ball = {};

	magic8Ball.listOfAnswers = ["Yes definitely", "Without a doubt", "Yep", "Most likely", "Ask again later", "Cannot predict now", "Don't count on it", "Very doubtful"];

	$("#answer").hide();

	magic8Ball.askQuestion = function(question){
		$("#answer").fadeIn(4000);
		var randomNumber = Math.random();
		var randomNumberArray = randomNumber * this.listOfAnswers.length;
		var randomIndex = Math.floor(randomNumberArray);
		var answer = this.listOfAnswers[randomIndex];

		$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
		$("#answer").text( answer );

		console.log(question);
		console.log(answer);
	};

	var onClick = function() {
		$("#answer").hide();

		$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");

		setTimeout(
			function() {
				var question = prompt("ASK A YES/NO QUESTION!")
				magic8Ball.askQuestion(question)
	}, 500);
		$("#8ball").effect( "shake" );
	};

	$("#questionButton").click( onClick );
});
