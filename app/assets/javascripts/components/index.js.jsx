(function(root) {
  'use strict';

  var Index = root.Index = React.createClass({
    getInitialState: function(){
      return {benches: BenchStore.all()};
    },
    componentDidMount: function(){
      BenchStore.addChangeListener(this._onChange);
      ApiUtil.fetchBenches();
    },
    _onChange: function(){
      this.setState({benches: BenchStore.all()});
    },
    render: function(){
      return(
        <div>
          {this.state.benches}
        </div>
      );
    }
  });
}(this));
