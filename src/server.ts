import 'dotenv/config';
import { app } from './app';
import mongoose from 'mongoose';

const port = process.env.PORT || 3000;

const start = (uriDatabase: string) => {
    return app.listen(port, () => {
        try {
            mongoose.connect(uriDatabase);
            console.log(`Server is listening port ${port}...`);
        } catch (error) {
            console.log(error);
        }
    });
};

start(process.env.MONGO_URI as string);
