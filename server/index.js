const express = require("express");
const app = express();
const dotEnv = require("dotenv");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Creator = require("./creators");
const Food = require("./foodies");
dotEnv.config();

const isFilledCorrectData = (req, res, next) => {
  let { user, password } = req.body;
  if (!user || user.trim().length <= 0) {
    res.json({ status: 400, message: "Please enter valid username" });
  } else if (!password || password.trim().length <= 0) {
    res.json({ status: 400, message: "Please enter valid password" });
  } else {
    name = user;
    next();
  }
};

const isUserAlreadyExist = (res, req, next) => {
  let { user, password } = req.body;
  const creator = Creator.findOne({ user });

  if (creator) {
    res.json({ message: 400, message: "User already exists" });
  } else {
    next();
  }
};

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

let token = "";
let name = "";

app.get("/", (req, res) => {
  res.json({ message: "All operational!" });
});

app.post("/api/register", isFilledCorrectData, async (req, res) => {
  let { user, password } = req.body;
  const creator = await Creator.findOne({ user });
  if (creator) {
    res.json({ message: 400, message: "User already exists" });
  } else {
    let encryptedPassword = await bcrypt.hash(password, 10);
    await Creator.create({ user, password: encryptedPassword })
      .then(() => {
        token = jwt.sign({ user, password }, process.env.JWT_SECRET);
        //   res.json({status: 200,message: "Creator registered!",token: token });
        res.redirect(`${process.env.HOST_URL}/`);
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

app.post("/api/login", isFilledCorrectData, async (req, res) => {
  let { user, password } = req.body;
  await Creator.findOne({ user })
    .then(async (user) => {
      let isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        token = jwt.sign({ user, password }, process.env.JWT_SECRET);
        res.redirect(`${process.env.HOST_URL}/`);
      } else {
        res.json({ message: "Wrong Password" });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/api/add-category", async (req, res) => {
  const { s1_h, s1_d, s1_i } = req.body;
  const { s2_h, s2_d, s2_i } = req.body;
  const { s3_h, s3_d, s3_i } = req.body;

  let tempArr = [];
  let obj = {};
  obj.h = s1_h;
  obj.d = s1_d;
  obj.i = s1_i;
  tempArr.push(obj);

  // tempArr = [];
  obj = {};
  obj.h = s2_h;
  obj.d = s2_d;
  obj.i = s2_i;
  tempArr.push(obj);

  obj = {};
  obj.h = s3_h;
  obj.d = s3_d;
  obj.i = s3_i;
  tempArr.push(obj);

  await Food.create({ story: tempArr })
    .then(() => {
      res.json("Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/api/get-token", (req, res) => {
  if (token.length >= 1) {
    res.json({ status: 200, token: token, name : name });
  }
});

app.get("/api/get-stories", async (req, res) => {
  let docs = await Food.find();
  // console.log(docs);
  let oArr = [];
  let ids = [];
  let upvotesCount = [];
  let liked = [];

  docs.map((doc) => {
    let iArr = [];
    doc.story.map((story) => {
      iArr.push(story);
    });
    oArr.push(iArr);
  });

  docs.map((doc) => {
    ids.push(doc._id);
  });

  docs.map((doc) => {
    upvotesCount.push(doc.upvote);
  });

  docs.map((doc) => {
    liked.push(doc.like);
  });
  res.json({oArr,ids,upvotesCount,liked});
});

app.get("/api/update-like", async (req,res) => {
  const {id,upvote,like} = req.query;
  // console.log(id,upvote,like);
  await Food.findByIdAndUpdate({_id:id},{upvote,like}).then(() => {
    res.json("updated");
  }).catch((err) => {
    console.log(err);
  })
  
})

app.listen(process.env.SERVER_PORT, () => {
  mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB");
      console.log(`Server running on port ${process.env.SERVER_PORT}`);
    })
    .catch(() => {
      console.log("Could not connect to MongoDB");
    });
});
