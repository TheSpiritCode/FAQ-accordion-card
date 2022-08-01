(()=>{
    const faqElements = document.getElementsByClassName('faq-element__question');

    function toggleAnswer(question) {
        let answer = question.nextElementSibling;
        if (answer.parentElement.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
        else {
            answer.style.maxHeight = null;
        }
    }

    function resetQuestionsState() {
        [].forEach.call(faqElements, (question) => {
            question.parentElement.classList.remove('active');
            toggleAnswer(question);
        });
    }

    [].forEach.call(faqElements, (question)=>{
        question.addEventListener('click', ()=>{

            if(question.parentElement.classList.contains('active'))
            {
                question.parentElement.classList.remove('active');
                toggleAnswer(question)
            }
            else {
                resetQuestionsState();

                question.parentElement.classList.add('active');
                toggleAnswer(question);
            }
        })
    })
})();
