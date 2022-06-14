const path = require("path"); /* node path */
const glob = require("glob");
const HtmlWebpackPlugin = require("html-webpack-plugin"); /* for loading / create html */
const MinicssExtractPlugin = require("mini-css-extract-plugin"); /* extracting css from js*/
const PurgecssPlugin = require("purgecss-webpack-plugin"); /* for cleaning unused style */
const Dotenv = require("dotenv-webpack");

const ROOT_PATH = {
  src: path.resolve(__dirname, `src`),
};

const ASSET_PATH = {
  assets: path.resolve(__dirname, `assets`),
};

module.exports = {
  mode: "development",
  entry: "./src/index.js",

  output: {
    filename: "[name][contenthash].bundle.js",
    path: path.resolve(__dirname, "./dist/dev"),
    clean: true,
  },

  resolve: {
    // for shorten imports
    alias: {
      // components root path
      "@components": `${ROOT_PATH.src}/res/components`,

      // globals root path
      "@globals": `${ROOT_PATH.src}/res/globals`,

      // libs
      "@libs": `${ROOT_PATH.src}/lib`,

      // context root path
      "@context": `${ROOT_PATH.src}/res/context`,

      // styles root path
      "@styles": `${ROOT_PATH.src}/res/styles/scss`,

      // svgs root path
      "@svg": `${ROOT_PATH.src}/res/globals/svg`,

      // assets root path
      "@assets": `${ASSET_PATH.assets}`,

      // resolve naming conflicts using its file extention
      extensions: [
        ".jsx",
        ".js",
        ".json",
        "...",
      ] /* ... use default extention */,
    },
  },

  module: {
    rules: [
      // load css
      {
        // sass or scss
        test: /\.s[ac]ss$/i,
        use: [MinicssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        // transpiler
        test: /\.m?(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            targets: { esmodules: true },
          },
        },
      },
      //  pulling assets
      {
        test: /\.(png|svg|jpg|jpeg|gif|jfif)$/i,
        type: "asset/resource",
      },

      // pulling fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },

  plugins: [
    // create root html
    new HtmlWebpackPlugin({
      title: "Usapp",
      filename: "index.html",
    }),
    // css extractor from js
    new MinicssExtractPlugin({
      filename: "[name].bundle.css",
    }),
    // unused style clean up
    new PurgecssPlugin({
      paths: glob.sync(`${ROOT_PATH.src}/**/*`, { nodir: true }),
    }),
    new Dotenv(),
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, "./dist/dev"),
    },
    proxy: {
      "/api": "http://localhost:9000",
    },
    open: true,
    hot: true,
    compress: true,
    port: 9000,
  },
};