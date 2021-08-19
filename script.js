const labelA = document.getElementById("labelA")
const labelB = document.getElementById("labelB")
const labelC = document.getElementById("labelC")
const labelD = document.getElementById("labelD")
const labelQuestion = document.getElementById("labelQuestion")
// Index Soal
let i = 0;
// Value Jawaban Benar
let points = 0;

// Soal-Soal yang akan Ditampilkan
const quizData=[
    {
        question: 'Which one below is a Programming Language?',
        a: 'Bahasa',
        b: 'English',
        c: 'Javascript',
        d: 'Jawa',
        correct: 'C'
    },
    {
        question: 'Which is not a Programming Language?',
        a: 'Python',
        b: 'C++',
        c: 'C#',
        d: 'HTML',
        correct: 'D'
    },
    {
        question: 'Which variable is used to save a text data?',
        a: 'String',
        b: 'Int',
        c: 'Double',
        d: 'Float',
        correct: 'A'
    },
    {
        question: 'Who is the current President of Indonesia (2021)?',
        a: 'Zhafran Mussyafa',
        b: 'Ishaq Adheltyo',
        c: 'Adam Saipul Adidarma',
        d: 'Joko Widodo',
        correct: 'D'
    },
    {
        question: 'Which is the hardest thing about Programming?',
        a: 'Algorithm',
        b: 'Data Structure',
        c: 'Machine Learning',
        d: 'All of them',
        correct: 'D'
    }
]

// Fungsi untuk memasukkan Soal Quiz kedalam HTML
function loadQuestion(){
    labelQuestion.innerText = quizData[i].question
    labelA.innerText = quizData[i].a
    labelB.innerText = quizData[i].b
    labelC.innerText = quizData[i].c
    labelD.innerText = quizData[i].d    
}
// Fungsi untuk menghitung Score
function checkAnswer(){
    AnswerCheckBox = document.getElementsByName('AnswerCheck');
    // console.log(AnswerCheckBox);
    var j;

    for (j=0;j<AnswerCheckBox.length;j++){
        if (AnswerCheckBox[j].checked == true)
            { 
                if(AnswerCheckBox[j].value == quizData[i].correct)
                {        
                    points++;
                }
                AnswerCheckBox[j].checked = false;
            }
    }  
}

// Fungsi untuk Memperlihatkan Skor Akhir
function showScore(){
    document.querySelectorAll('.answerlist').forEach(e => e.remove());
    document.getElementById("submitbutton").style.cursor = "default"; 
    document.getElementById("labelQuestion").style.padding = "0.5rem 0 0.5rem 0";
    var TotalScore = points/quizData.length*100;

    document.getElementById("labelQuestion").innerText = "Your Total Score";
    document.getElementById("submitbutton").innerText = TotalScore;
}

// Generate Click Function pada Submit Button
document.getElementById("submitbutton").addEventListener("click", function(){
    checkAnswer();
    i++;
    if(i==quizData.length)
    {
        showScore();
        this.removeEventListener('click', arguments.callee);
    }
    else
    {
        loadQuestion();   
    }
});

// Load Question Pertama
loadQuestion();
