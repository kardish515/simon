import './bootstrap.css';
import './styles.css';
import { Simon } from './simon.js';

var simonTurn;
var clickCounter;
var clickSequence = [];

function simonDisplay(simon, counter, i=0){
  if (i < counter){
    setTimeout(function() {
      $("#simon-display").text(simon.colorArray[i]).show().delay(5000).hide(1);
      simonDisplay(simon, counter, i+1);
    }, 300);
  }
}

$(document).ready(function(){
  var simon = new Simon();
  simonTurn = simon.turn();
  simonDisplay(simon, simon.colorArray.length);
  clickCounter = 0;
  clickSequence = [];
  $(".btn").click(function(){
    if(clickCounter < simonTurn.length){
      clickCounter ++;
      var lastClicked = this.id;
      clickSequence.push(lastClicked);
      if(clickCounter === simonTurn.length){
        if (simonTurn.join("") === clickSequence.join("")) {
          alert("right");
        }
        else {
          alert("wrong");
          simon = new Simon();
        }
        simonTurn = simon.turn();
        simonDisplay(simon, simon.colorArray.length);
        clickCounter = 0;
        clickSequence = [];
      }
    }
  });
});
