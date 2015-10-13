(function(root) {
  'use strict';
  var Search = root.Search = React.createClass({
    getInitialState: function(){
      return {minSeating: 0, maxSeating: 0, bounds: {}};
    },
    componentDidMount: function(){
      FilterParamsStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function(){
      FilterParamsStore.removeChangeListener(this._onChange);
    },
    _onChange: function(){
      var changes = FilterParamsStore.getParams();
      ApiUtil.fetchBenches();
      this.setState({minSeating: changes.minSeating, maxSeating: changes.maxSeating, bounds: changes.bounds});
    },
    handleMapClick: function(coords){
      this.props.history.pushState(null, "new", coords);
    },
    handleMarkerClick: function(id){
      this.props.history.pushState(null, "benches/"+id);
    },
    render: function(){
      return(
        <div>
          <Map handleMapClick={this.handleMapClick} handleMarkerClick={this.handleMarkerClick}/>
          <Filter />
          <Index />
        </div>
      );
    }
  });
}(this));
