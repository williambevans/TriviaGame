$('.header').on('click', function () {
    game.start();
})

var questions = [{
    question: "How did Buffalo Bill die?",
    choices: ["Gunshot  ", "Kidney failure  ", "Old age  ", "Staff infection  ", "Heart attack  "],
    answers: "Kidney failure  ",
}, {
    question: "What was the original name of the Statue of Liberty?",
    choices: ["Liberty Enlightening the World  ", "Merica  ", "Our One Light  ", "Mother of America  ", "Liberty Statue  "],
    answers: "Liberty Enlightening the World  ",
}, {
    question: "Who is Mega Man's creator?",
    choices: ["Dr. Evil  ", "Walt Disney  ", "Dr. Light  ", "Dr. Strange  ", "Emmerson  "],
    answers: "Dr. Light  ",
}, {
    question: "What year did we land on the moon?",
    choices: ["1969  ", "1776  ", "1401  ", "1812  ", "1968  "],
    answers: "1969  ",
}, {
    question: "Ketchup was sold in the 1830’s as what?",
    choices: ["Medicine  ", "Condiment  ", "Ant Poison  ", "Ointment  ", "Lotion  "],
    answers: "Medicine  ",
}, {
    question: "What is Mark Twain's real name?",
    choices: ["Samuel Langhorne Clemens  ", "Albert Rothstine  ", "Jacob Wihitingwell  ", "Jerome Tampstein III  ", "Aldous Huxley Sandmainerd  "],
    answers: "Samuel Langhorne Clemens  ",
}, {
    question: "What is odontophobia the fear of?",
    choices: ["Dentistry  ", "Odometers  ", "Javascript  ", "Rat Tails  ", "Toothlessness  "],
    answers: "Dentistry  ",
}, {
    question: "Winkle is a species of edible what?",
    choices: ["Sea Snails  ", "Mexican Melon  ", "Oyster  ", "Candy  ", "Tiny Mammal  "],
    answers: "Sea Snails  ",
}, {
    question: "What do you have if you suffer from podobromhidrosis?",
    choices: ["Smelly Feet  ", "Swollen Palms  ", "Itchy Tongue  ", "Eye Pain  ", "Green Blood  "],
    answers: "Smelly Feet  ",
}];


var game = {
    correct: 0,
    incorrect: 0,
    counter: 30,

    timer: function () {
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter <= 0) {
            game.tallyScore();
        }
    },

    start: function () {
        timer = setInterval(game.timer, 1000);
        $('#time-left').prepend('<h2>Time Remaining: <span id="counter">30</span> Seconds</h2>');
        $('.header').remove();
        for (var q = 0; q < questions.length; q++) {
            $('#questions').append('<h3>' + questions[q].question + '</h3>');
            for (var c = 0; c < questions[q].choices.length; c++) {
                $('#questions').append("<input type='radio' name='question-" + q + "' value= '" + questions[q].choices[c] + "'> " + questions[q].choices[c]);
            }
        }
    },

    tallyScore: function () {
        $.each($("input[name='question-0']:checked"), function () {
            if ($(this).val() == questions[0].answers) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-1']:checked"), function () {
            if ($(this).val() == questions[1].answers) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"), function () {
            if ($(this).val() == questions[2].answers) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"), function () {
            if ($(this).val() == questions[3].answers) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-4']:checked"), function () {
            if ($(this).val() == questions[4].answers) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-5']:checked"), function () {
            if ($(this).val() == questions[5].answers) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        this.result();
    },
    result: function () {
        clearInterval(timer);
        $('.results').append("Correct Answers: " + this.correct + "  " + "      Incorrect Answers: " + this.incorrect);
    }
}