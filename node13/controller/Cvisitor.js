const { Visitor } = require('../model');

exports.visitor = async (req, res) => {
    let result = await Visitor.findAll();
    res.render('visitor', {data: result});
}

// Register async + await 문법
exports.register = async (req, res) => {
    let data = {
        name: req.body.name,
        comment: req.body.comment
    }
    let result = await Visitor.create(data);
    console.log(result);
    res.send(String(result.id));
}

// Delete async + await 문법
exports.delete = async (req, res) => {
    let result = await Visitor.destroy({
        where: {
            id: req.body.id
        }
    });
    console.log(result);
    res.send(String(result));
}

// async + await 문법
exports.get_visitor_by_id = async (req, res) => {
    let result = await Visitor.findOne({
        where: {
            id: req.query.id
        }
    });
    res.send(result);
}

// Update async + await 문법
exports.update_visitor = async (req, res) => {
    let data = {
        name: req.body.name,
        comment: req.body.comment
    }
    let result = await Visitor.update(data, {
        where: {
            id: req.body.id
        }
    });
    res.send(result);
}
