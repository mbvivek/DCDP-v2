addToLog = function(data) {
  var business = getBusiness();
  data.returnValues.timeInString = new Date(
    parseInt(data.returnValues.time * 1000)
  ).toString();
  business.logs.push(data);
  saveBusiness(business);
};
