(function(root) {
  'use strict';

  var Filter = root.Filter = React.createClass({
    mixins: [React.addons.LinkedStateMixin],
    getInitialState: function(){
      return {minSeating: 0, maxSeating: 0};
    },
    handleMinInput: function(e){
      FilterParamsActions.updateMinSeating(parseInt(e.target.value));
    },
    handleMaxInput: function(e){
      FilterParamsActions.updateMaxSeating(parseInt(e.target.value));
    },
    render: function(){
      return(
          <div>
            <label>
              Minimum seats
              <input onInput={this.handleMinInput} type="number" valueLink={this.linkState("minSeating")} />
            </label>

            <label>
              Maximum seats
              <input onInput={this.handleMaxInput} type="number" valueLink={this.linkState("maxSeating")} />
            </label>
          </div>
      );
    }
  });
}(this));
