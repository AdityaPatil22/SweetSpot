import Item from "../../schema/itemSchema.js";

const addItem = async (req, res) => {
  try {
    const item = new Item(req.body);
    await item.save();
    res.status(200);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export default addItem;
