(function(root) {
  'use strict';

  var _params = {};
  var CHANGE_EVENT = "CHANGE_EVENT";
  var FilterParamsStore = root.FilterParamsStore = $.extend({}, EventEmitter.prototype, {
    getParams: function(){
      return _params;
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
        case FilterParamsConstants.UPDATE_BOUNDS:
          _params["bounds"] = payload.bounds;
          FilterParamsStore.changed();
          break;

        case FilterParamsConstants.UPDATE_MIN_SEATING:
          _params["minSeating"] = payload.minSeating;
          FilterParamsStore.changed();
          break;

        case FilterParamsConstants.UPDATE_MAX_SEATING:
          _params["maxSeating"] = payload.maxSeating;
          FilterParamsStore.changed();
          break;
      }
    })
  });
}(this));
