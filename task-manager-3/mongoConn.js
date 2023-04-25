const { MongoClient, ObjectID } = require('mongodb');

const connURL = 'mongodb+srv://admin:admin@cluster0.90syhiz.mongodb.net/taskDB'
const dbName = 'task-manager'

MongoClient.connect(connURL, { useUnifiedTopology: true }, (error, client) => {
    if(error) return console.log('Unable to connect to database')

    const db = client.db(dbName)
    db.collection('users').insertOne({
        name: 'Riya',
        age: 3
    })
    .then(result => console.log("Data inserted ", result.ops))
    .catch(error => console.log(error))

    db.collection('users').insertMany([
        {
            name: 'Rahul',
            age: 33
        },
        {
            name: 'Navin',
            age: 23
        }
    ])
    .then(result => console.log("Data inserted ", result.ops))
    .catch(error => console.log(error))

    // db.collection('users').findOne({ name: 'Riya' })
    // .then(result => console.log("Data found ", result))
    // .catch(error => console.log(error))

    // db.collection('users').find({ name: 'Riya' })
    // .toArray()
    // .then(result => console.log("Data found ", result))
    // .catch(error => console.log(error))

    // db.collection('users').updateOne({ _id: new ObjectID('6440f04ad0db4f2d2097d41e')},
    //  { $set: { name: 'Riya Gupta'}})
    //  .then(result => console.log("Updated data ", result.modifiedCount))
    //  .catch(error => console.log(error))

    // db.collection('users').updateMany({ age: 3 },
    // { $set: { age: 4}})
    // .then(result => console.log("Updated data ", result.modifiedCount))
    // .catch(error => console.log(error))

    // db.collection('users').deleteOne({ _id: new ObjectID('6440efb059113020e848db8c')})
    //  .then(result => console.log("Deleted data ", result.deletedCount))
    //  .catch(error => console.log(error))

    // db.collection('users').deleteMany({ age: 4 })
    //     .then(result => console.log("Deleted data ", result.deletedCount))
    //     .catch(error => console.log(error))

})


