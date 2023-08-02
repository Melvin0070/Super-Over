score = [0,1,2,3,4,5,6,"w"]

team1BallsFaced=0;
team2BallsFaced=0;
team1Score = 0
team2Score = 0

let t1_scores = document.querySelectorAll("#Ind .balls")
let t2_scores = document.querySelectorAll("#Pak .balls")
let t1_final = document.querySelector("#Ind-score")
let t2_final = document.querySelector("#pvk-score")
let over=1;
let w1 = document.querySelector("#Indi-wick")
let w2 = document.querySelector("#Pak-wick")
let strikeAudio = new Audio("http://bit.ly/so-ball-hit");
let gameOverAudio = new Audio("http://bit.ly/so-crowd-cheer");

wicket1 = 0
wicket2 = 0

function runs() {
    strikeAudio.pause();
    strikeAudio.currentTime = 0;
    strikeAudio.play();

    let randomNumber = Math.floor(Math.random() * score.length);
    
    let outcome=score[randomNumber];
    if(over==1){
            if (outcome == "w"){
                wicket1 += 1;
                w1.innerText = wicket1;
                t1_scores[team1BallsFaced].innerText = outcome;
            }
            else {
                t1_scores[team1BallsFaced].innerText = outcome;
                team1Score += randomNumber;
                t1_final.innerText = team1Score;
            }
            if(team1BallsFaced==5 || wicket1==2){
                over=2;
            }
            team1BallsFaced++;
           
    }else if (over==2){
        if (outcome == "w"){
            wicket2 += 1;
            w2.innerText = wicket2;
            t2_scores[team2BallsFaced].innerText = outcome;
        }
        else{
            t2_scores[team2BallsFaced].innerText = outcome;
            team2Score += randomNumber;
            t2_final.innerText = team2Score;
        }
        if(team2BallsFaced==5 || wicket2==2 || team2Score>team1Score){
            over=3;
            gameOver()
        }
        team2BallsFaced++
    }
    


    }
    




function gameOver() {
    gameOverAudio.play()
    if (team1Score > team2Score){
        alert("IND Wins")
    }
    else if (team2Score > team1Score){
        alert("PAK Wins")
    }
    else{
        alert("It's a draw")
    }
}

function reload(){
    location.reload();
}