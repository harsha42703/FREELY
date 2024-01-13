const { Order} = require('../models');


const getOrders = async (request, response) => {
    try {
        const orders = await Order.find({ $and: [{ $or: [{ sellerID: request.userID }, { buyerID: request.userID }] }, { isCompleted: true }] }).populate(request.isSeller? 'buyerID' : 'sellerID', 'username email image country');
        return response.send(orders);
    }
    catch ({ message, status = 500 }) {
        return response.send({
            error: true,
            message
        })
    }
}

module.exports = {
    getOrders
}