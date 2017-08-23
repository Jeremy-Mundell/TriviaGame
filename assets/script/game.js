

var panel = $('#quiz-area'); 
$(document).on('click', '#start', function(event) {
    game.startGame();
});


var questionsArray = [{

  question: "What is the name of Best-Selling author of Game of Thrones?",
  answers: ["Stephen King", "George R.R. Martin", "George Orwell", "George Elliot"],
  
  correctAnswer: 1
}, {

  question: "What is the name of the Onion Knight?",
  answers: ["Jamie Lannister", "Davos Seaworth", "Euron Greyjoy", "Podrick Payne"],
  
  correctAnswer: 1
}, {

  question: "Who is the current King in the North?",
  answers: ["Tyrion Lannister", "Sandor Clegane", "Walter Frey", "Jon Snow"],
  
  correctAnswer: 3
}, {

  question: "What noble house always pays their debts? ",
  answers: ["Lannister", "Tyrell", "Stark", "Frey"],
  
  correctAnswer: 0
}, {

  question: "What noble house rode dragons to war? ",
  answers: ["Stark", "Lannister", "Targaryen", "Bolton"],
  
  correctAnswer: 3
}, {

  question: "What are the undead creatures beyond the northern wall called?",
  answers: ["Zombies", "White-walkers", "Vampires", "White-talkers"],
  
  correctAnswer: 1
}, {

  question: "What sharp material is discovered to destroy the undead creatures of the north?",
  answers: ["Dragon glass", "Glass", "Stained glass", "Swords"],
  
  correctAnswer: 0
},

  {

  question: "Who was married to Tyrion Lannister as a joke?",
  answers: ["Arya Stark", "Cersei Lannister", "Breinne Tarth", "Sansa Stark"],
  
  correctAnswer: 3 
},

  {

  question: "How did Viserys Targaryen die?",
  answers: ["Natural causes", "Sword fight", "Drowning in molten gold", "Dragon fire"],
  
  correctAnswer: 2

},

  {

  question: "What is the name of the 3rd book in the series of a Song of Fire and Ice?",
  answers: ["A Game of Thrones", "A Storm of Swords", "A Feast for Crows", "The Shining"],
  
  correctAnswer: 1

}]



	var game = {

    // Game Variables

    questions: questionsArray,  
    questionNum: 0,
    correct: 0,
   	wrong: 0,
    counter:60,

  	// Timer function. Counts down

 // function stop() {

 //      //  Clears our intervalId
 //      //  We just pass the name of the interval
 //      //  to the clearInterval function.
 //      clearInterval(intervalId);
 //    }

  	countdown: function(){
    game.counter--;
    $('#counter-number').html(game.counter);

    if (game.counter === 0){ // clearInterval(intervalId);
    
      alert('TIME IS UP!');
      game.done();
    }
  },




  	// after pressing start. Game page appends with questions and timer starts
    startGame: function()  {
    	timer = setInterval(game.countdown, 1000);

    	$('#sub-wrap').prepend('<h2>Remaining Time: <span id="counter-number">60</span> Seconds</h2>');
    	$('#start').remove();
    	$('#question_div').append("<h1>GO!</h1>");
    	for (var i = 0; i < questionsArray.length; i++) {
    		$('#question_div').append('<h2>' + questionsArray[i].question + '</h2>');
    		for (var t = 0; t < 4; t++) {
    			$('#question_div').append('<input type="radio" name="answers'+i+'">' + questionsArray[i].answers[t] );
    		}
		}

},

// stop the timer and check the questions......
done: function() {

    clearInterval(timer);
  }

};  

  

 





	// var newDiv = document.createElement("div")
	// //reference the tag 
	// newDiv.className = "addedClass"
	// var textHere = document.createTextNode("Write text here...")
	// newDiv.appendChild(textHere)
	// var addHere = document.getElementById("addHere")
	// // on this header id add a new div
	// addHere.appendChild(newDiv)