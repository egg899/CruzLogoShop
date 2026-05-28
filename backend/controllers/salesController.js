import Sale from "../models/Sale.js";


export const createSale = async(req, res) => {
    try{
        // const sale = new Sale(req.body);

         const { items, total } = req.body;

        const cleanItems = items.map(item => ({
            productId: item._id,
            name: item.name,
            price: item.price,
            quantity: item.quantity
        }));

        const sale = new Sale({
            user: req.user.id,
            items: cleanItems,
            total
        });


         await sale.save();

        res.status(201).json({
            message: "Venta registrada correctamente",
            sale
        });


    } catch (error) {
        res.status(500).json({
            error: "Error al registrar la venta"
        });
    }

};//creaateSale