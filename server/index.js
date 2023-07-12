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
const Health = require("./healths");
const BookMark = require("./bookmarks");
const Travel = require("./travel");
const Movie = require("./movies");
const Education = require("./education");
dotEnv.config();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

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
  const creator = await Creator.findOne({user});
  if (creator) {
    await Creator.findOne({ user })
      .then(async (user) => {
        name = user;
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
  } else {
    res.json({ message: "User not exists, Please login!" });
  }
});

app.post("/api/food-add-category", async (req, res) => {
  const { s1_h, s1_d, s1_i } = req.body;
  const { s2_h, s2_d, s2_i } = req.body;
  const { s3_h, s3_d, s3_i } = req.body;
  let upvote = 0,
    like = false,
    book = false;

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

  await Food.create({ story: tempArr, upvote, like, book })
    .then(() => {
      res.json("Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/api/health-add-category", async (req, res) => {
  const { s1_h, s1_d, s1_i } = req.body;
  const { s2_h, s2_d, s2_i } = req.body;
  const { s3_h, s3_d, s3_i } = req.body;
  let upvote = 0,
    like = false,
    book = false;

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

  await Health.create({ story: tempArr, upvote, like, book })
    .then(() => {
      res.json("Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/api/travel-add-category", async (req, res) => {
  const { s1_h, s1_d, s1_i } = req.body;
  const { s2_h, s2_d, s2_i } = req.body;
  const { s3_h, s3_d, s3_i } = req.body;
  let upvote = 0,
    like = false,
    book = false;

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

  await Travel.create({ story: tempArr, upvote, like, book })
    .then(() => {
      res.json("Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/api/movie-add-category", async (req, res) => {
  const { s1_h, s1_d, s1_i } = req.body;
  const { s2_h, s2_d, s2_i } = req.body;
  const { s3_h, s3_d, s3_i } = req.body;
  let upvote = 0,
    like = false,
    book = false;

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

  await Movie.create({ story: tempArr, upvote, like, book })
    .then(() => {
      res.json("Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/api/education-add-category", async (req, res) => {
  const { s1_h, s1_d, s1_i } = req.body;
  const { s2_h, s2_d, s2_i } = req.body;
  const { s3_h, s3_d, s3_i } = req.body;
  let upvote = 0,
    like = false,
    book = false;

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

  await Education.create({ story: tempArr, upvote, like, book })
    .then(() => {
      res.json("Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/api/get-token", (req, res) => {
  if (token.length >= 1) {
    res.json({ status: 200, token: token, name: name });
  }
  else{
    res.json({message: "not registered/signin yet!"})
  }
});

app.get("/api/food-get-stories", async (req, res) => {
  let docs = await Food.find();
  // console.log(docs);
  let oArr = [];
  let ids = [];
  let upvotesCount = [];
  let liked = [];
  let book = [];

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

  docs.map((doc) => {
    book.push(doc.book);
  });

  res.json({ oArr, ids, upvotesCount, liked, book });
});

app.get("/api/health-get-stories", async (req, res) => {
  let docs = await Health.find();
  // console.log(docs);
  let oArr = [];
  let ids = [];
  let upvotesCount = [];
  let liked = [];
  let book = [];

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

  docs.map((doc) => {
    book.push(doc.book);
  });

  res.json({ oArr, ids, upvotesCount, liked, book });
});

app.get("/api/travel-get-stories", async (req, res) => {
  let docs = await Travel.find();
  // console.log(docs);
  let oArr = [];
  let ids = [];
  let upvotesCount = [];
  let liked = [];
  let book = [];

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

  docs.map((doc) => {
    book.push(doc.book);
  });

  res.json({ oArr, ids, upvotesCount, liked, book });
});

app.get("/api/education-get-stories", async (req, res) => {
  let docs = await Education.find();
  // console.log(docs);
  let oArr = [];
  let ids = [];
  let upvotesCount = [];
  let liked = [];
  let book = [];

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

  docs.map((doc) => {
    book.push(doc.book);
  });

  res.json({ oArr, ids, upvotesCount, liked, book });
});

app.get("/api/movie-get-stories", async (req, res) => {
  let docs = await Movie.find();
  // console.log(docs);
  let oArr = [];
  let ids = [];
  let upvotesCount = [];
  let liked = [];
  let book = [];

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

  docs.map((doc) => {
    book.push(doc.book);
  });

  res.json({ oArr, ids, upvotesCount, liked, book });
});

app.get("/api/update-like", async (req, res) => {
  const { id, upvote, like, category, book } = req.query;
  // console.log(id,upvote,like);
  switch (category) {
    case "food":
      await Food.findByIdAndUpdate({ _id: id }, { upvote, like, book })
        .then(() => {
          res.json("updated");
        })
        .catch((err) => {
          console.log(err);
        });
      break;

    case "health":
      await Health.findByIdAndUpdate({ _id: id }, { upvote, like, book })
        .then(() => {
          res.json("updated");
        })
        .catch((err) => {
          console.log(err);
        });
      break;

    case "book":
      await BookMark.findByIdAndUpdate({ _id: id }, { upvote, like, book })
        .then(() => {
          res.json("updated");
        })
        .catch((err) => {
          console.log(err);
        });
      break;

    case "travel":
      await Travel.findByIdAndUpdate({ _id: id }, { upvote, like, book })
        .then(() => {
          res.json("updated");
        })
        .catch((err) => {
          console.log(err);
        });
      break;
    case "education":
      await Education.findByIdAndUpdate({ _id: id }, { upvote, like, book })
        .then(() => {
          res.json("updated");
        })
        .catch((err) => {
          console.log(err);
        });
      break;
    case "movie":
      await Movie.findByIdAndUpdate({ _id: id }, { upvote, like, book })
        .then(() => {
          res.json("updated");
        })
        .catch((err) => {
          console.log(err);
        });
      break;
    default:
      break;
  }
});

app.get("/api/save-bookmark", async (req, res) => {
  const { story, book, like, upvote } = req.query;
  // console.log(story,book,like,upvote);
  await BookMark.create({ story, book, like, upvote })
    .then(() => {
      res.json("added");
    })
    .then((err) => {
      console.log(err);
    });
});

app.get("/api/get-bookmarks", async (req, res) => {
  let docs = await BookMark.find();
  // console.log(docs);
  let oArr = [];
  let ids = [];
  let upvotesCount = [];
  let liked = [];
  let book = [];

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

  docs.map((doc) => {
    book.push(doc.book);
  });

  res.json({ oArr, ids, upvotesCount, liked, book });
});

app.get("/api/delete-bookmark", async (req, res) => {
  const { id } = req.query;
  await BookMark.findByIdAndDelete({ _id: id })
    .then(() => {
      res.json("deleted bookmark");
    })
    .catch((err) => {
      console.log(err);
    });
});

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
