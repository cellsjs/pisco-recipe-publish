'use strict';

module.exports = {
  run(ok, ko) {
    this.publishNpm() === 0 ? ok() : ko({error: 'Error publishing npm!!'});
  }
};