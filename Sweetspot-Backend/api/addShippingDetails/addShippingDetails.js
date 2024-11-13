import shippingDetails from "../../schema/shippingDetailsSchema.js";

const addShippingDetails = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      address,
      city,
      zipcode,
      mobile,
      cartTotal,
      orderDate,
      orderStatus,
    } = req.body;
    const shippingDetailsData = new shippingDetails({
      firstName,
      lastName,
      address,
      city,
      zipcode,
      mobile,
      cartTotal,
      orderDate,
      orderStatus,
    });
    await shippingDetailsData.save();
    return res
      .status(201)
      .json({ message: "Shipping details added successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Error adding shipping details" });
  }
};

export default addShippingDetails;
