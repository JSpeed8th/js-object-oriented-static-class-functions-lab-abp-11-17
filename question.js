'use strict';
class Question {
  constructor (content){
    this.question = content;
  }


static All() {
  return this.constructor._All;
}

save() {
  this.constructor._All.push(this)
}

}

Question._All = []
