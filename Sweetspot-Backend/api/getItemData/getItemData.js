import Item from "../../schema/itemSchema.js";

const getItemData = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export default getItemData;
