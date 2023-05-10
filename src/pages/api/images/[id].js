import fs from "fs";

export default async function handler(req, res) {
  const { id } = req.query;
  const path = `src/assets/photo-carousel/${id}.png`; // Path para leer el archivo de imagen
  const img = fs.readFileSync(path); // Lee el archivo de imagen del sistema de archivos
  res.setHeader("Content-Type", "image/png");
  res.send(img);// Devuelve el archivo de imagen como respuesta
}
