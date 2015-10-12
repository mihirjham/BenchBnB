(function(root) {
  'use strict';
  var Search = root.Search = React.createClass({
    handleMapClick: function(coords){
      this.props.history.pushState(null, "new", coords);
    },
    render: function(){
      return(
        <div>
          <Map handleMapClick={this.handleMapClick}/>
          <Index />
        </div>
      );
    }
  });
}(this));
