import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-gamescreen',
  templateUrl: './gamescreen.page.html',
  styleUrls: ['./gamescreen.page.scss'],
})
export class GamescreenPage implements OnInit {

  constructor(private route: ActivatedRoute) {


  }
  image: any = {}


  dataString: any;
  dataObj: any;

  easy: string;
  medium: string;
  hard: string;
  addition: boolean;
  subtraction: boolean;
  times: boolean;
  division: boolean;

  ranNum1: number;
  ranNum2: number;
  currentMathType: string;
  answer: any;

  eggOne: any;
  eggTwo: any;
  eggThree: any;

  totalCount: any;
  totalCorrect = 0;
  totalWrong: any;


  ngOnInit() {
    this.dataString = this.route.snapshot.paramMap.get('dataObj');
    this.dataObj = JSON.parse(this.dataString);
    this.addition = this.dataObj.add;
    this.subtraction = this.dataObj.min;
    this.times = this.dataObj.tim;
    this.division = this.dataObj.div;
    this.easy = this.dataObj.easy;
    this.medium = this.dataObj.medium;
    this.hard = this.dataObj.hard;
    this.initialize();

  }
  initialize() {
    this.difficulty();
    this.mathType();
    this.calculation();
  }
  mathType() {

    let randomType = Math.floor(Math.random() * 4 + 1);
    if (randomType == 1) {
      this.currentMathType = "addition";
      this.image = {
        alt: "Addition Symbol",
        src: "../../assets/imgs/addition.png",
      }
    }
    else if (randomType == 2) {
      this.currentMathType = "subtraction";
      this.image = {
        alt: "Subtraction Symbol",
        src: "../../assets/imgs/subtraction.png",
      }
    }
    else if (randomType == 3) {
      this.currentMathType = "times";
      this.image = {
        alt: "Multiply Symbol",
        src: "../../assets/imgs/multiply.png",
      }
    }
    else if (randomType == 4) {
      this.currentMathType = "division";
      this.image = {
        alt: "Division Symbol",
        src: "../../assets/imgs/divide.png",
      }
    }
  }
  calculation() {
    // let correctAnswer = Math.floor(Math.random() * 3 + 1);
    if (this.currentMathType == "subtraction") {
      this.answer = this.ranNum1 - this.ranNum2;
      this.eggOne = (this.answer + 3);
      this.eggTwo = (this.answer);
      this.eggThree = (this.answer + 1);
    }
    else if (this.currentMathType == "addition") {
      this.answer = this.ranNum1 + this.ranNum2;
      this.eggOne = (this.answer);
      this.eggTwo = (this.answer + 1);
      this.eggThree = (this.answer + 3);
    }
    else if (this.currentMathType == "times") {
      this.answer = this.ranNum1 * this.ranNum2;
      this.eggOne = (this.answer + 3);
      this.eggTwo = (this.answer + 1);
      this.eggThree = (this.answer);
    }
    else if (this.currentMathType == "division") {
      this.answer = (this.ranNum1 / this.ranNum2).toFixed(1);
      this.eggOne = (this.answer + 3);
      this.eggTwo = (this.answer);
      this.eggThree = (this.answer + 1);
    }

  }
  difficulty() {
    if (this.easy == "easy") {
      // Easy numbers are 1-6
      this.ranNum1 = Math.floor(Math.random() * 6) + 1;
      this.ranNum2 = Math.floor(Math.random() * 6) + 1;

    }
    else if (this.medium == "medium") {
      // Medium numbers are 1-12
      this.ranNum1 = Math.floor(Math.random() * 12) + 1;
      this.ranNum2 = Math.floor(Math.random() * 12) + 1;
    }
    else if (this.hard == "hard") {
      //Hard numbers are 1-20
      this.ranNum1 = Math.floor(Math.random() * 20) + 1;
      this.ranNum2 = Math.floor(Math.random() * 20) + 1;
    }

  }
  checkEggOne() {


    if (this.currentMathType == "addition") {
      document.getElementById("answer").innerHTML = "Correct!";
      this.totalCorrect++;
      this.initialize();
    }
    else {
      document.getElementById("answer").innerHTML = "Wrong!";
      this.totalWrong++;
      this.initialize();
    }
  }
  checkEggTwo() {
    if (this.currentMathType == "subtraction") {
      document.getElementById("answer").innerHTML = "Correct!";
      this.totalCorrect++;
      this.initialize();
    }
    else if (this.currentMathType == "division") {
      document.getElementById("answer").innerHTML = "Correct!";
      this.totalCorrect++;
      this.initialize();
    }
    else {
      document.getElementById("answer").innerHTML = "Wrong!";
      this.totalWrong++;
      this.initialize();
    }
  }
  checkEggThree() {
    if (this.currentMathType == "times") {
      document.getElementById("answer").innerHTML = "Correct!";
      this.totalCorrect++;
      this.initialize();
    }
    else {
      document.getElementById("answer").innerHTML = "Wrong!";
      this.totalWrong++;
      this.initialize();
    }
  }
}
