const expenseModel = require('../model/expenseModel');

const addExpense = async (req, res) => {
  try {
    let response = await expenseModel.create(req.body);
    res.status(200).json({
      id: response._id
    });
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: err.message });
  }
}

const getAllExpenses = async (req, res) => {
  try {

    let data = await expenseModel.find({});

    res.status(200).json({ data: data });

  } catch (err) {
    console.log(err)
    res.status(500).json({ message: err.message });
  }
}

const deleteExpense = async (req, res) => {
  try {
    let id = req.body.id;
    let deletedExpense = await expenseModel.findByIdAndDelete(id);
    res.status(200).json({ data: deletedExpense });
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: err.message });
  }
}

const updateExpense = async (req, res) => {
  try {
    let id = req.body.id;
    let data = await expenseModel.findByIdAndUpdate(id, req.body);
    let updatedData = await expenseModel.findById(data.id)
    res.status(200).json({ data: updatedData });

  } catch (err) {
    console.log(err)
    res.status(500).json({ message: err.message });
  }
}
module.exports = { addExpense, getAllExpenses, deleteExpense, updateExpense };