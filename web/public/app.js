var app = {

  init: function(){
    $('form').on('submit', function(event){
      app.send();
      event.preventDefault();
    });
  },

  send: function(){
    var site = $('input').val();
    $.ajax({
      type: 'GET',
      url: 'http://127.0.0.1:8080',
      dataType: 'html',
      data: site,
      success: function(data, status){
        console.log(data);
        $('document').html(data);
      },
      error: function(event){
        //do something with the event
        // console.log(event);
      }
    });
  }

};
