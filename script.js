jQuery(function() {
  
  var data = $.parseJSON('{"posts_total":2,"posts":[{"id":"11069","name":"Webinar: Building Better Movements via Stanford Innovation Review","description":"<p>Movements may seem to rise up organically, but there is a method behind this mystique. Organizations can leverage the strategies behind successful movements to create greater impact. This webinar will outline a movement maker’s approach to organizational strategy—a three-step methodology for mobilizing people around a shared purpose and strengthening bonds among a group.<br /><br />This webinar will be useful to practitioners and leaders in the social, business, and government sectors who want to leverage collective action to further their organization’s mission.<br /><br />In this webinar, you will learn:<br /><br />- Why some movements create lasting change while others simply fizzle out<br />- How movements strategies amplify traditional tactics like campaigns<br />- How to apply a three-step methodology to make sense of a movement and define your organization’s shared purpose within it<br />- How to identify and leverage the six roles always present in successful movements<br />- How to create incentives and rewards that not only initiate support but also lead to long-term loyalty<br />- How modern day movement makers are applying these strategies to create impact<br /><br /></p><p>Learn more about this webinar and register here:  http://ssir.org/webinar/building_better_movements?utm_source=Enews&amp;utm_medium=Email&amp;utm_campaign=SSIR_Live&amp;utm_content=Register</p>","fulfilled_at":null,"type":"event","created_at":"2015-11-13T23:09:50.822Z","updated_at":"2015-11-13T23:09:50.822Z","projects":[],"start_time":"2016-01-14T19:00:00.000Z","end_time":"2016-01-14T20:00:00.000Z","location":null,"communities":[{"id":"1083","name":"Boulder, what are we doing about climate change?","slug":"c3boulder","avatar_url":"https://d3ngex8q79bk55.cloudfront.net/community/1083/avatar/1441815377576_14220881051815572140oie_transparent-1earth-hi.png"}],"contributors":[],"followers":[{"id":"10101","name":"Finn Woelm","avatar_url":"https://lh4.googleusercontent.com/-OX-nU_rpdg8/AAAAAAAAAAI/AAAAAAAAIe8/v13YT4Fdldk/photo.jpg"},{"id":"13803","name":"Emma Ruffin","avatar_url":"https://d3ngex8q79bk55.cloudfront.net/user/13803/avatar/1441816613833_R1-02797-000A_0001.jpg"}],"responders":[],"media":[],"myVote":false,"numComments":0,"votes":0,"user":{"id":"13803","name":"Emma Ruffin","avatar_url":"https://d3ngex8q79bk55.cloudfront.net/user/13803/avatar/1441816613833_R1-02797-000A_0001.jpg"},"relatedUsers":[],"public":true},{"id":"11070","name":"Webinar: Building Better Movements via Stanford Innovation Review","description":"<p>Movements may seem to rise up organically, but there is a method behind this mystique. Organizations can leverage the strategies behind successful movements to create greater impact. This webinar will outline a movement maker’s approach to organizational strategy—a three-step methodology for mobilizing people around a shared purpose and strengthening bonds among a group.<br /><br />This webinar will be useful to practitioners and leaders in the social, business, and government sectors who want to leverage collective action to further their organization’s mission.<br /><br />In this webinar, you will learn:<br /><br />- Why some movements create lasting change while others simply fizzle out<br />- How movements strategies amplify traditional tactics like campaigns<br />- How to apply a three-step methodology to make sense of a movement and define your organization’s shared purpose within it<br />- How to identify and leverage the six roles always present in successful movements<br />- How to create incentives and rewards that not only initiate support but also lead to long-term loyalty<br />- How modern day movement makers are applying these strategies to create impact<br /><br /></p><p>Learn more about this webinar and register here:  http://ssir.org/webinar/building_better_movements?utm_source=Enews&amp;utm_medium=Email&amp;utm_campaign=SSIR_Live&amp;utm_content=Register</p>","fulfilled_at":null,"type":"event","created_at":"2015-11-13T23:09:50.822Z","updated_at":"2015-11-13T23:09:50.822Z","projects":[],"start_time":"2016-01-14T19:00:00.000Z","end_time":"2016-01-14T20:00:00.000Z","location":null,"communities":[{"id":"1083","name":"Boulder, what are we doing about climate change?","slug":"c3boulder","avatar_url":"https://d3ngex8q79bk55.cloudfront.net/community/1083/avatar/1441815377576_14220881051815572140oie_transparent-1earth-hi.png"}],"contributors":[],"followers":[{"id":"10101","name":"Finn Woelm","avatar_url":"https://lh4.googleusercontent.com/-OX-nU_rpdg8/AAAAAAAAAAI/AAAAAAAAIe8/v13YT4Fdldk/photo.jpg"},{"id":"13803","name":"Emma Ruffin","avatar_url":"https://d3ngex8q79bk55.cloudfront.net/user/13803/avatar/1441816613833_R1-02797-000A_0001.jpg"}],"responders":[],"media":[],"myVote":false,"numComments":0,"votes":0,"user":{"id":"13803","name":"Emma Ruffin","avatar_url":"https://d3ngex8q79bk55.cloudfront.net/user/13803/avatar/1441816613833_R1-02797-000A_0001.jpg"},"relatedUsers":[],"public":true}]}');


  var container = $("#container");
  var eventTemplate = $("#event-template div");
  
  $.each(data['posts'], function (){
    
    createEvent(this['id'], this['name'], this['start_time'], this['end_time'], this['location'], this['user']);

  });
  
  function createEvent(id, name, start_time, end_time, location, user, image_url) {
    
    // create new event from empty template
    var event = eventTemplate.clone();
    
    // add data
    event.find("p.name .value").html(name);   
    
    // append event to page
    container.append(event);
    
  }
  
});