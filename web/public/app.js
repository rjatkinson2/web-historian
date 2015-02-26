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
      dataType: 'json',
      data: site,
      success: function(data, status){
        // document.open();
        // document.write(data);
        // document.close();
        debugger;
        if(data.redirect) {
          console.log('redirect!!')
        }
      },
     error: function(event){
        console.log(arguments);
        //do something with the event
        // console.log(event);
      }
    });
  }

};
