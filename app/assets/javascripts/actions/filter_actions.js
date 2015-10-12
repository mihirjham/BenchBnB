(function(root) {
  'use strict';

  var FilterParamsActions = root.FilterParamsActions = {
    updateBounds: function(bounds){
      var action = {
        actionType: FilterParamsConstants.UPDATE_BOUNDS,
        bounds: bounds
      };

      AppDispatcher.dispatch(action);
    },
    updateMinSeating: function(minSeating){
      var action = {
        actionType: FilterParamsConstants.UPDATE_MIN_SEATING,
        minSeating: minSeating
      };

      AppDispatcher.dispatch(action);
    },
    updateMaxSeating: function(maxSeating){
      var action = {
        actionType: FilterParamsConstants.UPDATE_MAX_SEATING,
        maxSeating: maxSeating
      };

      AppDispatcher.dispatch(action);
    }
  };
}(this));
