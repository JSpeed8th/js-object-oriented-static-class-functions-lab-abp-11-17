'use strict';
class Question {


static All() {
  return this.constructor._All;
}

save() {
  this.constructor._All.push(this)
}

}

Question._All = []
