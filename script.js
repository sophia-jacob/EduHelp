function flipCard(card){
    card.classList.toggle("flip");
}

function checkCalcQuiz(){
    let score=0;
    if (document.querySelector('input[name="q1"]:checked')?.value === "cos(x)") score++;
    if (document.querySelector('input[name="q2"]:checked')?.value === "x^3/3+C") score++;
    if (document.querySelector('input[name="q3"]:checked')?.value === "1") score++;
    if (document.querySelector('input[name="q4"]:checked')?.value === "e^x") score++;
    if (document.querySelector('input[name="q5"]:checked')?.value === "x^(n+1)/(n+1) + C") score++;
    document.getElementById("result").textContent = "You score " + score + " out of 5.";
}

function checkBioQuiz(){
    let score=0;
    if (document.querySelector('input[name="q1"]:checked')?.value === "thymine") score++;
    if (document.querySelector('input[name="q2"]:checked')?.value === "electrontransportchain") score++;
    if (document.querySelector('input[name="q3"]:checked')?.value === "lipid") score++;
    if (document.querySelector('input[name="q4"]:checked')?.value === "proteinsynthesis") score++;
    if (document.querySelector('input[name="q5"]:checked')?.value === "mitochondria") score++;
    document.getElementById("result").textContent = "You score " + score + " out of 5.";
}