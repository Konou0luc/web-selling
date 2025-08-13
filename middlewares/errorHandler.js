
export default function errorHandler(err, req, res, next){
    console.error("Erreur survenue", err.message)
    res.status(500).json({error: "Nous rencontrons une erreur interne venant du serveur", details: err.message})
    next()
}