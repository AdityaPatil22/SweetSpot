import Item from "../../schema/itemSchema.js";

const addItem = async (req, res) => {
  try {
    const item = new Item(req.body);
    await item.save();
    return res.status(200).json({ message: "Item added successfully" });
  } catch (error) {
    return res.status(400).json({ message: "Failed to Add Item" });
  }
};

export default addItem;
