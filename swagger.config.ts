import { SwaggerDefinition } from "swagger-jsdoc"
import { SwaggerOptions } from "swagger-ui-express"

const options : SwaggerOptions = {
    swaggerDefinition: {
        openapi: '3.1.0',
        info: {
            title: 'restaurant-reviews-api',
            description: 'A powerful and easy-to-use API for fetching and managing restaurant reviews. Users can read, write, update, and delete reviews for various restaurants.',
            version: '1.0.0'
        },
        servers: [
            { url: 'http://localhost:' + process.env.PORT }
        ]
    },
    apis: [
        './src/**/*.ts'
    ]
}

export default options;