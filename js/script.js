let dataForURL;
let showMeasuredData;
let showReportedData;
let dataToVisualise;

$(document).ready(function(){
  // console.log('ready');

  $('#measuredButton').click(function(){
    dataForURL = 'measured';
    getData();
  });
  $('#reportedButton').click(function(){
    dataForURL = 'reported';
    getData();
  });
});

function getData(){
  $.ajax({
    url: 'https://api.geonet.org.nz/intensity?type=' + dataForURL,
    type: 'GET',
    dataType: 'json',
    success: function(dataFromJSON){
        console.log('success!');
        console.log(dataFromJSON.features[0]);
        $(`#${dataForURL}Data`).append(dataFromJSON.features[0].geometry.coordinates[0]);
        $(`#${dataForURL}Data`).append(dataFromJSON.features[0].geometry.coordinates[1]);

    },
    error: function(){
      console.log('Something has gone wrong, buddy.');
    }
  })
  // dataToVisualise = dataFromJSON;

};


function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -41.286461, lng: 174.776230},
      zoom: 15
  });
};
google.maps.event.addDomListener(window, 'load', initMap);
// function displayData(){
//     $('#measuredData').append(showMeasuredData);
//     $('#reportedData').append(showReportedData);
//
// }
