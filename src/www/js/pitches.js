//*******************************************************************************************************************************
//
// PROJECT:   AMSTERDAM TREES
// UPDATED:   8-9-2022
// ABOUT:     Quit some lines of code, perhaps a class concept would be much better, something for a next version.
//            Basically all the logic to determine pitches is happening here
//            The pitches are sent to Pd in "pitchesString" & "chordString"
//
//*******************************************************************************************************************************
function getPitches(){

  if (modeActive === MODE_ACOUSTIC){
    setAcousticPitches();
    setChordAcoustic();
  } else if (modeActive === MODE_AEOLIAN){
    setAeolianPitches();
    setChordAeolian();
  } else if (modeActive === MODE_ADONAI_MALAKH){
    setAdonaiMalakhPitches();
    setChordAdonaiMalakh();
  } else if (modeActive === MODE_BYZANTINE){
    setByzantinePitches();
    setChordByzantine();
  } else if (modeActive == MODE_DOUBLE_HARMONIC){
    setDoubleHarmonicPitches();
    setChordDoubleHarmonic();
  } else if (modeActive === MODE_ENIGMATIC){
    setEnigmaticPitches();
    setChordEngimatic();
  } else if (modeActive === MODE_AVAHA_RABA){
    setAhavaRabaPitches();
    setChordAhavaRaba();
  } else if (modeActive === MODE_GYPSY){
    setGypsyPitches();
    setChordGypsy();
  } else if (modeActive === MODE_ISTRIAN){
    setIstrianPitches();
    setChordIstrian();
  } else if (modeActive === MODE_NEAPOLITAN){
    setNeopolitanPitches();
    setChordNeopolitan();
  } else if (modeActive === MODE_UKRAINIAN_DORIAN){
    setUkrainianPitches();
    setChordUkrainian();
  } else if (modeActive === MODE_WHOLE_TONE){
    setWholetonePitches();
    setChordWholeTone();
  }
  octaver();
  //fifther();

  pitchesString = pitches.join(' ');
}

function setAcousticPitches(){

  for (i = 0; i < 12; i++) {
     if (ages[i] < 3){
       pitches[i]= 90;
       if (i === 0) { chordRoot = 4;}
     } else if (ages[i] >= 3 && ages[i] < 5){
       pitches[i] = 88;
       if (i === 0) { chordRoot = 3;}
     } else if (ages[i] >= 5 && ages[i] < 10){
       pitches[i] = 85;
       if (i === 0) { chordRoot = 2;}
     } else if (ages[i] >= 10 && ages[i] < 15){
       pitches[i] = 83;
       if (i === 0) { chordRoot = 1;}
     } else if (ages[i] >= 15 && ages[i] < 20){
       pitches[i] = 81;
       if (i === 0) { chordRoot = 0;}
     } else if (ages[i] >= 20 && ages[i] < 25){
       pitches[i] = 79;
       if (i === 0) { chordRoot = 5;}
     } else if (ages[i] >= 25 && ages[i] < 30){
       pitches[i] = 78;
       if (i === 0) { chordRoot = 4;}
     } else if (ages[i] >= 30 && ages[i] < 35){
       pitches[i] = 76;
       if (i === 0) { chordRoot = 3;}
     } else if (ages[i] >= 35 && ages[i] < 40){
       pitches[i] = 73;
       if (i === 0) { chordRoot = 2;}
     } else if (ages[i] >= 40 && ages[i] < 45){
       pitches[i] = 71;
       if (i === 0) { chordRoot = 1;}
     } else if (ages[i] >= 45 && ages[i] < 50){
       pitches[i] = 69;
       if (i === 0) { chordRoot = 0;}
     } else if (ages[i] >= 50 && ages[i] < 55){
       pitches[i] = 67;
       if (i === 0) { chordRoot = 5;}
     } else if (ages[i] >= 55 && ages[i] < 60){
       pitches[i] = 66;
       if (i === 0) { chordRoot = 4;}
     } else if (ages[i] >= 60 && ages[i] < 65){
       pitches[i] = 64;
       if (i === 0) { chordRoot = 3;}
     } else if (ages[i] >= 65 && ages[i] < 70){
       pitches[i] = 61;
       if (i === 0) { chordRoot = 2;}
     } else if (ages[i] >= 70 && ages[i] < 75){
       pitches[i] = 59;
       if (i === 0) { chordRoot = 1;}
     } else if (ages[i] >= 75 && ages[i] < 80){
       pitches[i] = 57;
       if (i === 0) { chordRoot = 0;}
     } else if (ages[i] >= 80 && ages[i] < 85){
       pitches[i]== 55;
       if (i === 0) { chordRoot = 5;}
     } else if (ages[i] >= 85 && ages[i] < 90){
       pitches[i] = 54;
       if (i === 0) { chordRoot = 4;}
     } else if (ages[i] >= 90 && ages[i] < 95){
       pitches[i] = 52;
       if (i === 0) { chordRoot = 3;}
     } else if (ages[i] >= 95 && ages[i] < 100){
       pitches[i] = 49;
       if (i === 0) { chordRoot = 2;}
     } else if (ages[i] >= 100 && ages[i] < 105){
       pitches[i] = 47;
       if (i === 0) { chordRoot = 1;}
     } else if (ages[i] >= 105 && ages[i] < 110){
       pitches[i] = 45;
       if (i === 0) { chordRoot = 0;}
     } else if (ages[i] >= 110 && ages[i] < 120){
       pitches[i] = 43;
       if (i === 0) { chordRoot = 5;}
     } else if (ages[i] >= 120 && ages[i] < 130){
       pitches[i] = 42;
       if (i === 0) { chordRoot = 4;}
     } else if (ages[i] >= 130 && ages[i] < 140){
       pitches[i] = 40;
       if (i === 0) { chordRoot = 3;}
     } else if (ages[i] >= 140 && ages[i] < 150){
       pitches[i] = 37;
       if (i === 0) { chordRoot = 2;}
     } else if (ages[i] >= 150 && ages[i] < 160){
       pitches[i] = 35;
       if (i === 0) { chordRoot = 1;}
     } else {
       pitches[i] = 33;
       if (i === 0) { chordRoot = 0;}
     }
     pitches[i]= pitches[i] + rootOffset;
  }
}
function setAeolianPitches(){

  for (i = 0; i < 12; i++) {

     if (ages[i] < 3){
       pitches[i] = 81;
       if (i === 0) { chordRoot = 0;}
     } else if (ages[i] >= 3 && ages[i] < 5){
       pitches[i] = 79;
       if (i === 0) { chordRoot = 6;}
     } else if (ages[i] >= 5 && ages[i] < 10){
       pitches[i] = 77;
       if (i === 0) { chordRoot = 5;}
     } else if (ages[i] >= 10 && ages[i] < 15){
       pitches[i] = 76;
       if (i === 0) { chordRoot = 4;}
     } else if (ages[i] >= 15 && ages[i] < 20){
       pitches[i] = 74;
       if (i === 0) { chordRoot = 3;}
     } else if (ages[i] >= 20 && ages[i] < 25){
       pitches[i] = 72;
       if (i === 0) { chordRoot = 2;}
     } else if (ages[i] >= 25 && ages[i] < 30){
       pitches[i] = 71;
       if (i === 0) { chordRoot = 1;}
     } else if (ages[i] >= 30 && ages[i] < 35){
       pitches[i] = 69;
       if (i === 0) { chordRoot = 0;}
     } else if (ages[i] >= 35 && ages[i] < 40){
       pitches[i] = 67;
       if (i === 0) { chordRoot = 6;}
     } else if (ages[i] >= 40 && ages[i] < 45){
       pitches[i] = 65;
       if (i === 0) { chordRoot = 5;}
     } else if (ages[i] >= 45 && ages[i] < 50){
       pitches[i] = 64;
       if (i === 0) { chordRoot = 4;}
     } else if (ages[i] >= 50 && ages[i] < 55){
       pitches[i] = 62;
       if (i === 0) { chordRoot = 3;}
     } else if (ages[i] >= 55 && ages[i] < 60){
       pitches[i] = 60;
       if (i === 0) { chordRoot = 2;}
     } else if (ages[i] >= 60 && ages[i] < 65){
       pitches[i] = 59;
       if (i === 0) { chordRoot = 1;}
     } else if (ages[i] >= 65 && ages[i] < 70){
       pitches[i] = 57;
       if (i === 0) { chordRoot = 0;}
     } else if (ages[i] >= 70 && ages[i] < 75){
       pitches[i] = 55;
       if (i === 0) { chordRoot = 6;}
     } else if (ages[i] >= 75 && ages[i] < 80){
       pitches[i] = 53;
       if (i === 0) { chordRoot = 5;}
     } else if (ages[i] >= 80 && ages[i] < 85){
       pitches[i] = 52;
       if (i === 0) { chordRoot = 4;}
     } else if (ages[i] >= 85 && ages[i] < 90){
       pitches[i] = 50;
       if (i === 0) { chordRoot = 3;}
     } else if (ages[i] >= 90 && ages[i] < 95){
       pitches[i] = 48;
       if (i === 0) { chordRoot = 2;}
     } else if (ages[i] >= 95 && ages[i] < 100){
       pitches[i] = 47;
       if (i === 0) { chordRoot = 1;}
     } else if (ages[i] >= 100 && ages[i] < 105){
       pitches[i] = 45;
       if (i === 0) { chordRoot = 0;}
     } else if (ages[i] >= 105 && ages[i] < 110){
       pitches[i] = 43;
       if (i === 0) { chordRoot = 6;}
     } else if (ages[i] >= 110 && ages[i] < 120){
       pitches[i] = 41;
       if (i === 0) { chordRoot = 5;}
     } else if (ages[i] >= 120 && ages[i] < 130){
       pitches[i] = 40;
       if (i === 0) { chordRoot = 4;}
     } else if (ages[i] >= 130 && ages[i] < 140){
       pitches[i] = 38;
       if (i === 0) { chordRoot = 3;}
     } else if (ages[i] >= 140 && ages[i] < 150){
       pitches[i] = 36;
       if (i === 0) { chordRoot = 2;}
     } else if (ages[i] >= 150 && ages[i] < 160){
       pitches[i] = 35;
       if (i === 0) { chordRoot = 1;}
     } else {
       pitches[i] = 33;
       if (i === 0) { chordRoot = 0;}
     }
     pitches[i]= pitches[i] + rootOffset;
  }
}
function setAdonaiMalakhPitches(){

  for (i = 0; i < 12; i++) {
     if (ages[i] < 3){
       pitches[i] = 81;
       if (i === 0) { chordRoot = 0;}
     } else if (ages[i] >= 3 && ages[i] < 5){
       pitches[i] = 79;
       if (i === 0) { chordRoot = 6;}
     } else if (ages[i] >= 5 && ages[i] < 10){
       pitches[i] = 77;
       if (i === 0) { chordRoot = 5;}
     } else if (ages[i] >= 10 && ages[i] < 15){
       pitches[i] = 76;
       if (i === 0) { chordRoot = 4;}
     } else if (ages[i] >= 15 && ages[i] < 20){
       pitches[i] = 74;
       if (i === 0) { chordRoot = 3;}
     } else if (ages[i] >= 20 && ages[i] < 25){
       pitches[i] = 73;
       if (i === 0) { chordRoot = 2;}
     } else if (ages[i] >= 25 && ages[i] < 30){
       pitches[i] = 71;
       if (i === 0) { chordRoot = 1;}
     } else if (ages[i] >= 30 && ages[i] < 35){
       pitches[i] = 69;
       if (i === 0) { chordRoot = 0;}
     } else if (ages[i] >= 35 && ages[i] < 40){
       pitches[i] = 67;
       if (i === 0) { chordRoot = 6;}
     } else if (ages[i] >= 40 && ages[i] < 45){
       pitches[i] = 65;
       if (i === 0) { chordRoot = 5;}
     } else if (ages[i] >= 45 && ages[i] < 50){
       pitches[i] = 64;
       if (i === 0) { chordRoot = 4;}
     } else if (ages[i] >= 50 && ages[i] < 55){
       pitches[i] = 62;
       if (i === 0) { chordRoot = 3;}
     } else if (ages[i] >= 55 && ages[i] < 60){
       pitches[i] = 61;
       if (i === 0) { chordRoot = 2;}
     } else if (ages[i] >= 60 && ages[i] < 65){
       pitches[i] = 59;
       if (i === 0) { chordRoot = 1;}
     } else if (ages[i] >= 65 && ages[i] < 70){
       pitches[i] = 57;
       if (i === 0) { chordRoot = 0;}
     } else if (ages[i] >= 70 && ages[i] < 75){
       pitches[i] = 55;
       if (i === 0) { chordRoot = 6;}
     } else if (ages[i] >= 75 && ages[i] < 80){
       pitches[i] = 53;
       if (i === 0) { chordRoot = 5;}
     } else if (ages[i] >= 80 && ages[i] < 85){
       pitches[i]== 52;
       if (i === 0) { chordRoot = 4;}
     } else if (ages[i] >= 85 && ages[i] < 90){
       pitches[i] = 50;
       if (i === 0) { chordRoot = 3;}
     } else if (ages[i] >= 90 && ages[i] < 95){
       pitches[i] = 49;
       if (i === 0) { chordRoot = 2;}
     } else if (ages[i] >= 95 && ages[i] < 100){
       pitches[i] = 47;
       if (i === 0) { chordRoot = 1;}
     } else if (ages[i] >= 100 && ages[i] < 105){
       pitches[i] = 45;
       if (i === 0) { chordRoot = 0;}
     } else if (ages[i] >= 105 && ages[i] < 110){
       pitches[i] = 43;
       if (i === 0) { chordRoot = 6;}
     } else if (ages[i] >= 110 && ages[i] < 120){
       pitches[i] = 41;
       if (i === 0) { chordRoot = 5;}
     } else if (ages[i] >= 120 && ages[i] < 130){
       pitches[i] = 40;
       if (i === 0) { chordRoot = 4;}
     } else if (ages[i] >= 130 && ages[i] < 140){
       pitches[i] = 38;
       if (i === 0) { chordRoot = 3;}
     } else if (ages[i] >= 140 && ages[i] < 150){
       pitches[i] = 37;
       if (i === 0) { chordRoot = 2;}
     } else if (ages[i] >= 150 && ages[i] < 160){
       pitches[i] = 35;
       if (i === 0) { chordRoot = 1;}
     } else {
       pitches[i] = 33;
       if (i === 0) { chordRoot = 0;}
     }
     pitches[i]= pitches[i] + rootOffset;
  }
}
function setByzantinePitches(){

  for (i = 0; i < 12; i++) {
     if (ages[i] < 3){
       pitches[i] = 100;
       if (i === 0) { chordRoot = 3;}
     } else if (ages[i] >= 3 && ages[i] < 5){
       pitches[i] = 97
       if (i === 0) { chordRoot = 2;}
     } else if (ages[i] >= 5 && ages[i] < 10){
       pitches[i] = 94;
       if (i === 0) { chordRoot = 1;}
     } else if (ages[i] >= 10 && ages[i] < 15){
       pitches[i] = 93;
       if (i === 0) { chordRoot = 0;}
     } else if (ages[i] >= 15 && ages[i] < 20){
       pitches[i] = 89;
       if (i === 0) { chordRoot = 4;}
     } else if (ages[i] >= 20 && ages[i] < 25){
       pitches[i] = 88;
       if (i === 0) { chordRoot = 3;}
     } else if (ages[i] >= 25 && ages[i] < 30){
       pitches[i] = 85;
       if (i === 0) { chordRoot = 2;}
     } else if (ages[i] >= 30 && ages[i] < 35){
       pitches[i] = 82;
       if (i === 0) { chordRoot = 1;}
     } else if (ages[i] >= 35 && ages[i] < 40){
       pitches[i] = 81;
       if (i === 0) { chordRoot = 0;}
     } else if (ages[i] >= 40 && ages[i] < 45){
       pitches[i] = 77;
       if (i === 0) { chordRoot = 4;}
     } else if (ages[i] >= 45 && ages[i] < 50){
       pitches[i] = 76;
       if (i === 0) { chordRoot = 3;}
     } else if (ages[i] >= 50 && ages[i] < 55){
       pitches[i] = 73;
       if (i === 0) { chordRoot = 2;}
     } else if (ages[i] >= 55 && ages[i] < 60){
       pitches[i] = 70;
       if (i === 0) { chordRoot = 1;}
     } else if (ages[i] >= 60 && ages[i] < 65){
       pitches[i] = 69;
       if (i === 0) { chordRoot = 0;}
     } else if (ages[i] >= 65 && ages[i] < 70){
       pitches[i] = 65;
       if (i === 0) { chordRoot = 4;}
     } else if (ages[i] >= 70 && ages[i] < 75){
       pitches[i] = 64;
       if (i === 0) { chordRoot = 3;}
     } else if (ages[i] >= 75 && ages[i] < 80){
       pitches[i] = 61;
       if (i === 0) { chordRoot = 2;}
     } else if (ages[i] >= 80 && ages[i] < 85){
       pitches[i]== 58;
       if (i === 0) { chordRoot = 1;}
     } else if (ages[i] >= 85 && ages[i] < 90){
       pitches[i] = 57;
       if (i === 0) { chordRoot = 0;}
     } else if (ages[i] >= 90 && ages[i] < 95){
       pitches[i] = 53;
       if (i === 0) { chordRoot = 4;}
     } else if (ages[i] >= 95 && ages[i] < 100){
       pitches[i] = 52;
       if (i === 0) { chordRoot = 3;}
     } else if (ages[i] >= 100 && ages[i] < 105){
       pitches[i] = 49;
       if (i === 0) { chordRoot = 2;}
     } else if (ages[i] >= 105 && ages[i] < 110){
       pitches[i] = 46;
       if (i === 0) { chordRoot = 1;}
     } else if (ages[i] >= 110 && ages[i] < 120){
       pitches[i] = 45;
       if (i === 0) { chordRoot = 0;}
     } else if (ages[i] >= 120 && ages[i] < 130){
       pitches[i] = 41;
       if (i === 0) { chordRoot = 4;}
     } else if (ages[i] >= 130 && ages[i] < 140){
       pitches[i] = 40;
       if (i === 0) { chordRoot = 3;}
     } else if (ages[i] >= 140 && ages[i] < 150){
       pitches[i] = 37;
       if (i === 0) { chordRoot = 2;}
     } else if (ages[i] >= 150 && ages[i] < 160){
       pitches[i] = 34;
       if (i === 0) { chordRoot = 1;}
     } else {
       pitches[i] = 33;
       if (i === 0) { chordRoot = 0;}
     }
     pitches[i]= pitches[i] + rootOffset;
  }
}
function setDoubleHarmonicPitches(){

  for (i = 0; i < 12; i++) {
     if (ages[i] < 3){
       pitches[i] = 81;
       if (i === 0) { chordRoot = 0;}
     } else if (ages[i] >= 3 && ages[i] < 5){
       pitches[i] = 80;
       if (i === 0) { chordRoot = 6;}
     } else if (ages[i] >= 5 && ages[i] < 10){
       pitches[i] = 77;
       if (i === 0) { chordRoot = 5;}
     }  else if (ages[i] >= 10 && ages[i] < 15){
       pitches[i] = 76;
       if (i === 0) { chordRoot = 4;}
     } else if (ages[i] >= 15 && ages[i] < 20){
       pitches[i] = 74;
       if (i === 0) { chordRoot = 3;}
     } else if (ages[i] >= 20 && ages[i] < 25){
       pitches[i] = 73;
       if (i === 0) { chordRoot = 2;}
     } else if (ages[i] >= 25 && ages[i] < 30){
       pitches[i] = 70;
       if (i === 0) { chordRoot = 1;}
     } else if (ages[i] >= 30 && ages[i] < 35){
       pitches[i] = 69;
       if (i === 0) { chordRoot = 0;}
     } else if (ages[i] >= 35 && ages[i] < 40){
       pitches[i] = 68;
       if (i === 0) { chordRoot = 6;}
     } else if (ages[i] >= 40 && ages[i] < 45){
       pitches[i] = 65;
       if (i === 0) { chordRoot = 5;}
     } else if (ages[i] >= 45 && ages[i] < 50){
       pitches[i] = 64;
       if (i === 0) { chordRoot = 4;}
     } else if (ages[i] >= 50 && ages[i] < 55){
       pitches[i] = 62;
       if (i === 0) { chordRoot = 3;}
     } else if (ages[i] >= 55 && ages[i] < 60){
       pitches[i] = 61;
       if (i === 0) { chordRoot = 2;}
     } else if (ages[i] >= 60 && ages[i] < 65){
       pitches[i] = 58;
       if (i === 0) { chordRoot = 1;}
     } else if (ages[i] >= 65 && ages[i] < 70){
       pitches[i] = 57;
       if (i === 0) { chordRoot = 0;}
     } else if (ages[i] >= 70 && ages[i] < 75){
       pitches[i] = 56;
       if (i === 0) { chordRoot = 6;}
     } else if (ages[i] >= 75 && ages[i] < 80){
       pitches[i] = 53;
       if (i === 0) { chordRoot = 5;}
     } else if (ages[i] >= 80 && ages[i] < 85){
       pitches[i]== 52;
       if (i === 0) { chordRoot = 4;}
     } else if (ages[i] >= 85 && ages[i] < 90){
       pitches[i] = 50;
       if (i === 0) { chordRoot = 3;}
     } else if (ages[i] >= 90 && ages[i] < 95){
       pitches[i] = 49;
       if (i === 0) { chordRoot = 2;}
     } else if (ages[i] >= 95 && ages[i] < 100){
       pitches[i] = 46;
       if (i === 0) { chordRoot = 1;}
     } else if (ages[i] >= 100 && ages[i] < 105){
       pitches[i] = 45;
       if (i === 0) { chordRoot = 0;}
     } else if (ages[i] >= 105 && ages[i] < 110){
       pitches[i] = 44;
       if (i === 0) { chordRoot = 6;}
     } else if (ages[i] >= 110 && ages[i] < 120){
       pitches[i] = 41;
       if (i === 0) { chordRoot = 5;}
     } else if (ages[i] >= 120 && ages[i] < 130){
       pitches[i] = 40;
       if (i === 0) { chordRoot = 4;}
     } else if (ages[i] >= 130 && ages[i] < 140){
       pitches[i] = 38;
       if (i === 0) { chordRoot = 3;}
     } else if (ages[i] >= 140 && ages[i] < 150){
       pitches[i] = 37;
       if (i === 0) { chordRoot = 2;}
     } else if (ages[i] >= 150 && ages[i] < 160){
       pitches[i] = 34;
       if (i === 0) { chordRoot = 1;}
     } else {
       pitches[i] = 33;
       if (i === 0) { chordRoot = 0;}
     }
     pitches[i]= pitches[i] + rootOffset;
  }
}
function setEnigmaticPitches(){

  for (i = 0; i < 12; i++) {
     if (ages[i] < 3){
       pitches[i] = 89;
       if (i === 0) { chordRoot = 4;}
     } else if (ages[i] >= 3 && ages[i] < 5){
       pitches[i] = 87;
       if (i === 0) { chordRoot = 3;}
     } else if (ages[i] >= 5 && ages[i] < 10){
       pitches[i] = 85;
       if (i === 0) { chordRoot = 2;}
     } else if (ages[i] >= 10 && ages[i] < 15){
       pitches[i] = 82;
       if (i === 0) { chordRoot = 1;}
     } else if (ages[i] >= 15 && ages[i] < 20){
       pitches[i] = 81;
       if (i === 0) { chordRoot = 0;}
     } else if (ages[i] >= 20 && ages[i] < 25){
       pitches[i] = 80;
       if (i === 0) { chordRoot = 5;}
     } else if (ages[i] >= 25 && ages[i] < 30){
       pitches[i] = 77;
       if (i === 0) { chordRoot = 4;}
     } else if (ages[i] >= 30 && ages[i] < 35){
       pitches[i] = 75;
       if (i === 0) { chordRoot = 3;}
     } else if (ages[i] >= 35 && ages[i] < 40){
       pitches[i] = 73;
       if (i === 0) { chordRoot = 2;}
     } else if (ages[i] >= 40 && ages[i] < 45){
       pitches[i] = 70;
       if (i === 0) { chordRoot = 1;}
     } else if (ages[i] >= 45 && ages[i] < 50){
       pitches[i] = 69;
       if (i === 0) { chordRoot = 0;}
     } else if (ages[i] >= 50 && ages[i] < 55){
       pitches[i] = 68;
       if (i === 0) { chordRoot = 5;}
     } else if (ages[i] >= 55 && ages[i] < 60){
       pitches[i] = 65;
       if (i === 0) { chordRoot = 4;}
     } else if (ages[i] >= 60 && ages[i] < 65){
       pitches[i] = 63;
       if (i === 0) { chordRoot = 3;}
     } else if (ages[i] >= 65 && ages[i] < 70){
       pitches[i] = 61;
       if (i === 0) { chordRoot = 2;}
     } else if (ages[i] >= 70 && ages[i] < 75){
       pitches[i] = 58;
       if (i === 0) { chordRoot = 1;}
     } else if (ages[i] >= 75 && ages[i] < 80){
       pitches[i] = 57;
       if (i === 0) { chordRoot = 0;}
     } else if (ages[i] >= 80 && ages[i] < 85){
       pitches[i]== 56;
       if (i === 0) { chordRoot = 5;}
     } else if (ages[i] >= 85 && ages[i] < 90){
       pitches[i] = 53;
       if (i === 0) { chordRoot = 4;}
     } else if (ages[i] >= 90 && ages[i] < 95){
       pitches[i] = 51;
       if (i === 0) { chordRoot = 3;}
     } else if (ages[i] >= 95 && ages[i] < 100){
       pitches[i] = 49;
       if (i === 0) { chordRoot = 2;}
     } else if (ages[i] >= 100 && ages[i] < 105){
       pitches[i] = 46;
       if (i === 0) { chordRoot = 1;}
     } else if (ages[i] >= 105 && ages[i] < 110){
       pitches[i] = 45;
       if (i === 0) { chordRoot = 0;}
     } else if (ages[i] >= 110 && ages[i] < 120){
       pitches[i] = 44;
       if (i === 0) { chordRoot = 5;}
     } else if (ages[i] >= 120 && ages[i] < 130){
       pitches[i] = 41;
       if (i === 0) { chordRoot = 4;}
     } else if (ages[i] >= 130 && ages[i] < 140){
       pitches[i] = 39;
       if (i === 0) { chordRoot = 3;}
     } else if (ages[i] >= 140 && ages[i] < 150){
       pitches[i] = 37;
       if (i === 0) { chordRoot = 2;}
     } else if (ages[i] >= 150 && ages[i] < 160){
       pitches[i] = 34;
       if (i === 0) { chordRoot = 1;}
     } else {
       pitches[i] = 33;
       if (i === 0) { chordRoot = 0;}
     }
     pitches[i]= pitches[i] + rootOffset;
  }
}
function setAhavaRabaPitches(){

  for (i = 0; i < 12; i++) {
     if (ages[i] < 3){
       pitches[i] = 81;
       if (i === 0) { chordRoot = 0;}
     } else if (ages[i] >= 3 && ages[i] < 5){
       pitches[i] = 79;
       if (i === 0) { chordRoot = 6;}
     } else if (ages[i] >= 5 && ages[i] < 10){
       pitches[i] = 78;
       if (i === 0) { chordRoot = 5;}
     } else if (ages[i] >= 10 && ages[i] < 15){
       pitches[i] = 76;
       if (i === 0) { chordRoot = 4;}
     } else if (ages[i] >= 15 && ages[i] < 20){
       pitches[i] = 75;
       if (i === 0) { chordRoot = 3;}
     } else if (ages[i] >= 20 && ages[i] < 25){
       pitches[i] = 72;
       if (i === 0) { chordRoot = 2;}
     } else if (ages[i] >= 25 && ages[i] < 30){
       pitches[i] = 71;
       if (i === 0) { chordRoot = 1;}
     } else if (ages[i] >= 30 && ages[i] < 35){
       pitches[i] = 69;
       if (i === 0) { chordRoot = 0;}
     } else if (ages[i] >= 35 && ages[i] < 40){
       pitches[i] = 67;
       if (i === 0) { chordRoot = 6;}
     } else if (ages[i] >= 40 && ages[i] < 45){
       pitches[i] = 66;
       if (i === 0) { chordRoot = 5;}
     } else if (ages[i] >= 45 && ages[i] < 50){
       pitches[i] = 64;
       if (i === 0) { chordRoot = 4;}
     } else if (ages[i] >= 50 && ages[i] < 55){
       pitches[i] = 63;
       if (i === 0) { chordRoot = 3;}
     } else if (ages[i] >= 55 && ages[i] < 60){
       pitches[i] = 60;
       if (i === 0) { chordRoot = 2;}
     } else if (ages[i] >= 60 && ages[i] < 65){
       pitches[i] = 59;
       if (i === 0) { chordRoot = 1;}
     } else if (ages[i] >= 65 && ages[i] < 70){
       pitches[i] = 57;
       if (i === 0) { chordRoot = 0;}
     } else if (ages[i] >= 70 && ages[i] < 75){
       pitches[i] = 55;
       if (i === 0) { chordRoot = 6;}
     } else if (ages[i] >= 75 && ages[i] < 80){
       pitches[i] = 54;
       if (i === 0) { chordRoot = 5;}
     } else if (ages[i] >= 80 && ages[i] < 85){
       pitches[i]== 52;
       if (i === 0) { chordRoot = 4;}
     } else if (ages[i] >= 85 && ages[i] < 90){
       pitches[i] = 51;
       if (i === 0) { chordRoot = 3;}
     } else if (ages[i] >= 90 && ages[i] < 95){
       pitches[i] = 48;
       if (i === 0) { chordRoot = 2;}
     } else if (ages[i] >= 95 && ages[i] < 100){
       pitches[i] = 47;
       if (i === 0) { chordRoot = 1;}
     } else if (ages[i] >= 100 && ages[i] < 105){
       pitches[i] = 45;
       if (i === 0) { chordRoot = 0;}
     } else if (ages[i] >= 105 && ages[i] < 110){
       pitches[i] = 43;
       if (i === 0) { chordRoot = 6;}
     } else if (ages[i] >= 110 && ages[i] < 120){
       pitches[i] = 42;
       if (i === 0) { chordRoot = 5;}
     } else if (ages[i] >= 120 && ages[i] < 130){
       pitches[i] = 40;
       if (i === 0) { chordRoot = 4;}
     } else if (ages[i] >= 130 && ages[i] < 140){
       pitches[i] = 39;
       if (i === 0) { chordRoot = 3;}
     } else if (ages[i] >= 140 && ages[i] < 150){
       pitches[i] = 36;
       if (i === 0) { chordRoot = 2;}
     } else if (ages[i] >= 150 && ages[i] < 160){
       pitches[i] = 35;
       if (i === 0) { chordRoot = 1;}
     } else {
       pitches[i] = 33;
       if (i === 0) { chordRoot = 0;}
     }
     pitches[i]= pitches[i] + rootOffset;
  }
}
function setGypsyPitches(){

  for (i = 0; i < 12; i++) {
     if (ages[i] < 3){
       pitches[i] = 81;
       if (i === 0) { chordRoot = 0;}
     } else if (ages[i] >= 3 && ages[i] < 5){
       pitches[i] = 79;
       if (i === 0) { chordRoot = 6;}
     } else if (ages[i] >= 5 && ages[i] < 10){
       pitches[i] = 77;
       if (i === 0) { chordRoot = 5;}
     } else if (ages[i] >= 10 && ages[i] < 15){
       pitches[i] = 76;
       if (i === 0) { chordRoot = 4;}
     } else if (ages[i] >= 15 && ages[i] < 20){
       pitches[i] = 75;
       if (i === 0) { chordRoot = 3;}
     } else if (ages[i] >= 20 && ages[i] < 25){
       pitches[i] = 72;
       if (i === 0) { chordRoot = 2;}
     } else if (ages[i] >= 25 && ages[i] < 30){
       pitches[i] = 71;
       if (i === 0) { chordRoot = 1;}
     } else if (ages[i] >= 30 && ages[i] < 35){
       pitches[i] = 69;
       if (i === 0) { chordRoot = 0;}
     } else if (ages[i] >= 35 && ages[i] < 40){
       pitches[i] = 67;
       if (i === 0) { chordRoot = 6;}
     } else if (ages[i] >= 40 && ages[i] < 45){
       pitches[i] = 65;
       if (i === 0) { chordRoot = 5;}
     } else if (ages[i] >= 45 && ages[i] < 50){
       pitches[i] = 64;
       if (i === 0) { chordRoot = 4;}
     } else if (ages[i] >= 50 && ages[i] < 55){
       pitches[i] = 63;
       if (i === 0) { chordRoot = 3;}
     } else if (ages[i] >= 55 && ages[i] < 60){
       pitches[i] = 60;
       if (i === 0) { chordRoot = 2;}
     } else if (ages[i] >= 60 && ages[i] < 65){
       pitches[i] = 59;
       if (i === 0) { chordRoot = 1;}
     } else if (ages[i] >= 65 && ages[i] < 70){
       pitches[i] = 57;
       if (i === 0) { chordRoot = 0;}
     } else if (ages[i] >= 70 && ages[i] < 75){
       pitches[i] = 55;
       if (i === 0) { chordRoot = 6;}
     } else if (ages[i] >= 75 && ages[i] < 80){
       pitches[i] = 53;
       if (i === 0) { chordRoot = 5;}
     } else if (ages[i] >= 80 && ages[i] < 85){
       pitches[i]== 52;
       if (i === 0) { chordRoot = 4;}
     } else if (ages[i] >= 85 && ages[i] < 90){
       pitches[i] = 51;
       if (i === 0) { chordRoot = 3;}
     } else if (ages[i] >= 90 && ages[i] < 95){
       pitches[i] = 48;
       if (i === 0) { chordRoot = 2;}
     } else if (ages[i] >= 95 && ages[i] < 100){
       pitches[i] = 47;
       if (i === 0) { chordRoot = 1;}
     } else if (ages[i] >= 100 && ages[i] < 105){
       pitches[i] = 45;
       if (i === 0) { chordRoot = 0;}
     } else if (ages[i] >= 105 && ages[i] < 110){
       pitches[i] = 43;
       if (i === 0) { chordRoot = 6;}
     } else if (ages[i] >= 110 && ages[i] < 120){
       pitches[i] = 41;
       if (i === 0) { chordRoot = 5;}
     } else if (ages[i] >= 120 && ages[i] < 130){
       pitches[i] = 40;
       if (i === 0) { chordRoot = 4;}
     } else if (ages[i] >= 130 && ages[i] < 140){
       pitches[i] = 39;
       if (i === 0) { chordRoot = 3;}
     } else if (ages[i] >= 140 && ages[i] < 150){
       pitches[i] = 36;
       if (i === 0) { chordRoot = 2;}
     } else if (ages[i] >= 150 && ages[i] < 160){
       pitches[i] = 35;
       if (i === 0) { chordRoot = 1;}
     } else {
       pitches[i] = 33;
       if (i === 0) { chordRoot = 0;}
     }
     pitches[i]= pitches[i] + rootOffset;
  }
}
function setIstrianPitches(){

  for (i = 0; i < 12; i++) {

     if (ages[i] < 3){
       pitches[i] = 81;
       if (i === 0) { chordRoot = 0;}
     } else if (ages[i] >= 3 && ages[i] < 5){
       pitches[i] = 78;
       if (i === 0) { chordRoot = 6;}
     } else if (ages[i] >= 5 && ages[i] < 10){
       pitches[i] = 76;
       if (i === 0) { chordRoot = 5;}
     } else if (ages[i] >= 10 && ages[i] < 15){
       pitches[i] = 75;
       if (i === 0) { chordRoot = 4;}
     } else if (ages[i] >= 15 && ages[i] < 20){
       pitches[i] = 73;
       if (i === 0) { chordRoot = 3;}
     } else if (ages[i] >= 20 && ages[i] < 25){
       pitches[i] = 72;
       if (i === 0) { chordRoot = 2;}
     } else if (ages[i] >= 25 && ages[i] < 30){
       pitches[i] = 70;
       if (i === 0) { chordRoot = 1;}
     } else if (ages[i] >= 30 && ages[i] < 35){
       pitches[i] = 69;
       if (i === 0) { chordRoot = 0;}
     } else if (ages[i] >= 35 && ages[i] < 40){
       pitches[i] = 66;
       if (i === 0) { chordRoot = 6;}
     } else if (ages[i] >= 40 && ages[i] < 45){
       pitches[i] = 64;
       if (i === 0) { chordRoot = 5;}
     } else if (ages[i] >= 45 && ages[i] < 50){
       pitches[i] = 63;
       if (i === 0) { chordRoot = 4;}
     } else if (ages[i] >= 50 && ages[i] < 55){
       pitches[i] = 61;
       if (i === 0) { chordRoot = 3;}
     } else if (ages[i] >= 55 && ages[i] < 60){
       pitches[i] = 60;
       if (i === 0) { chordRoot = 2;}
     } else if (ages[i] >= 60 && ages[i] < 65){
       pitches[i] = 58;
       if (i === 0) { chordRoot = 1;}
     } else if (ages[i] >= 65 && ages[i] < 70){
       pitches[i] = 57;
       if (i === 0) { chordRoot = 0;}
     } else if (ages[i] >= 70 && ages[i] < 75){
       pitches[i] = 54;
       if (i === 0) { chordRoot = 6;}
     } else if (ages[i] >= 75 && ages[i] < 80){
       pitches[i] = 52;
       if (i === 0) { chordRoot = 5;}
     }else if (ages[i] >= 80 && ages[i] < 85){
       pitches[i]== 51;
       if (i === 0) { chordRoot = 4;}
     } else if (ages[i] >= 85 && ages[i] < 90){
       pitches[i] = 49;
       if (i === 0) { chordRoot = 3;}
     } else if (ages[i] >= 90 && ages[i] < 95){
       pitches[i] = 48;
       if (i === 0) { chordRoot = 2;}
     } else if (ages[i] >= 95 && ages[i] < 100){
       pitches[i] = 46;
       if (i === 0) { chordRoot = 1;}
     } else if (ages[i] >= 100 && ages[i] < 105){
       pitches[i] = 45;
       if (i === 0) { chordRoot = 0;}
     } else if (ages[i] >= 105 && ages[i] < 110){
       pitches[i] = 42;
       if (i === 0) { chordRoot = 6;}
     } else if (ages[i] >= 110 && ages[i] < 120){
       pitches[i] = 40;
       if (i === 0) { chordRoot = 5;}
     } else if (ages[i] >= 120 && ages[i] < 130){
       pitches[i] = 39;
       if (i === 0) { chordRoot = 4;}
     } else if (ages[i] >= 130 && ages[i] < 140){
       pitches[i] = 37;
       if (i === 0) { chordRoot = 3;}
     } else if (ages[i] >= 140 && ages[i] < 150){
       pitches[i] = 36;
       if (i === 0) { chordRoot = 2;}
     } else if (ages[i] >= 150 && ages[i] < 160){
       pitches[i] = 34;
       if (i === 0) { chordRoot = 1;}
     } else {
       pitches[i] = 33;
       if (i === 0) { chordRoot = 0;}
     }
     pitches[i]= pitches[i] + rootOffset;
  }
}
function setNeoplitanPitches(){

  for (i = 0; i < 12; i++) {
     if (ages[i] < 3){
       pitches[i] = 81;
       if (i === 0) { chordRoot = 0;}
     } else if (ages[i] >= 3 && ages[i] < 5){
       pitches[i] = 80;
       if (i === 0) { chordRoot = 6;}
     } else if (ages[i] >= 5 && ages[i] < 10){
       pitches[i] = 77;
       if (i === 0) { chordRoot = 5;}
     } else if (ages[i] >= 10 && ages[i] < 15){
       pitches[i] = 76;
       if (i === 0) { chordRoot = 4;}
     } else if (ages[i] >= 15 && ages[i] < 20){
       pitches[i] = 74;
       if (i === 0) { chordRoot = 3;}
     } else if (ages[i] >= 20 && ages[i] < 25){
       pitches[i] = 72;
       if (i === 0) { chordRoot = 2;}
     } else if (ages[i] >= 25 && ages[i] < 30){
       pitches[i] = 70;
       if (i === 0) { chordRoot = 1;}
     } else if (ages[i] >= 30 && ages[i] < 35){
       pitches[i] = 69;
       if (i === 0) { chordRoot = 0;}
     } else if (ages[i] >= 35 && ages[i] < 40){
       pitches[i] = 68;
       if (i === 0) { chordRoot = 6;}
     } else if (ages[i] >= 40 && ages[i] < 45){
       pitches[i] = 65;
       if (i === 0) { chordRoot = 5;}
     } else if (ages[i] >= 45 && ages[i] < 50){
       pitches[i] = 64;
       if (i === 0) { chordRoot = 4;}
     } else if (ages[i] >= 50 && ages[i] < 55){
       pitches[i] = 62;
       if (i === 0) { chordRoot = 3;}
     } else if (ages[i] >= 55 && ages[i] < 60){
       pitches[i] = 60;
       if (i === 0) { chordRoot = 2;}
     } else if (ages[i] >= 60 && ages[i] < 65){
       pitches[i] = 58;
       if (i === 0) { chordRoot = 1;}
     } else if (ages[i] >= 65 && ages[i] < 70){
       pitches[i] = 57;
       if (i === 0) { chordRoot = 0;}
     } else if (ages[i] >= 70 && ages[i] < 75){
       pitches[i] = 56;
       if (i === 0) { chordRoot = 6;}
     } else if (ages[i] >= 75 && ages[i] < 80){
       pitches[i] = 53;
       if (i === 0) { chordRoot = 5;}
     } else if (ages[i] >= 80 && ages[i] < 85){
       pitches[i]== 52;
       if (i === 0) { chordRoot = 4;}
     } else if (ages[i] >= 85 && ages[i] < 90){
       pitches[i] = 50;
       if (i === 0) { chordRoot = 3;}
     } else if (ages[i] >= 90 && ages[i] < 95){
       pitches[i] = 48;
       if (i === 0) { chordRoot = 2;}
     } else if (ages[i] >= 95 && ages[i] < 100){
       pitches[i] = 46;
       if (i === 0) { chordRoot = 1;}
     } else if (ages[i] >= 100 && ages[i] < 105){
       pitches[i] = 45;
       if (i === 0) { chordRoot = 0;}
     } else if (ages[i] >= 105 && ages[i] < 110){
       pitches[i] = 44;
       if (i === 0) { chordRoot = 6;}
     } else if (ages[i] >= 110 && ages[i] < 120){
       pitches[i] = 41;
       if (i === 0) { chordRoot = 5;}
     } else if (ages[i] >= 120 && ages[i] < 130){
       pitches[i] = 40;
       if (i === 0) { chordRoot = 4;}
     } else if (ages[i] >= 130 && ages[i] < 140){
       pitches[i] = 38;
       if (i === 0) { chordRoot = 3;}
     } else if (ages[i] >= 140 && ages[i] < 150){
       pitches[i] = 36;
       if (i === 0) { chordRoot = 2;}
     } else if (ages[i] >= 150 && ages[i] < 160){
       pitches[i] = 34;
       if (i === 0) { chordRoot = 1;}
     } else {
       pitches[i] = 33;
       if (i === 0) { chordRoot = 0;}
     }
     pitches[i]= pitches[i] + rootOffset;
  }
}
function setUkrainianPitches(){

  for (i = 0; i < 12; i++) {
     if (ages[i] < 3){
       pitches[i] = 81;
       if (i === 0) { chordRoot = 0;}
     } else if (ages[i] >= 3 && ages[i] < 5){
       pitches[i] = 79;
       if (i === 0) { chordRoot = 6;}
     } else if (ages[i] >= 5 && ages[i] < 10){
       pitches[i] = 78;
       if (i === 0) { chordRoot = 5;}
     } else if (ages[i] >= 10 && ages[i] < 15){
       pitches[i] = 76;
       if (i === 0) { chordRoot = 4;}
     } else if (ages[i] >= 15 && ages[i] < 20){
       pitches[i] = 75;
       if (i === 0) { chordRoot = 3;}
     } else if (ages[i] >= 20 && ages[i] < 25){
       pitches[i] = 72;
       if (i === 0) { chordRoot = 2;}
     }  else if (ages[i] >= 25 && ages[i] < 30){
       pitches[i] = 71;
       if (i === 0) { chordRoot = 1;}
     } else if (ages[i] >= 30 && ages[i] < 35){
       pitches[i] = 69;
       if (i === 0) { chordRoot = 0;}
     } else if (ages[i] >= 35 && ages[i] < 40){
       pitches[i] = 67;
       if (i === 0) { chordRoot = 6;}
     } else if (ages[i] >= 40 && ages[i] < 45){
       pitches[i] = 66 ;
       if (i === 0) { chordRoot = 5;}
     } else if (ages[i] >= 45 && ages[i] < 50){
       pitches[i] = 64;
       if (i === 0) { chordRoot = 4;}
     } else if (ages[i] >= 50 && ages[i] < 55){
       pitches[i] = 63;
       if (i === 0) { chordRoot = 3;}
     } else if (ages[i] >= 55 && ages[i] < 60){
       pitches[i] = 60;
       if (i === 0) { chordRoot = 2;}
     } else if (ages[i] >= 60 && ages[i] < 65){
       pitches[i] = 59;
       if (i === 0) { chordRoot = 1;}
     } else if (ages[i] >= 65 && ages[i] < 70){
       pitches[i] = 57;
       if (i === 0) { chordRoot = 0;}
     } else if (ages[i] >= 70 && ages[i] < 75){
       pitches[i] = 55;
       if (i === 0) { chordRoot = 6;}
     } else if (ages[i] >= 75 && ages[i] < 80){
       pitches[i] = 54;
       if (i === 0) { chordRoot = 5;}
     } else if (ages[i] >= 80 && ages[i] < 85){
       pitches[i]== 52;
       if (i === 0) { chordRoot = 4;}
     } else if (ages[i] >= 85 && ages[i] < 90){
       pitches[i] = 51;
       if (i === 0) { chordRoot = 3;}
     } else if (ages[i] >= 90 && ages[i] < 95){
       pitches[i] = 48;
       if (i === 0) { chordRoot = 2;}
     } else if (ages[i] >= 95 && ages[i] < 100){
       pitches[i] = 47;
       if (i === 0) { chordRoot = 1;}
     } else if (ages[i] >= 100 && ages[i] < 105){
       pitches[i] = 45;
       if (i === 0) { chordRoot = 0;}
     } else if (ages[i] >= 105 && ages[i] < 110){
       pitches[i] = 43;
       if (i === 0) { chordRoot = 6;}
     } else if (ages[i] >= 110 && ages[i] < 120){
       pitches[i] = 42;
       if (i === 0) { chordRoot = 5;}
     } else if (ages[i] >= 120 && ages[i] < 130){
       pitches[i] = 40;
       if (i === 0) { chordRoot = 4;}
     } else if (ages[i] >= 130 && ages[i] < 140){
       pitches[i] = 39;
       if (i === 0) { chordRoot = 3;}
     } else if (ages[i] >= 140 && ages[i] < 150){
       pitches[i] = 36;
       if (i === 0) { chordRoot = 2;}
     } else if (ages[i] >= 150 && ages[i] < 160){
       pitches[i] = 35;
       if (i === 0) { chordRoot = 1;}
     } else {
       pitches[i] = 33;
       if (i === 0) { chordRoot = 0;}
     }
     pitches[i]= pitches[i] + rootOffset;
  }
}
function setWholetonePitches(){

  for (i = 0; i < 12; i++) {
     if (ages[i] < 3){
       pitches[i] = 89;
       if (i === 0) { chordRoot = 4;}
     } else if (ages[i] >= 3 && ages[i] < 5){
       pitches[i] = 87;
       if (i === 0) { chordRoot = 3;}
     } else if (ages[i] >= 5 && ages[i] < 10){
       pitches[i] = 85;
       if (i === 0) { chordRoot = 2;}
     } else if (ages[i] >= 10 && ages[i] < 15){
       pitches[i] = 83;
       if (i === 0) { chordRoot = 1;}
     } else if (ages[i] >= 15 && ages[i] < 20){
       pitches[i] = 81;
       if (i === 0) { chordRoot = 0;}
     } else if (ages[i] >= 20 && ages[i] < 25){
       pitches[i] = 79;
       if (i === 0) { chordRoot = 5;}
     } else if (ages[i] >= 25 && ages[i] < 30){
       pitches[i] = 77;
       if (i === 0) { chordRoot = 4;}
     } else if (ages[i] >= 30 && ages[i] < 35){
       pitches[i] = 75;
       if (i === 0) { chordRoot = 3;}
     } else if (ages[i] >= 35 && ages[i] < 40){
       pitches[i] = 73;
       if (i === 0) { chordRoot = 2;}
     } else if (ages[i] >= 40 && ages[i] < 45){
       pitches[i] = 71;
       if (i === 0) { chordRoot = 1;}
     } else if (ages[i] >= 45 && ages[i] < 50){
       pitches[i] = 69;
       if (i === 0) { chordRoot = 0;}
     } else if (ages[i] >= 50 && ages[i] < 55){
       pitches[i] = 67;
       if (i === 0) { chordRoot = 5;}
     } else if (ages[i] >= 55 && ages[i] < 60){
       pitches[i] = 65;
       if (i === 0) { chordRoot = 4;}
     } else if (ages[i] >= 60 && ages[i] < 65){
       pitches[i] = 63;
       if (i === 0) { chordRoot = 3;}
     } else if (ages[i] >= 65 && ages[i] < 70){
       pitches[i] = 61;
       if (i === 0) { chordRoot = 2;}
     } else if (ages[i] >= 70 && ages[i] < 75){
       pitches[i] = 59;
       if (i === 0) { chordRoot = 1;}
     } else if (ages[i] >= 75 && ages[i] < 80){
       pitches[i] = 57;
       if (i === 0) { chordRoot = 0;}
     } else if (ages[i] >= 80 && ages[i] < 85){
       pitches[i]== 55;
       if (i === 0) { chordRoot = 5;}
     } else if (ages[i] >= 85 && ages[i] < 90){
       pitches[i] = 53;
       if (i === 0) { chordRoot = 4;}
     } else if (ages[i] >= 90 && ages[i] < 95){
       pitches[i] = 51;
       if (i === 0) { chordRoot = 3;}
     } else if (ages[i] >= 95 && ages[i] < 100){
       pitches[i] = 49;
       if (i === 0) { chordRoot = 2;}
     } else if (ages[i] >= 100 && ages[i] < 105){
       pitches[i] = 47;
       if (i === 0) { chordRoot = 1;}
     } else if (ages[i] >= 105 && ages[i] < 110){
       pitches[i] = 45;
       if (i === 0) { chordRoot = 0;}
     } else if (ages[i] >= 110 && ages[i] < 120){
       pitches[i] = 43;
       if (i === 0) { chordRoot = 5;}
     } else if (ages[i] >= 120 && ages[i] < 130){
       pitches[i] = 41;
       if (i === 0) { chordRoot = 4;}
     } else if (ages[i] >= 130 && ages[i] < 140){
       pitches[i] = 39;
       if (i === 0) { chordRoot = 3;}
     } else if (ages[i] >= 140 && ages[i] < 150){
       pitches[i] = 37;
       if (i === 0) { chordRoot = 2;}
     } else if (ages[i] >= 150 && ages[i] < 160){
       pitches[i] = 35;
       if (i === 0) { chordRoot = 1;}
     } else {
       pitches[i] = 33;
       if (i === 0) { chordRoot = 0;}
     }
     pitches[i]= pitches[i] + rootOffset;
  }
}

function setChordAcoustic(){

  switch(chordRoot){

    case 0:
      chord[0] = 33 + rootOffset;
      chord[1] = 37 + rootOffset;
      chord[2] = 42 + rootOffset;
      break;
    case 1:
      chord[0] = 35 + rootOffset;
      chord[1] = 40 + rootOffset;
      chord[2] = 43 + rootOffset;
      break;
    case 2:
      chord[0] = 37 + rootOffset;
      chord[1] = 42 + rootOffset;
      chord[2] = 45 + rootOffset;
      break;
    case 3:
      chord[0] = 40 + rootOffset;
      chord[1] = 43 + rootOffset;
      chord[2] = 47 + rootOffset;
      break;
    case 4:
      chord[0] = 42 + rootOffset
      chord[1] = 45 + rootOffset;
      chord[2] = 49 + rootOffset;
      break;
    case 5:
      chord[0] = 43 + rootOffset;
      chord[1] = 47 + rootOffset;
      chord[2] = 52 + rootOffset;
    break;
    default:
    chord[0] = 33 + rootOffset;
    chord[1] = 37 + rootOffset;
    chord[2] = 40 + rootOffset;
  }
  chordString = chord.join(' ');
}
function setChordAeolian(){

  switch(chordRoot){

    case 0:
      chord[0] = 33 + rootOffset;
      chord[1] = 36 + rootOffset;
      chord[2] = 40 + rootOffset;
      break;
    case 1:
      chord[0] = 35 + rootOffset;
      chord[1] = 38 + rootOffset;
      chord[2] = 41 + rootOffset;
      break;
    case 2:
      chord[0] = 36 + rootOffset;
      chord[1] = 40 + rootOffset;
      chord[2] = 43 + rootOffset;
      break;
    case 3:
      chord[0] = 38 + rootOffset;
      chord[1] = 41 + rootOffset;
      chord[2] = 45 + rootOffset;
      break;
    case 4:
      chord[0] = 40 + rootOffset;
      chord[1] = 43 + rootOffset;
      chord[2] = 47 + rootOffset;
      break;
    case 5:
      chord[0] = 41 + rootOffset;
      chord[1] = 45 + rootOffset;
      chord[2] = 48 + rootOffset;
      break;
    case 6:
      chord[0] = 43 + rootOffset;
      chord[1] = 47 + rootOffset;
      chord[2] = 50 + rootOffset;
      break;
      default:
      chord[0] = 33 + rootOffset;
      chord[1] = 36 + rootOffset;
      chord[2] = 40 + rootOffset;
    }
    chordString = chord.join(' ');
}
function setChordAdonaiMalakh(){

  switch(chordRoot){

    case 0:
      chord[0] = 33 + rootOffset;
      chord[1] = 37 + rootOffset;
      chord[2] = 40 + rootOffset;
      break;
    case 1:
      chord[0] = 35 + rootOffset;
      chord[1] = 38 + rootOffset;
      chord[2] = 41 + rootOffset;
      break;
    case 2:
      chord[0] = 37 + rootOffset;
      chord[1] = 40 + rootOffset;
      chord[2] = 43 + rootOffset;
      break;
    case 3:
      chord[0] = 38 + rootOffset;
      chord[1] = 41 + rootOffset;
      chord[2] = 45 + rootOffset;
      break;
    case 4:
      chord[0] = 40 + rootOffset;
      chord[1] = 43 + rootOffset;
      chord[2] = 47 + rootOffset;
      break;
    case 5:
      chord[0] = 41 + rootOffset;
      chord[1] = 45 + rootOffset;
      chord[2] = 49 + rootOffset;
      break;
    case 6:
      chord[0] = 43 + rootOffset;
      chord[1] = 47 + rootOffset;
      chord[2] = 50 + rootOffset;
      break;
      default:
      chord[0] = 33 + rootOffset;
      chord[1] = 37 + rootOffset;
      chord[2] = 40 + rootOffset;
    }
    chordString = chord.join(' ');
}
function setChordByzantine(){

  switch(chordRoot){

    case 0:
      chord[0] = 33 + rootOffset;
      chord[1] = 37 + rootOffset;
      chord[2] = 41 + rootOffset;
      break;
    case 1:
      chord[0] = 34 + rootOffset;
      chord[1] = 40 + rootOffset;
      chord[2] = 45 + rootOffset;
      break;
    case 2:
      chord[0] = 37 + rootOffset;
      chord[1] = 41 + rootOffset;
      chord[2] = 46 + rootOffset;
      break;
    case 3:
      chord[0] = 40 + rootOffset;
      chord[1] = 45 + rootOffset;
      chord[2] = 49 + rootOffset;
      break;
    case 4:
      chord[0] = 41 + rootOffset;
      chord[1] = 46 + rootOffset;
      chord[2] = 52 + rootOffset;
      break;
      default:
      chord[0] = 33 + rootOffset;
      chord[1] = 37 + rootOffset;
      chord[2] = 41 + rootOffset;
    }
    chordString = chord.join(' ');
}
function setChordDoubleHarmonic(){

  switch(chordRoot){

    case 0:
      chord[0] = 33 + rootOffset;
      chord[1] = 37 + rootOffset;
      chord[2] = 40 + rootOffset;
      break;
    case 1:
      chord[0] = 34 + rootOffset;
      chord[1] = 38 + rootOffset;
      chord[2] = 41 + rootOffset;
      break;
    case 2:
      chord[0] = 37 + rootOffset;
      chord[1] = 40 + rootOffset;
      chord[2] = 44 + rootOffset;
      break;
    case 3:
      chord[0] = 38 + rootOffset;
      chord[1] = 41 + rootOffset;
      chord[2] = 45 + rootOffset;
      break;
    case 4:
      chord[0] = 40 + rootOffset;
      chord[1] = 44 + rootOffset;
      chord[2] = 46 + rootOffset;
      break;
    case 5:
      chord[0] = 41 + rootOffset;
      chord[1] = 45 + rootOffset;
      chord[2] = 49 + rootOffset;
      break;
    case 6:
      chord[0] = 44 + rootOffset;
      chord[1] = 46 + rootOffset;
      chord[2] = 50 + rootOffset;
      break;
      default:
      chord[0] = 33 + rootOffset;
      chord[1] = 37 + rootOffset;
      chord[2] = 40 + rootOffset;
    }
    chordString = chord.join(' ');
}
function setChordEngimatic(){

  switch(chordRoot){

    case 0:
      chord[0] = 33 + rootOffset;
      chord[1] = 37 + rootOffset;
      chord[2] = 41 + rootOffset;
      break;
    case 1:
      chord[0] = 34 + rootOffset;
      chord[1] = 39 + rootOffset;
      chord[2] = 44 + rootOffset;
      break;
    case 2:
      chord[0] = 37 + rootOffset;
      chord[1] = 41 + rootOffset;
      chord[2] = 45 + rootOffset;
      break;
    case 3:
      chord[0] = 39 + rootOffset;
      chord[1] = 44 + rootOffset;
      chord[2] = 46 + rootOffset;
      break;
    case 4:
      chord[0] = 41 + rootOffset;
      chord[1] = 45 + rootOffset;
      chord[2] = 49 + rootOffset;
      break;
    case 5:
      chord[0] = 44 + rootOffset;
      chord[1] = 46 + rootOffset;
      chord[2] = 51 + rootOffset;
      break;
      default:
      chord[0] = 33 + rootOffset;
      chord[1] = 37 + rootOffset;
      chord[2] = 41 + rootOffset;
    }
    chordString = chord.join(' ');
}
function setChordAhavaRaba(){

  switch(chordRoot){

    case 0:
      chord[0] = 33 + rootOffset;
      chord[1] = 36 + rootOffset;
      chord[2] = 40 + rootOffset;
      break;
    case 1:
      chord[0] = 35 + rootOffset;
      chord[1] = 38 + rootOffset;
      chord[2] = 41 + rootOffset;
      break;
    case 2:
      chord[0] = 36 + rootOffset;
      chord[1] = 40 + rootOffset;
      chord[2] = 43 + rootOffset;
      break;
    case 3:
      chord[0] = 38 + rootOffset;
      chord[1] = 41 + rootOffset;
      chord[2] = 45 + rootOffset;
      break;
    case 4:
      chord[0] = 40;
      chord[1] = 43 + rootOffset;
      chord[2] = 47 + rootOffset;
      break;
    case 5:
      chord[0] = 41 + rootOffset;
      chord[1] = 45 + rootOffset;
      chord[2] = 48 + rootOffset;
      break;
    case 6:
      chord[0] = 43 + rootOffset;
      chord[1] = 47 + rootOffset;
      chord[2] = 50 + rootOffset;
      break;
    }
    chordString = chord.join(' ');
}
function setChordGypsy(){

  switch(chordRoot){

    case 0:
      chord[0] = 33 + rootOffset;
      chord[1] = 36 + rootOffset;
      chord[2] = 40 + rootOffset;
      break;
    case 1:
      chord[0] = 35 + rootOffset;
      chord[1] = 38 + rootOffset;
      chord[2] = 41 + rootOffset;
      break;
    case 2:
      chord[0] = 36 + rootOffset;
      chord[1] = 40 + rootOffset;
      chord[2] = 43 + rootOffset;
      break;
    case 3:
      chord[0] = 38 + rootOffset;
      chord[1] = 41 + rootOffset;
      chord[2] = 45 + rootOffset;
      break;
    case 4:
      chord[0] = 40;
      chord[1] = 43 + rootOffset;
      chord[2] = 47 + rootOffset;
      break;
    case 5:
      chord[0] = 41 + rootOffset;
      chord[1] = 45 + rootOffset;
      chord[2] = 48 + rootOffset;
      break;
    case 6:
      chord[0] = 43 + rootOffset;
      chord[1] = 47 + rootOffset;
      chord[2] = 50 + rootOffset;
      break;
    }
    chordString = chord.join(' ');
}
function setChordIstrian(){

  switch(chordRoot){

    case 0:
      chord[0] = 33 + rootOffset;
      chord[1] = 36 + rootOffset;
      chord[2] = 40 + rootOffset;
      break;
    case 1:
      chord[0] = 35 + rootOffset;
      chord[1] = 38 + rootOffset;
      chord[2] = 41 + rootOffset;
      break;
    case 2:
      chord[0] = 36 + rootOffset;
      chord[1] = 40 + rootOffset;
      chord[2] = 43 + rootOffset;
      break;
    case 3:
      chord[0] = 38 + rootOffset;
      chord[1] = 41 + rootOffset;
      chord[2] = 45 + rootOffset;
      break;
    case 4:
      chord[0] = 40;
      chord[1] = 43 + rootOffset;
      chord[2] = 47 + rootOffset;
      break;
    case 5:
      chord[0] = 41 + rootOffset;
      chord[1] = 45 + rootOffset;
      chord[2] = 48 + rootOffset;
      break;
    case 6:
      chord[0] = 43 + rootOffset;
      chord[1] = 47 + rootOffset;
      chord[2] = 50 + rootOffset;
      break;
    }
    chordString = chord.join(' ');
}
function setChordNeopolitan(){

  switch(chordRoot){

    case 0:
      chord[0] = 33 + rootOffset;
      chord[1] = 36 + rootOffset;
      chord[2] = 40 + rootOffset;
      break;
    case 1:
      chord[0] = 35 + rootOffset;
      chord[1] = 38 + rootOffset;
      chord[2] = 41 + rootOffset;
      break;
    case 2:
      chord[0] = 36 + rootOffset;
      chord[1] = 40 + rootOffset;
      chord[2] = 43 + rootOffset;
      break;
    case 3:
      chord[0] = 38 + rootOffset;
      chord[1] = 41 + rootOffset;
      chord[2] = 45 + rootOffset;
      break;
    case 4:
      chord[0] = 40;
      chord[1] = 43 + rootOffset;
      chord[2] = 47 + rootOffset;
      break;
    case 5:
      chord[0] = 41 + rootOffset;
      chord[1] = 45 + rootOffset;
      chord[2] = 48 + rootOffset;
      break;
    case 6:
      chord[0] = 43 + rootOffset;
      chord[1] = 47 + rootOffset;
      chord[2] = 50 + rootOffset;
      break;
    }
    chordString = chord.join(' ');
}
function setChordUkrainian(){

  switch(chordRoot){

    case 0:
      chord[0] = 33 + rootOffset;
      chord[1] = 36 + rootOffset;
      chord[2] = 40 + rootOffset;
      break;
    case 1:
      chord[0] = 35 + rootOffset;
      chord[1] = 38 + rootOffset;
      chord[2] = 41 + rootOffset;
      break;
    case 2:
      chord[0] = 36 + rootOffset;
      chord[1] = 40 + rootOffset;
      chord[2] = 43 + rootOffset;
      break;
    case 3:
      chord[0] = 38 + rootOffset;
      chord[1] = 41 + rootOffset;
      chord[2] = 45 + rootOffset;
      break;
    case 4:
      chord[0] = 40;
      chord[1] = 43 + rootOffset;
      chord[2] = 47 + rootOffset;
      break;
    case 5:
      chord[0] = 41 + rootOffset;
      chord[1] = 45 + rootOffset;
      chord[2] = 48 + rootOffset;
      break;
    case 6:
      chord[0] = 43 + rootOffset;
      chord[1] = 47 + rootOffset;
      chord[2] = 50 + rootOffset;
      break;
    }
    chordString = chord.join(' ');
}
function setChordWholeTone(){

  switch(chordRoot){

    case 0:
      chord[0] = 33 + rootOffset;
      chord[1] = 36 + rootOffset;
      chord[2] = 40 + rootOffset;
      break;
    case 1:
      chord[0] = 35 + rootOffset;
      chord[1] = 38 + rootOffset;
      chord[2] = 41 + rootOffset;
      break;
    case 2:
      chord[0] = 36 + rootOffset;
      chord[1] = 40 + rootOffset;
      chord[2] = 43 + rootOffset;
      break;
    case 3:
      chord[0] = 38 + rootOffset;
      chord[1] = 41 + rootOffset;
      chord[2] = 45 + rootOffset;
      break;
    case 4:
      chord[0] = 40;
      chord[1] = 43 + rootOffset;
      chord[2] = 47 + rootOffset;
      break;
    case 5:
      chord[0] = 41 + rootOffset;
      chord[1] = 45 + rootOffset;
      chord[2] = 48 + rootOffset;
      break;
    case 6:
      chord[0] = 43 + rootOffset;
      chord[1] = 47 + rootOffset;
      chord[2] = 50 + rootOffset;
      break;
    }
    chordString = chord.join(' ');
}

function octaver(){

  for (var i = 1; i < 12; i++) {

    // Octaver - if notes in a row are the same
    if (pitches[i] === pitches[i-1]){

      if (pitches[i] < 50){
        pitches[i] = pitches[i] + 12 ;
      } else {
        pitches[i] = pitches[i] - 12;
      }
    }
  }
}
function fifther(){

  // Fifhter - if notes in partA and B sound the same at the same time
  for (var i = 0; i < 6; i++) {

    if (modeActive === MODE_ENIGMATIC || modeActive === MODE_WHOLE_TONE){

      if (pitches[i+7] === pitches[i]){
        pitches[i+7] = pitches[i] + 8;
      }
    } else {

      if (pitches[i+6] === pitches[i]){
        pitches[i+6] = pitches[i] + 7;
      }
    }
  }
}
