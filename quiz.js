function check(){
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    var question7 = document.quiz.question7.value;
    var question8 = document.quiz.question8.value;
    var question9 = document.quiz.question9.value;
    var question10 = document.quiz.question10.value;
    var question11 = document.quiz.question11.value;
    var question12 = document.quiz.question11.value;
    var question13 = document.quiz.question11.value;
    var correct=0;

        if (question1 == "Ben") {
            correct++;
        }
        if (question2 == "joey"){
            correct++;
        }
        if (question3 == "transformation"){
            correct++;
        }
        if (question4 == "who"){
            correct++;
        }
        if (question5 == "tribiani"){
            correct++;
        }
        if (question6 == "No"){
            correct++;
        }
        if (question7 == "3"){
            correct++;
        }
        if (question8 == "hi"){
            correct++;
        }
        if (question9 == "sad"){
            correct++;
        }
        if (question10 == "P"){
            correct++;
        }
        if (question10 == "Y"){
            correct++;
        }
        if (question10 == "bike"){
            correct++;
        }
        if (question10 == "hugsy"){
            correct++;
        }

    var message = ["Nakanaks naman!", "OK PWEDE NA YAN", "Napanood mo ba talaga to?"];
    var pic = ["source/win.gif", "source/midd.gif", "source/loss.gif"];

    var Range;
        if(correct < 5){
            Range = 2;          
        }
        if(correct == 5){
            Range = 1;          
        }
        if(correct > 5){
            Range = 0;          
        }
        


document.getElementById("after_submit").style.visibility="visible";
document.getElementById("message").innerHTML = message[Range];
document.getElementById("number_correct").innerHTML = "You've got " + correct + "  correct";
document.getElementById("pic").src = pic[Range];
}