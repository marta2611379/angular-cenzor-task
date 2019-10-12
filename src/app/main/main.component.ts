import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']

})
export class MainComponent implements OnInit {
  cenzorText: string;
  badWord: string;
  words: Array<string> = [];
  copyArrayBadWords: string[] = arrayBadWords.slice();
  emptyStatusWord: boolean;
  emptyStatusArea: boolean;

  constructor() {
    this.words = this.copyArrayBadWords;
  }

  ngOnInit() {
  }

  emptyWord(): boolean {
    if ((this.badWord !== undefined)) {
      this.emptyStatusWord = false;
      document.getElementById('badWord').setAttribute('placeholder', 'write word ...');
    } else {
      this.emptyStatusWord = true;
      document.getElementById('badWord').setAttribute('placeholder', 'Please write a word!');
    }
    return this.emptyStatusWord;
  }

  emptyArea(): boolean {
    if ((this.cenzorText !== undefined)) {
      this.emptyStatusArea = false;
      document.getElementById('cenzorText').setAttribute('placeholder', 'write text ...');
    } else {
      this.emptyStatusArea = true;
      document.getElementById('cenzorText').setAttribute('placeholder', 'Please write a text!');
    }
    return this.emptyStatusArea;
  }

  addWord(): void {
    if (!this.emptyWord()) {
      const newbadW: string = this.badWord;
      this.words.push(newbadW);
      this.badWord = '';
    }
  }

  resetCerzor(): void {
    this.cenzorText = '';
    this.words = arrayBadWords.slice();
  }

  cerzor(): void {
    if (!this.emptyArea()) {
      const newCenzorText: string[] = this.cenzorText.split(' ');
      this.copyArrayBadWords.forEach(elBad => {
        newCenzorText.forEach((elCenzor, iCenzor) => {
          if (elBad === elCenzor) {
            newCenzorText[iCenzor] = newCenzorText[iCenzor].split('').fill('*').join('');
            this.cenzorText = newCenzorText.join(' ');
          }
        });
      });
    }
  }
}

const arrayBadWords: string[] = ['java', 'tottenham', 'taras'];

