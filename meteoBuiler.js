var meteoResponse = function (builder) {

  var welcome = function (session) {

    session.send("Hello there, I am here to help you to know weather.<br/>");
    builder.Prompts.text(session, "May I know your name?");
  };

  var weatherParisToday = function (session, results) {

    session.dialogData.userName = results.response;
    builder.Prompts.number(session, "Hey " + session.dialogData.userName + ", Weather of today in Paris?");
  };
  

  var weatherParisTomorrow = function (session, results) {

    session.dialogData.weatherParisToday = results.response;
    builder.Prompts.time(session, " Weather of tomorrow in Paris?");
  };

  var goodBye = function (session, results) {

    session.dialogData.weatherParisTomorrow = results.response;  
    session.send("Have a good time, " + session.dialogData.userName + "!");
  };

  this.form = [welcome, weatherParisToday, weatherParisTomorrow, goodBye];
};

module.exports = function (builder) {
  return new meteoResponse(builder);
};