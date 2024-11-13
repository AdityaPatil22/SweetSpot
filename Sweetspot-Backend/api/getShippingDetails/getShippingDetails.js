import ShippingDetails from "../../schema/shippingDetailsSchema.js";

const getShippingDetails = async (req, res) => {
  try {
    const shippingDetails = await ShippingDetails.find();
    return res.status(200).json(shippingDetails);
  } catch (error) {
    return res.status(404).json({ message: "Something went wrong" });
  }
};

export default getShippingDetails