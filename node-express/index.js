const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const mongoose = require('mongoose');
const Handlebars = require('handlebars');
const {
  allowInsecurePrototypeAccess,
} = require('@handlebars/allow-prototype-access');

const homeRoutes = require('./routes/home');
const addRoutes = require('./routes/add');
const cardRoutes = require('./routes/card');
const coursesRoutes = require('./routes/courses');
const ordersRoutes = require('./routes/orders');
const User = require('./models/user');

const app = express();

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs',
  handlebars: allowInsecurePrototypeAccess(Handlebars),
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(async (req, res, next) => {
  try {
    const user = await User.findById('60742f0076248a7889943ad6');
    req.user = user;
    next();
  } catch (e) {
    console.log(e);
  }
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.use('/', homeRoutes);
app.use('/add', addRoutes);
app.use('/courses', coursesRoutes);
app.use('/card', cardRoutes);
app.use('/orders', ordersRoutes);

const PORT = process.env.PORT || 3000;

async function start() {
  try {
    const url =
      'mongodb+srv://dima:B59BAbd52SSecyp@cluster0.ed0es.mongodb.net/shop';
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    const candidate = await User.findOne();
    if (!candidate) {
      const user = new User({
        email: 'dima@mail.ru',
        name: 'Dima',
        cart: { items: [] },
      });
      await user.save();
    }
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
}
start();
