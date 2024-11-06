let gap = 70;

let cNote;
let dbNote;
let dNote;
let ebNote;
let eNote;
let fNote;
let gbNote;
let gNote;
let abNote;
let aNote;
let bbNote;
let bNote;

let noteChosen;

let notes = [];


function preload() {
    cNote = loadSound("piano notes/C.mp3");
    dbNote = loadSound("piano notes/Db.mp3");
    dNote = loadSound("piano notes/D.mp3");
    ebNote = loadSound("piano notes/Eb.mp3");
    eNote = loadSound("piano notes/E.mp3");
    fNote = loadSound("piano notes/F.mp3");
    gbNote = loadSound("piano notes/Gb.mp3");
    gNote = loadSound("piano notes/G.mp3");
    abNote = loadSound("piano notes/Ab.mp3");
    aNote = loadSound("piano notes/A.mp3");
    bbNote = loadSound("piano notes/Bb.mp3");
    bNote = loadSound("piano notes/B.mp3");

    notes = [cNote, dbNote, dNote, ebNote, eNote, fNote, gbNote, gNote, abNote, aNote, bbNote, bNote];
}

function setup() {
    createCanvas(910, 800);
}

function draw() {
    background(150);
    for (let i = 0; i< 12; i++) {
        rectMode(CORNER);
        fill("white");
        stroke("black");
        strokeWeight(3);
        rect(38 + i * gap, 200, 60, 60, 5);
    }

    rectMode(CENTER);
    rect(width/2, height / 1.333333, 160, 80, 5);
    text("random Note", 384, 603);
    rectMode(CORNER);


    textSize(25)
    text("C", 60, 240);
    text("Db", 124, 240);
    text("D", 200, 240);
    text("Eb", 264, 240);
    text("E", 340, 240);
    text("F", 410, 240);
    text("Gb", 474, 240);
    text("G", 550, 240);
    text("Ab", 614, 240);
    text("A", 690, 240);
    text("Bb", 754, 240);
    text("B", 830, 240);

    for (let i = 0; i< 12; i++) {
        if (mouseX > 38 + i * gap && mouseX < 98 + i * gap) {
            if (mouseY > 200 && mouseY < 260) {
                noFill();
                stroke("white");
                rect(38 + i * gap, 200, 60, 60, 5);
            }
        }
    }

    if (mouseX > width/2 - 80 && mouseX < width/2 + 80) {
        if (mouseY > height / 1.333333 - 40 && mouseY < height / 1.333333 + 40) {
            noFill();
            stroke("white");
            rectMode(CENTER);
            rect(width/2, height / 1.333333, 160, 80, 5);
            rectMode(CORNER);
        }
    }
}

function mouseClicked() {
    for (let i = 0; i< 12; i++) {
        if (mouseX > 38 + i * gap && mouseX < 98 + i * gap) {
            if (mouseY > 200 && mouseY < 260) {
                notes[i].play();
            }
        }
    }
    
    if (mouseX > width/2 - 80 && mouseX < width/2 + 80) {
        if (mouseY > height / 1.333333 - 40 && mouseY < height / 1.333333 + 40) {
            chooseNote();
        }
    }
}

function chooseNote () {
    noteChosen = Math.floor(Math.random() * 12);
    notes[noteChosen].play();
}