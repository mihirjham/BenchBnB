(function(root) {
  'use strict';

  var ApiUtil = root.ApiUtil = {
    fetchBenches: function(){
      var params = FilterParamsStore.getParams();
      $.ajax({
        url: "/api/benches",
        type: "get",
        dataType: "json",
        data: {filters: params},
        success: function(responseData){
          ApiActions.receiveAll(responseData);
        }
      });
    },
    createBench: function(bench){
      $.ajax({
        url: '/api/benches',
        type: "post",
        dataType: "json",
        data: {bench: bench},
        success: function(responseData){
          ApiActions.createBench(responseData);
        }
      });
    },
    createReview: function(review){
      $.ajax({
        url: "/api/reviews",
        type: "post",
        dataType: "json",
        data: {review: review},
        success: function(responseData){
          ApiActions.createReview(responseData);
        }
      });
    }
  };
}(this));
