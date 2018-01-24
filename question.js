'use strict';
class Question {
  constructor (content){
    this.content = content
    this.save()
  }

  save() {
  this.constructor._All.push(this)
  }

  static Find(id){
  let newId = id - 1;
  return this._All[newId];
  }

  static All() {
  return this._All;
  }
}

Question._All = []

// question1 = new Question ("content")
// question2 = new Question ("content")
//
// [question1, question2]
