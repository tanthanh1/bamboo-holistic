import Cors from "cors";

// Initialize the cors middleware
const cors = Cors({
    methods: ["GET", "POST", "HEAD"],
    origin: "*", // You can specify allowed origins here, e.g., ['https://yourdomain.com']
});

// Helper method to wait for the middleware to execute before continuing
function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result);
            }
            return resolve(result);
        });
    });
}

export { cors, runMiddleware };
