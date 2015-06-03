console.log('this is cool!');

// $.getJSON('http://private-44f6d-timeline6.apiary-mock.com/timeline').done(function(data) {
   

// data.timelines = data.timelines.forEach( function(blah){
     

//      var timestamp = blah.timestamp;
//      var title = blah.title;
//      var content = blah.content;
//      var icon = blah.icons;



// var post = '<p class="posty">' + content + '</p>';

// console.log(title);

//   $('.container').append(post);
// });
// });




$.getJSON('http://private-44f6d-timeline6.apiary-mock.com/timeline').done(function(data){

  data.timelines.forEach(function(blah){
    var date = moment(blah.timestamp);
    blah.clockHour = date.format("hh:mm");
    blah.clockDate = date.format("MM/DD/YY");
  });

  $('.container').html(template.timelines(data));
});
























