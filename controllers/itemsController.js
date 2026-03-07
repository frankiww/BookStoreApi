const items = require('../data/items');

exports.getAllItems = (req, res) => {
    return res.json(items);
};

exports.getItemById = (req, res, next) => {
    const id = Number(req.params.id);

    const item = items.find(i => i.id === id);

    if (!item) {
        // return next(new Error("Item not found"));
        return res.status(404).json({});
    }

    return res.json(item);
};

exports.createItem = (req, res, next) => {
    const { title, author, price } = req.body;

    if (!title || !author || price < 0) {
        // return next(new Error("Invalid data"));
        return res.status(409).json({});
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