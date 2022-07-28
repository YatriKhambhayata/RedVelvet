const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost:27017/",
  {
    dbName: "table_data",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) =>
    err ? console.log(err) : console.log("Connected to table booking database")
);

const express = require("express");
const app = express();
// hello
const cors = require("cors");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {
  resp.send("App is Working");
  // You can check backend is working or not by
  // entering http://loacalhost:5000

  // If you see App is working means
  // backend working properly
});


const TableSchema = new mongoose.Schema({
    table: {
      type: Number,
      required: true,
      default: 0,
    },
    statusoftable : {
      type : Number,
      required: true,
      default: 0
    }
  });

  const Table = mongoose.model("tables", TableSchema);
Table.createIndexes();

app.get("/alltables", async (req, res) => {
  try {
    const data = await Table.find();
    res.send(data);
    // res.send(res)
  } catch (e) {
    res.send("error");
  }
});

app.post("/book", async (req, res) => {
  try {
    Table.updateOne(
      { table: req.body.table },
      { statusoftable : 2},
      function (err, docs) {
        if (err) {
          console.log(err);
        } else {
          console.log("Updated Docs : ", docs);
          res.send(req.body);
        }
      }
    );
  } catch (e) {
    res.send("Something Went Wrong");
  }
});

// app.post("/book", async (req, res) => {
//   try {
//     Table.updateOne(
//       { name: req.body.name },
//       { balance: req.body.balance },
//       function (err, docs) {
//         if (err) {
//           console.log(err);
//         } else {
//           console.log("Updated Docs : ", docs);
//           res.send(req.body);
//         }
//       }
//     );
//   } catch (e) {
//     res.send("Something Went Wrong");
//   }

//   Student.updateOne(
//     { name: req.body.addto },
//     { balance: req.body.newBalance },
//     function (err, docs) {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log("Updated Docs : ", docs);
//         res.send(req.body);
//       }
//     }
//   );
// });

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(5000, () => {
  console.log("port 5000")
});