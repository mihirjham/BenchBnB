(function(root) {
  'use strict';

  var BenchForm = root.BenchForm = React.createClass({
    mixins: [React.addons.LinkedStateMixin, ReactRouter.History],
    getInitialState: function(){
      return {};
    },
    handleSubmit: function(e){
      e.preventDefault();
      // ApiUtil.createBench(this.state, function(){
      //   this.history.pushState(null, "/");
      // }.bind(this));
      ApiUtil.createBench(this.state);
      this.history.pushState(null, "/");
    },
    render: function(){
      return(
        <form onSubmit={this.handleSubmit}>
          <label>
            Description
            <input type="text" id="pokemon_description" valueLink={this.linkState("description")}/>
          </label><br/>
          <label>
            Latitude
            <input type="text" valueLink={this.linkState("lat")}></input>
          </label><br/>
          <label>
            Longitude
            <input type="text" valueLink={this.linkState("lon")}></input>
          </label><br/>
          <label>
            Seating
            <input type="text" valueLink={this.linkState("seating")}></input>
          </label><br/>
          <input type="submit" value="Create Bench" />
        </form>
      );
    }
  });
}(this));
