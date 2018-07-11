const tf = require("@tensorflow/tfjs");
const fs = require("fs");
const csv = require("fast-csv");
var stream = require("stream");

var loan_cl = []
var branch_cl = []
var centre_cl = []
var employee_cl = []

var getClassifierData = () => {
    var csvStream = csv.parse().on("data",() => {
        data.push(data)
    }).on("end", () => {
        console.log(data);
    })
}

stream.pipe(csvStream);

var predictAndIdentify = () => {
    const model = tf.sequential();
    model.add(tf.layers.dense({units: 1, inputShape: [1]}));

    // Prepare the model for training: Specify the loss and the optimizer.
    model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

    // Generate some synthetic data for training.
    const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
    const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);

    // Train the model using the data.
    model.fit(xs, ys).then(() => {
    // Use the model to do inference on a data point the model hasn't seen before:
    model.predict(tf.tensor2d([5], [1, 1])).print();
    });
}