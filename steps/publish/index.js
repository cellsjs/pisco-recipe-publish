'use strict';

module.exports = {
  run(ok, ko) {
    const tmp = this.publishNpm() === 0 ? ok() : ko({error: 'Error publishing npm!!'});
  }
};