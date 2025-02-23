```javascript
const pipeline = [
  {
    $match: { user_id: 'some_user_id' }
  },
  {
    $lookup: {
      from: 'orders',
      localField: '_id',
      foreignField: 'user_id', //Corrected field name
      as: 'orders'
    }
  }
];

db.users.aggregate(pipeline).toArray((err, result)=>{
  if(err) console.log(err)
  console.log(result)
})
```