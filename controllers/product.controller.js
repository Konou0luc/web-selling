import productModel from "../models/product.model.js"

export const getProduct = async (req, res) => {
    const products = await productModel.find();
    return res.status(200).json(products)
}

export const setProduct = async (req, res) => {

    if (!req.body.name) {
        res.status(400).json({ message: "Merci d'ajouter un nom de produit" })
    } else if (!req.body.price) {
        res.status(400).json({ message: "Merci d'ajouter un prix" })
    } else if (!req.body.description) {
        res.status(400).json({ message: "Merci d'ajouter une description" })
    } else if (!req.body.image) {
        res.status(400).json({ message: "Merci d'ajouter une image" })
    }

    const product = await productModel.create({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        image: req.body.image
    })

    return res.status(200).json(product)
}

export const editProduct = async (req, res) => {

    try {
        const { id } = req.params
        const product = await productModel.findById(id)
        if (!product) {
            return res.status(400).json({ error: "Ce produit n'existe pas" })
        }
        const updateProduct = await productModel.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        )
        return res.status(200).json(updateProduct)
    } catch (error) {
        return res.status(500).json({ error: err.message });
    }
}

export const deleteProduct = async (req, res) => {
    const product = await productModel.findByIdAndDelete(req.params.id)

    if (!product) {
        return res.status(400).json({ error: "Ce produit n'existe pas" })
    }
    return res.status(200).json({ message: "Produit supprimer avec succès " + req.params.id })
}