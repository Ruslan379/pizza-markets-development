
const { Order } = require("../../models");


const addOrder = async (req, res, next) => {
    // console.log("addOrder-->req.body:".bgYellow.red); //?
    // console.log(req.body);
    const order = await Order.create(req.body);

    //! С добавлением _id Пользователя, который сделал заказ
    // const order = await Order.create({ ...req.body, owner: userId }); //?

    res.status(201).json({ order });
};

module.exports = addOrder;