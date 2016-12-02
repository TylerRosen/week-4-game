//Variables

//Computer chooses random #
var randomNumber;

//Random value for each crystal
var garnetNumber;
var amethystNumber;
var pearlNumber;
var sapphireNumber;

//Wins, Losses
var wins= 0;
var losses= 0;
var total= 0;

//Assigning variables to page
$("#Wins").text(wins);
$("#Losses").text(losses);

//Setting start conditions
function startgame() {
	total=0;
	randomNumber=Math.floor(Math.random()* ((120-19)+1) + 19);
	console.log(randomNumber);
	garnetNumber= Math.floor(Math.random()* ((12-1)+1) + 1);
	console.log(garnetNumber);
	amethystNumber= Math.floor(Math.random()* ((12-1)+1) + 1);
	console.log(amethystNumber);
	pearlNumber = Math.floor(Math.random()* ((12-1)+1) + 1);
	console.log(pearlNumber);
	sapphireNumber = Math.floor(Math.random()* ((12-1)+1) + 1);
	console.log(sapphireNumber);

	var h = $("<h2>").text("Number: " + randomNumber);
	$('#Number').html(h);
	$("#Total").text(total);
}

//Starting game
 startgame();

//When each crystal is clicked...
$("#Garnet, #Amethyst, #Pearl, #Sapphire").on("click", function() {

//Adding values to total

	if ($(this).attr("id") == 'Garnet') {
		$("#Total").text(garnetNumber + total);
		total += (garnetNumber);
	}

	if ($(this).attr("id") == 'Amethyst') {
		$("#Total").text(amethystNumber + total);
		total += (amethystNumber);
	}

	if ($(this).attr("id") == 'Pearl') {
		$("#Total").text(pearlNumber + total);
		total += (pearlNumber);
	}

	if ($(this).attr("id") == 'Sapphire') {
		$("#Total").text(sapphireNumber + total);
		total += (sapphireNumber);
	}

//Win/Lose conditions

	if (total == randomNumber) {
		wins++;
		$("#Wins").text(wins);
		 console.log("You Win!");
		 startgame()

	}else if (total > randomNumber) {
		losses++;
		 $("#Losses").text(losses);
		 console.log("you lose!");
		 startgame()
 	}

})