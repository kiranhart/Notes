const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');
const chalk = require('chalk');

const PORT = process.env.PORT || 5000;

const userRoutes = require('./routes/userRoutes');
const noteRoutes = require('./routes/noteRoutes');

const errorHandler = require('./middlewares/errorMiddlware');

const app = express();

app.use(compression());

app.use(
    helmet({
        contentSecurityPolicy: false
    })
);

app.use(morgan('tiny'));
app.use('*', cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/users', userRoutes);
app.use('/notes', noteRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(chalk.green(`Server is running on port ${PORT}`));
});
