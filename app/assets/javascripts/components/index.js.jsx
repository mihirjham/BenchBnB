(function(root) {
  'use strict';

  var Index = root.Index = React.createClass({
    mixins: [ReactRouter.History],
    getInitialState: function(){
      return {benches: BenchStore.all()};
    },
    componentDidMount: function(){
      BenchStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function(){
      BenchStore.removeChangeListener(this._onChange);
    },
    _onChange: function(){
      this.setState({benches: BenchStore.all()});
    },
    handleClick: function(bench){
      this.history.pushState(null, "benches/" +bench.id);
    },
    render: function(){
      return(
        <div>
          <ul>
            {
              this.state.benches.map(function(bench){
                return <li onClick={this.handleClick.bind(null, bench)} key={bench.id}>
                  Description: {bench.description} Average Rating: {bench.average_rating}
                </li>;
              }.bind(this))
            }
          </ul>
        </div>
      );
    }
  });
}(this));
