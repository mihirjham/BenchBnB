(function(root) {
  'use strict';

  var ApiUtil = root.ApiUtil = {
    fetchBenches: function(){
      $.ajax({
        url: "/api/benches",
        type: "get",
        dataType: "json",
        success: function(responseData){
          ApiActions.receiveAll(responseData);
        }
      });
    }
  };
}(this));
