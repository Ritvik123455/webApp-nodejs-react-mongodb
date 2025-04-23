import path from 'path';
import { fileURLToPath } from 'url';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';   // removes all files from public folder everytime webpack is run
import HtmlWebpackPlugin from 'html-webpack-plugin';         // autmatically generates the html file using the bundled js file

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
    plugins : [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title : 'Chart Generator',
            template : './src/template.ejs',
            filename : 'index.html'       // name of the HTML file that is used by react to render
        })
    ],
    output : {
        filename : '[name].bundle.js',
        path : path.join(__dirname, 'public'), //public folder will have the final js code that will be sent to browser
        publicPath : '/'
    }
}