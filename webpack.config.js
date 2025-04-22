import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    mode : 'development',
    entry : {
        myapp : './src/index.js'
    },
    module : {
        rules : [
            {test : /\.(js|jsx)$/, use : ['babel-loader']} //babel loader translates react code to js
        ]
    },
    output : {
        filename : '[name].bundle.js',
        path : path.join(__dirname, 'public'), //public folder will have the final js code that will be sent to browser
        publicPath : '/'
    }
}