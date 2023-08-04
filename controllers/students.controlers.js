const std = async (req, res) => {
  try {
    console.log(req.body);
    await std.create(req.body);
    res.send("student added");
  } catch (error) {
    res.send(error.message);
  }
};
module.exports = std;
