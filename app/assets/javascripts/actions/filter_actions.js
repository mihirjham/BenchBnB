(function(root) {
  'use strict';

  var FilterParamsActions = root.FilterParamsActions = {
    updateBounds: function(bounds){
      var action = {
        actionType: FilterParamsConstants.UPDATE_BOUNDS,
        bounds: bounds
      };

      AppDispatcher.dispatch(action);
    }
  };
}(this));
