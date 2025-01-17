# Updating Resources

## Overview

Today is the final buildout of the book collection app. Our final step is to update books in our application.

## Daily Plan

- Discussion on diversity, inclusion, equity, and belonging in the tech industry
- Review code challenges
- Updating Resources
- Code demo
- Lab preview

## Learning Objectives

As a result of completing lecture 14 of Code 301, students will:

- Describe and Define
  - UPDATE
  - PUT
  - Diversity and Inclusion
- Be able to update a resources in a mongo database
- Be able to update a resource instantly in a React application and have that resource state persist on reload

## Notes

1. Why do we need to talk about Diversity and Inclusion?

1. What does the U stand for in CRUD?

1. How do we find a record by id and update it in Mongoose?

1. Sending an axios request to update a record:

  ```javaScript
  const SERVER = 'http://localhost:3001';
  // id of the record to update
  const id = 2; 
  // the entire record with the updated information
  const updatedRecord = {name: 'bobby', age: 105}; 

  axios.put(`${SERVER}/${id}`, { recordToUpdate: updatedRecord });
  ```

1. Updating a record server side:

  ```javaScript
  app.put('/someRoute/:id', callback);

  callback(request, response) {
    const record = request.body.recordToUpdate;
    const id = request.query.params.id;

    Model.findOneAndUpdate(id, record);
  }
  ```

1. Updating a record server side when the record is nested inside of a user object (like the books in the user)

  ```javaScript
  app.put('/someRoute/:index', callback);

  callback(request, response) {
    const email = request.body.email; // send the email in the body as well as the record
    const record = request.body.recordToUpdate;
    const index = request.query.params.index;

    Model.findOne({ email }, (err, person) => {
      if(err) console.error(err);
      // now that we have the user, we need to replace the record
      const newBooks = person.books.splice(index, 1, record);
      // replace the books array with the new books array
      person.books = newBooks;
      // save the updated person in the DB
      person.save()
    })
  }
  ```

1. Deploying Mongo to Heroku!  

### Hosted Mongo Databases: Atlas

While you can run Mongo on your own machines, it's quite common to run an instance of Mongo in the cloud so that you can take advantage of better hardware, more memory and higher speed networks. Mongo offers a hosted cloud database service called "Atlas" ... once you've got this setup, it's easy to connect your API servers from anywhere in the world to use it.

1. Sign Up
1. Setup the organization
   - Name your organization and project
   - These can be whatever you want to call them
   - Set Preferred Language (Javascript)
1. Pick the "Free" (Shared Cluster) option
1. Create Cluster
   - Choose AWS
   - Choose the closest region to your location (i.e. Oregon)
1. Create a DB User
   - Click the "Database Access" link
   - Add a new user
     - Choose Password Authentication
     - Choose a username and password
     - For access rights, choose "Atlas Admin"
1. Enable Network Access
   - Click Network Access Button
   - Click "Add IP Address"
   - Choose the "Allow Access from Anywhere" option
   - Click "Confirm"
1. Get your connection string
   - Click "Clusters" button on the left
   - Click on the "Connect" button on the cluster screen
   - To connect to your new database with the command line:
     - Choose the "Connect with Mongo Shell" option
     - Copy out the connection string
     - This will look something like this:
     - `mongo "mongodb+srv://cluster0.xtrut.mongodb.net/<dbname>" --username dba`
     - Replace `<dbname>` with the name of the database you want to use for your application, for example 'people'
   - To connect your Node or Express application:
     - Choose the "Connect your Application" option
     - This will look something like this:
     - `mongodb+srv://dba:<password>@cluster0.xtrut.mongodb.net/<dbname>?retryWrites=true&w=majority`
     - Replace `<password>` with the password you created earlier
     - Replace `<dbname>` with the name of the database you want to use for your application, for example 'people'
     - Use this as  `MONGODB_URI` in your .env file or at Heroku when you deploy
