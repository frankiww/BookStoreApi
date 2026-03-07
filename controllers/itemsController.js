const items = require('../data/items');

exports.getAllItems = (req, res) => {
    return res.json(items);
};

exports.getItemById = (req, res, next) => {
    const id = Number(req.params.id);

    const item = items.find(i => i.id === id);

    if (!item) {
        const error = new Error("Предмет не найден");
        error.status = 404;
        error.success = false;
        return next(error);
    }

    return res.json(item);
};

exports.createItem = (req, res, next) => {
    const { title, author, price } = req.body;

    if (!title || !author || price < 0) {
        const error = new Error("Некорректно заполнены поля");
        error.status = 400;
        error.success = false;
        return next(error);
    }

    const newItem = {
        id: items.length + 1,
        title,
        author,
        price
    };

    items.push(newItem);

    return res.status(201).json(newItem);
};