(function(root) {
  'use strict';

  var ApiUtil = root.ApiUtil = {
    fetchBenches: function(){
      var params = FilterParamsStore.getParams();
      $.ajax({
        url: "/api/benches",
        type: "get",
        dataType: "json",
        data: {bounds: params.bounds},
        success: function(responseData){
          ApiActions.receiveAll(responseData);
        }
      });
    },
    createBench: function(bench, callback){
      $.ajax({
        url: '/api/benches',
        type: "post",
        dataType: "json",
        data: {bench: bench},
        success: function(responseData){
          ApiActions.createBench(responseData);
        }
      });
    }
  };
}(this));
