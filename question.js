'use strict';
class Question {
  constructor (content){
    this.question = content;
  }

save() {
  this.constructor._All.push(this)
}

static Find(id){
  id - 1;
  return this.constructor._All[id];
}

static All() {
  return this._All;
}
}

Question._All = []
