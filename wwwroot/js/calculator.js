var submit = document.getElementById("submitButton");


submit.addEventListener("click", function () {
    totalscore = ((document.getElementById("assignments").value * 0.5) + (document.getElementById("groupproject").value * 0.1) + (document.getElementById("quizzes").value * 0.1) +
        (document.getElementById("exams").value * 0.2) + (document.getElementById("intex").value * 0.1))

    if (totalscore >= 94) {
        finalgrade = "A"
    }
    else if (totalscore >= 90 && totalscore < 94)
        finalgrade = "A-"
    else if (totalscore >= 87 && totalscore < 90)
        finalgrade = "B+"
    else if (totalscore >= 84 && totalscore < 87)
        finalgrade = "B"
    else if (totalscore >= 80 && totalscore < 84)
        finalgrade = "B-"
    else if (totalscore >= 77 && totalscore < 80)
        finalgrade = "C+"
    else if (totalscore >= 74 && totalscore < 77)
        finalgrade = "C"
    else if (totalscore >= 70 && totalscore < 74)
        finalgrade = "C-"
    else if (totalscore >= 67 && totalscore < 70)
        finalgrade = "D+"
    else if (totalscore >= 64 && totalscore < 67)
        finalgrade = "D"
    else if (totalscore >= 60 && totalscore < 64)
        finalgrade = "D-"
    else
        finalgrade = "E"
        

    alert("Total Score = " + ((document.getElementById("assignments").value * 0.5) + (document.getElementById("groupproject").value * 0.1) + (document.getElementById("quizzes").value * 0.1) +
        (document.getElementById("exams").value * 0.2) + (document.getElementById("intex").value * 0.1)) +
        "\nFinal Grade = " + finalgrade)
});