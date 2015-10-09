(function(root) {
  'use strict';

  var ApiUtil = root.ApiUtil = {
    fetchBenches: function(bounds){
      $.ajax({
        url: "/api/benches",
        type: "get",
        dataType: "json",
        data: {bounds: bounds},
        success: function(responseData){
          ApiActions.receiveAll(responseData);
        }
      });
    }
  };
}(this));
