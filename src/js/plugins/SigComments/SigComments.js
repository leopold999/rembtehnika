// let idSigComments = '4654';
let idSigComments = '4653';

(function(){
    var host_id = idSigComments;
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = '//sigcomments.com/chat/?host_id='+host_id;
    var ss = document.getElementsByTagName('script')[0]; 
    ss.parentNode.insertBefore(script, ss);
  })();