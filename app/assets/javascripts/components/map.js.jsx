(function(root) {
  'use strict';

  var markers = [];
  var Map = root.Map = React.createClass({
    getInitialState: function(){
      return {benches: BenchStore.all()};
    },
    componentWillUnmount: function(){
      BenchStore.removeChangeListener(this._onChange);
    },
    componentDidMount: function(){
      BenchStore.addChangeListener(this._onChange);
      var map = React.findDOMNode(this.refs.googleMap);
      var mapOptions = {
        center: {lat: 37.7758, lng: -122.435},
        zoom: 13
      };
      this.map = new google.maps.Map(map, mapOptions);
      this.map.addListener("idle", function(){
        var latLngInstance = this.map.getBounds();
        var bounds = {northeast: {lat: latLngInstance.getNorthEast().J, lng: latLngInstance.getNorthEast().M},
                    southwest: {lat: latLngInstance.getSouthWest().J, lng: latLngInstance.getSouthWest().M}
                  };
        FilterParamsActions.updateBounds(bounds);
      }.bind(this));

      this.map.addListener("click", function(e){
        this.props.handleMapClick(e.latLng);
      }.bind(this));

    },
    _onChange: function(){
      this.setState({benches: BenchStore.all()});

      for(var j = 0; j < markers.length; j++){
        markers[j].setMap(null);
      }
      markers = [];

      for(var i = 0; i < this.state.benches.length; i++){
        markers.push(new google.maps.Marker({
          position: {lat: parseFloat(this.state.benches[i].lat), lng: parseFloat(this.state.benches[i].lon)},
          map: this.map,
          animation: google.maps.Animation.DROP
        }));

        markers[markers.length-1].addListener("click", function(idx, e){
          this.props.handleMarkerClick(this.state.benches[idx].id);
        }.bind(this, i));
        markers[markers.length-1].setMap(this.map);
      }
    },
    render: function(){
      return(
        <div className="map" ref="googleMap">
        </div>
      );
    }
  });
}(this));
