(function(root) {
  'use strict';
  var ApiActions = root.ApiActions = {
    receiveAll: function(benches){
      var action = {
        actionType: BenchConstants.BENCHES_RECEIVED,
        benches: benches
      };

      AppDispatcher.dispatch(action);
    },
    createBench: function(bench){
      var action = {
        actionType: BenchConstants.BENCH_CREATED,
        bench: bench
      };

      AppDispatcher.dispatch(action);
    }
  };
}(this));
