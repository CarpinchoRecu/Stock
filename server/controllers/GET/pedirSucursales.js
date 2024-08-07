import db from "../../config/db.js";


export const pedirSucursales = async (req, res) => {
  try {
    const [sucursales] = await db.query("SELECT * FROM Sucursal");
    res.status(200).json(sucursales);
  } catch (error) {
    console.error('Error obteniendo las sucursales:', error);
    res.status(500).json({ error: 'Error obteniendo las sucursales.' });
  }
};
