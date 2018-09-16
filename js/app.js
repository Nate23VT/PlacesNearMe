var $ = Dom7;

// Init App
var app = new Framework7({
  id: 'io.framework7.testapp',
  root: '#app',
  routes: routes,
});
( function($) {
    $(document).ready(function(){
        
        
        
    })

} ) ( jQuery );

$(function() {
    $("#newsContent").text("Test");
    
    /*
    
    $.getJSON( "ajax/test.json", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
  });
 
  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});
    
    <div class="card demo-card-header-pic">
          <div style="background-image:url(/img/collab.jpg)" class="card-header align-items-flex-end"></div>
          <div class="card-content card-content-padding">
            <p class="date">IDeAS Challengs</p>
            <p>The innovation has launched a new crowdsourcing ideation platform.</p>
          </div>
          <div class="card-footer"><a href="/about/3/" class="link">Read more</a></div>
        </div>
        
        */
});