(function(root) {
  'use strict';

  var _benches = [];
  var resetBenches = function(benches){
    _benches = benches.slice();
  };

  var addBench = function(bench){
    _benches.push(bench);
  }
  var CHANGE_EVENT = "CHANGE_EVENT";

  var BenchStore = root.BenchStore = $.extend({}, EventEmitter.prototype, {
    all: function(){
      return _benches.slice();
    },
    addChangeListener: function(handler){
      this.on(CHANGE_EVENT, handler);
    },
    removeChangeListener: function(handler){
      this.removeListener(CHANGE_EVENT, handler);
    },
    changed: function(){
      this.emit(CHANGE_EVENT);
    },
    dispatcherID: AppDispatcher.register(function(payload){
      switch(payload.actionType){
        case BenchConstants.BENCHES_RECEIVED:
          resetBenches(payload.benches);
          BenchStore.changed();
          break;

        case BenchConstants.BENCH_CREATED:
          addBench(payload.bench);
          BenchStore.changed();
          break;
      }
    })
  });

}(this));
