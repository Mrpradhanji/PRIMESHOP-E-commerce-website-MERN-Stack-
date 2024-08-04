const stripe = require('../../config/stripe')

const  paymentController = async (req, res) => {
    try {
        const { cartItems } = req.body
        //Object
        const params = {

        }

        const session = await stripe.checkout.sessions.create(params)

        res.status(303).json(session)
        
    } catch (error) {
        res.json({
            message : error?.message || error,
            error : true,
            success : false
        })
    }
}