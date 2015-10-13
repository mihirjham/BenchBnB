(function(root) {
  'use strict';

  var BenchShow = root.BenchShow = React.createClass({
    getInitialState: function(){
      return {bench: BenchStore.getBenchById(parseInt(this.props.params.id))};
    },
    componentWillUnmount: function(){
      BenchStore.removeChangeListener(this._onChange);
    },
    componentDidMount: function(){
      BenchStore.addChangeListener(this._onChange);
      var map = React.findDOMNode(this.refs.googleMap);
      var mapOptions = {
        center: {lat: this.state.bench.lat, lng: this.state.bench.lon},
        zoom: 13,
        draggable: false
      };
      this.map = new google.maps.Map(map, mapOptions);
      new google.maps.Marker({
        position: {lat: this.state.bench.lat, lng: this.state.bench.lon},
        map: this.map,
        animation: google.maps.Animation.DROP
      }).setMap(this.map);
    },
    _onChange: function(){
      var bench = BenchStore.getBenchById(parseInt(this.props.params.id));
      this.setState({bench: bench});
    },
    render: function(){
      return(
        <div>
          Description: {this.state.bench.description}<br/>
          Latitude: {this.state.bench.lat}<br/>
          Longitude: {this.state.bench.lon}<br/>
          Seats: {this.state.bench.seating}<br/>
          Average Rating: {this.state.bench.average_rating}<br/>
        <div className="map" ref="googleMap">
        </div>
        <div>
          Reviews
          <ul>
            {
              this.state.bench.reviews.map(function(review){
                return <li>{review.description}</li>;
              })
            }
          </ul>
        </div>
        <ReviewForm bench={this.state.bench} />
        </div>
      );
    }
  });

}(this));
