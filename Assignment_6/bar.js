function Bar(id) {
    this.display = function(){
        noStroke();
        fill(clr[id]);
        rect(xbar[id], 50, windowWidth/numBars, windowHeight);
    }
    this.played = function() {
        if(mouseY > 50 && mouseX > xBar[id] && mouseX < (xBar[id] + (windowWidth/numBars))){
            polySynth.play(notes[id], 0.5, 0,0.2);
        }
    }
}