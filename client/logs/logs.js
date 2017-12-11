addToLog = function(data) {
  var business = getBusiness();
  data.returnValues.timeInString = new Date(
    parseInt(data.returnValues.time * 1000)
  ).toString();
  business.logs.push(data);
  saveBusiness(business);
};

getAllLogs = function() {
  var business = getBusiness();
  var logs = [];
  for (let log of business.logs) {
    logs.push(log);
  }
  return logs;
};

getAllLogsOfEvent = function(event) {
  var business = getBusiness();
  var logs = [];
  for (let log of business.logs) {
    if (log.event == event) {
      logs.push(log);
    }
  }
  return logs;
};
