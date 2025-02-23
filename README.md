# MongoDB Aggregation $lookup Error

This repository demonstrates a common error in MongoDB aggregations when using the `$lookup` stage.  The error occurs due to a mismatch between the `localField` and `foreignField` used for joining documents.

## Bug Description

The provided JavaScript code attempts to perform a lookup from the `users` collection to the `orders` collection. However, the `foreignField` is incorrectly specified, causing the aggregation to fail.

## Solution

The solution involves correcting the `foreignField` to match the actual field name in the `orders` collection, ensuring that a correct join is performed.

## How to reproduce

1.  Clone this repository.
2.  Ensure you have a MongoDB instance running.
3.  Create two collections `users` and `orders` with appropriate data.
4.  Run the `bug.js` file. Observe the error. 
5.  Run the `bugSolution.js` file to see the corrected aggregation.
