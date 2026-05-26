import Sale from "../models/Sale.js";


export const createSale = async(req, res) => {
    try{
        const sale = new Sale(req.body);

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