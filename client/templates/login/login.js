import { Template } from "meteor/templating";

if (Meteor.isClient) {
  Template.login.onCreated(function() {
    requestCredentials();
  });
  Template.login.onRendered(function() {});
  Template.login.events({
    "#loginBtn click": function(events) {}
  });
  Template.login.helpers({});

  var requestCredentials = function() {
    uport
      .requestCredentials(
        {
          requested: ["name"]
        },
        uri => {
          const qr = KJUA({
            text: uri,
            fill: "#000000",
            size: 500,
            back: "rgba(255,255,255,1)"
          });
          //set the uri to the image
          $("#qrc").attr("src", qr.src);
        }
      )
      .then(userProfile => {
        //get the credentials
        console.log(userProfile);
      });
  };
}
