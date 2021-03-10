'use strict';

const superagent = require('superagent');

function getJobs(request, response) {
  console.log('in Jobs')
  const url=`https://remotive.io/api/remote-jobs`;
  superagent
    .get(url)
    .then(res => {
      // console.log('results from superagent', res.body, res.status)
      const finalJobArray = res.body.jobs.map(job => new Job(job));
      response.status(200).send(finalJobArray);
    })
    .catch(err => {
      console.error('error from superagent', err);
      response.status(500).send(`server error ${err}`);
    })
}

function Job(obj) {
  this.name = obj.title;
  this.company_logo_url = obj.company_logo_url;
  this.description = obj.description;
  this.salary = obj.salary;
  this.company_name = obj.company_name;
  this.url = obj.url;
}

module.exports = getJobs;
