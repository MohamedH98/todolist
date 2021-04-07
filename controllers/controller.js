const date = require(`./../date`);

let item = "";
const items = [];
const workItems = [];

exports.renderDayToDo = (req, res) => {
  console.log(item);
  const day = date.getDate();
  res.render("list", { listTitle: day, newListItems: items });
};

exports.redirectToCorrectPage = (req, res) => {
  item = req.body.newItem;
  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
};

exports.renderWorkToDo = (req, res) => {
  res.render("list", { listTitle: "Work", newListItems: workItems });
};

exports.redirectToWork = (req, res) => {
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
};
