(function(root) {
  'use strict';

  var BenchShow = root.BenchShow = React.createClass({
    getInitialState: function(){
      return {};
    },
    componentWillMount: function(){
      var bench = BenchStore.getBenchById(parseInt(this.props.location.query.id));
      this.setState($.extend(this.state, bench));
    },
    componentDidMount: function(){
      var map = React.findDOMNode(this.refs.googleMap);
      var mapOptions = {
        center: {lat: this.state.lat, lng: this.state.lon},
        zoom: 13,
        draggable: false
      };
      this.map = new google.maps.Map(map, mapOptions);
      new google.maps.Marker({
        position: {lat: this.state.lat, lng: this.state.lon},
        map: this.map,
        animation: google.maps.Animation.DROP
      }).setMap(this.map);
    },
    render: function(){
      return(
        <div>
          Description: {this.state.description}<br/>
          Latitude: {this.state.lat}<br/>
          Longitude: {this.state.lon}<br/>
          Seats: {this.state.seating}<br/>

        <div className="map" ref="googleMap">
        </div>
        </div>
      );
    }
  });

}(this));
