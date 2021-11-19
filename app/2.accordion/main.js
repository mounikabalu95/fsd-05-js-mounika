let buttons = document.querySelectorAll(".question-btn");
console.log(buttons);

function hideAllQuestionText(){
    let questionTexts = document.querySelectorAll('.question-text');
    console.log(questionTexts);
    questionTexts.forEach(function(questionText){
        questionText.style.dispaly = 'none';
    });
}

function printMe(button) {
  button.addEventListener("click", function(){
    let currentElement = this,
      questionWrapperElement = currentElement.parentNode.parentNode,
      questionTextElement = questionWrapperElement.querySelector(".question-text");
   
      hideAllQuestionText();

     questionTextElement.style.display = 'block';
  });
}

buttons.forEach(printMe);