(function(root) {
  'use strict';

  var _benches = [];
  var resetBenches = function(benches){
    _benches = benches.slice();
  };

  var BenchStore = root.BenchStore = $.extend({}, EventEmitter.prototype, {
    all: function(){
      return _benches.slice();
    },
    dispatcherID: AppDispatcher.register(function(payload){
      switch(payload.actionType){
        case BenchConstants.BENCHES_RECEIVED:
          resetBenches(payload.benches);
          break;
      }
    })
  });

}(this));
