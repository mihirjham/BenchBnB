(function(root) {
  'use strict';

  var Map = root.Map = React.createClass({
    componentDidMount: function(){
      var map = React.findDOMNode(this.refs.googleMap);
      var mapOptions = {
        center: {lat: 37.7758, lng: -122.435},
        zoom: 13
      };
      this.map = new google.maps.Map(map, mapOptions);
    },
    render: function(){
      return(
        <div className="map" ref="googleMap">
        </div>
      );
    }
  });
}(this));
