(function(root) {
  'use strict';

  var ReviewForm = root.ReviewForm = React.createClass({
    mixins: [React.addons.LinkedStateMixin, ReactRouter.History],
    getInitialState: function(){
      return {};
    },
    componentDidMount: function(){
      BenchStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function(){
      BenchStore.removeChangeListener(this._onChange);
    },
    _onChange: function(){
      this.setState({});
    },
    handleSubmit: function(e){
      e.preventDefault();
      ApiUtil.createReview($.extend(this.state, {bench_id: this.props.bench.id}));
    },
    render: function(){
      return(
        <form onSubmit={this.handleSubmit}>
          <label>
            Score
            <input type="number" min="1" max="5" valueLink={this.linkState("rating")} />
          </label>

          <label>
            Review
            <textarea valueLink={this.linkState("description")}></textarea>
          </label>

          <input type="submit" value="Submit review"/>
        </form>
      );
    }
  });
}(this));
