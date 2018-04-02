const Film = require('./models/Films');
const router1 = express.Router();


module.exports = function(app) {
    router.get('/', function(req,res, next) {

        Film.find({}).then(item => {
            res.json(item);
        });
    });
    app.get('/api', function(req,res, next) {

        Film.find({}).then(item => {
            res.json(item);
    });
    });
    app.post('/new_film', function(req, res) {
        Film.create({
            title: req.body.title,
            release: req.body.release,
            format: req.body.format,
            stars: req.body.stars
        }).then(item => res.json(item));
    });


}