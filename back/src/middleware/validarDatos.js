function validarDatos(req, res, next) {
    const { title, year, director, duration, genre, rate, poster } = req.body;

    if (!title || !year || !director || !genre || !rate) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }


    if (typeof year !== 'number' || !Number.isInteger(year) || year.toString().length !== 4) {
        return res.status(400).json({ message: 'El año debe ser un número de 4 dígitos' });
    }

    next();
}

module.exports = validarDatos;
