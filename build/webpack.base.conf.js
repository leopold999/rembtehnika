const path = require('path')
const fs = require('fs')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin')
const autoprefixer = require('autoprefixer');
// const fileContent = require("php!/mail.php");
const webpack = require('webpack')
// const CssUrlRelativePlugin = require('css-url-relative-plugin')

const PATHS = { 
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  assets: 'assets/'
}
const PAGES_DIR = `${PATHS.src}/pug/pages/`;
const PAGES_ABOUT_DIR = `${PATHS.src}/pug/pages/about/`;
const PAGES_CONTACTS_DIR = `${PATHS.src}/pug/pages/about/contacts/`;
const PAGES_ARTICLES_DIR = `${PATHS.src}/pug/pages/articles/`;
const PAGES_ASKANSWER_DIR = `${PATHS.src}/pug/pages/ask-answer/`;
const PAGES_EDUCATION_DIR = `${PATHS.src}/pug/pages/education/`;
const PAGES_ERRORS_DIR = `${PATHS.src}/pug/pages/errors/`;
const PAGES_ERRORS_HOL_DIR = `${PATHS.src}/pug/pages/errors/kody-oshibok-holodilnikov/`;
const PAGES_ERRORS_SM_DIR = `${PATHS.src}/pug/pages/errors/kody-oshibok-stiralnyh-mashin/`;
const PAGES_ERRORS_PM_DIR = `${PATHS.src}/pug/pages/errors/kody-oshibok-posudomoechnyh-mashin/`;
const PAGES_JOB_DIR = `${PATHS.src}/pug/pages/job/`;
const PAGES_MALFUNCTIONS_HOL_DIR = `${PATHS.src}/pug/pages/malfunctions/neispravnosti-holodilnikov/`;
const PAGES_MALFUNCTIONS_SM_DIR = `${PATHS.src}/pug/pages/malfunctions/neispravnosti-stiralnyh-mashin/`;
const PAGES_MALFUNCTIONS_PM_DIR = `${PATHS.src}/pug/pages/malfunctions/neispravnosti-posudomoechnyh-mashin/`;
const PAGES_REPAIRS_DIR = `${PATHS.src}/pug/pages/repairs/`;
const PAGES_REVIEWS_DIR = `${PATHS.src}/pug/pages/reviews/`;



const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'));
const PAGES_ABOUT = fs.readdirSync(PAGES_ABOUT_DIR).filter(fileName => fileName.endsWith('.pug'));
const PAGES_CONTACTS = fs.readdirSync(PAGES_CONTACTS_DIR).filter(fileName => fileName.endsWith('.pug'));
const PAGES_ARTICLES = fs.readdirSync(PAGES_ARTICLES_DIR).filter(fileName => fileName.endsWith('.pug'));
const PAGES_ASKANSWER = fs.readdirSync(PAGES_ASKANSWER_DIR).filter(fileName => fileName.endsWith('.pug'));
const PAGES_EDUCATION = fs.readdirSync(PAGES_EDUCATION_DIR).filter(fileName => fileName.endsWith('.pug'));
const PAGES_ERRORS = fs.readdirSync(PAGES_ERRORS_DIR).filter(fileName => fileName.endsWith('.pug'));
const PAGES_ERRORS_HOL = fs.readdirSync(PAGES_ERRORS_HOL_DIR).filter(fileName => fileName.endsWith('.pug'));
const PAGES_ERRORS_SM = fs.readdirSync(PAGES_ERRORS_SM_DIR).filter(fileName => fileName.endsWith('.pug'));
const PAGES_ERRORS_PM = fs.readdirSync(PAGES_ERRORS_PM_DIR).filter(fileName => fileName.endsWith('.pug'));
const PAGES_JOB = fs.readdirSync(PAGES_JOB_DIR).filter(fileName => fileName.endsWith('.pug'));
const PAGES_MALFUNCTIONS_HOL = fs.readdirSync(PAGES_MALFUNCTIONS_HOL_DIR).filter(fileName => fileName.endsWith('.pug'));
const PAGES_MALFUNCTIONS_SM = fs.readdirSync(PAGES_MALFUNCTIONS_SM_DIR).filter(fileName => fileName.endsWith('.pug'));
const PAGES_MALFUNCTIONS_PM = fs.readdirSync(PAGES_MALFUNCTIONS_PM_DIR).filter(fileName => fileName.endsWith('.pug'));
const PAGES_REPAIRS = fs.readdirSync(PAGES_REPAIRS_DIR).filter(fileName => fileName.endsWith('.pug'));
const PAGES_REVIEWS = fs.readdirSync(PAGES_REVIEWS_DIR).filter(fileName => fileName.endsWith('.pug'));



module.exports = {
  // BASE config
  externals: {
    paths: PATHS
  },
  entry: {
    app: PATHS.src
  },
  output: {
    filename: `${PATHS.assets}js/[name].js`,
    path: PATHS.dist,
    publicPath: '/'
    // publicPath: '/FSD'
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        loaders: 'pug-loader',
        options: { pretty: true }
      }, {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      }, {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
      }
      }, {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
        name: 'fonts/[name].[ext]'
      }
      },{
        test: /\.(jpe?g|png)$/i,
        loaders: [
          'file-loader',
          'webp-loader'
        ]
      }, {
        test: /\.php$/,
        loaders: [
          'html-minify',
          'php-loader'
        ]
      }, {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          }, {
            loader: 'postcss-loader',
            options: { sourceMap: true, config: { path: `${PATHS.src}/js/postcss.config.js` } }
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true
          }
        }
      ]

    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: { sourceMap: true }
        }, {
          loader: 'postcss-loader',
          options: { 
            sourceMap: true, 
            config: { path: `${PATHS.src}/js/postcss.config.js` },
            plugins: [
              autoprefixer({
                  
              })
          ],
          sourceMap: true
          }
        }
      ]
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `[name].css`,
    }),
    // Copy HtmlWebpackPlugin and change index.html for another html page
    
    new HtmlWebpackPlugin({
      hash: false,
      template: `${PATHS.src}/index.pug`,
      filename: './index.html'
    }),
    new HtmlWebpackPlugin({
      hash: false,
      template: `${PATHS.src}/error404.pug`,
      filename: './error404.html'
    }),
    // ...PAGES.map(page => new HtmlWebpackPlugin({
    //   template: `${PAGES_DIR}/${page}`,
    //   filename: `./${page.replace(/\.pug/,'.html')}`,
    // })),
    ...PAGES_ABOUT.map(page => new HtmlWebpackPlugin({
      template: `${PAGES_ABOUT_DIR}/${page}`,
      filename: `./about/${page.replace(/\.pug/,'.html')}`,
    })),
    ...PAGES_CONTACTS.map(page => new HtmlWebpackPlugin({
      template: `${PAGES_CONTACTS_DIR}/${page}`,
      filename: `./about/contacts/${page.replace(/\.pug/,'.html')}`,
    })),
    ...PAGES_ARTICLES.map(page => new HtmlWebpackPlugin({
      template: `${PAGES_ARTICLES_DIR}/${page}`,
      filename: `./articles/${page.replace(/\.pug/,'.html')}`,
    })),
    ...PAGES_ASKANSWER.map(page => new HtmlWebpackPlugin({
      template: `${PAGES_ASKANSWER_DIR}/${page}`,
      filename: `./ask-answer/${page.replace(/\.pug/,'.html')}`,
    })),
    ...PAGES_EDUCATION.map(page => new HtmlWebpackPlugin({
      template: `${PAGES_EDUCATION_DIR}/${page}`,
      filename: `./education/${page.replace(/\.pug/,'.html')}`,
    })),
    ...PAGES_ERRORS.map(page => new HtmlWebpackPlugin({
      template: `${PAGES_ERRORS_DIR}/${page}`,
      filename: `./errors/${page.replace(/\.pug/,'.html')}`,
    })),
    ...PAGES_ERRORS_HOL.map(page => new HtmlWebpackPlugin({
      template: `${PAGES_ERRORS_HOL_DIR}/${page}`,
      filename: `./errors/kody-oshibok-holodilnikov/${page.replace(/\.pug/,'.html')}`,
    })),
    ...PAGES_ERRORS_SM.map(page => new HtmlWebpackPlugin({
      template: `${PAGES_ERRORS_SM_DIR}/${page}`,
      filename: `./errors/kody-oshibok-stiralnyh-mashin/${page.replace(/\.pug/,'.html')}`,
    })),
    ...PAGES_ERRORS_PM.map(page => new HtmlWebpackPlugin({
      template: `${PAGES_ERRORS_PM_DIR}/${page}`,
      filename: `./errors/kody-oshibok-posudomoechnyh-mashin/${page.replace(/\.pug/,'.html')}`,
    })),
    ...PAGES_JOB.map(page => new HtmlWebpackPlugin({
      template: `${PAGES_JOB_DIR}/${page}`,
      filename: `./job/${page.replace(/\.pug/,'.html')}`,
    })),
    ...PAGES_MALFUNCTIONS_HOL.map(page => new HtmlWebpackPlugin({
      template: `${PAGES_MALFUNCTIONS_HOL_DIR}/${page}`,
      filename: `./neispravnosti-holodilnikov/${page.replace(/\.pug/,'.html')}`,
    })),
    ...PAGES_MALFUNCTIONS_SM.map(page => new HtmlWebpackPlugin({
      template: `${PAGES_MALFUNCTIONS_SM_DIR}/${page}`,
      filename: `./neispravnosti-stiralnyh-mashin/${page.replace(/\.pug/,'.html')}`,
    })),   
    ...PAGES_MALFUNCTIONS_PM.map(page => new HtmlWebpackPlugin({
      template: `${PAGES_MALFUNCTIONS_PM_DIR}/${page}`,
      filename: `./neispravnosti-posudomoechnyh-mashin/${page.replace(/\.pug/,'.html')}`,
    })),       
    ...PAGES_REPAIRS.map(page => new HtmlWebpackPlugin({
      template: `${PAGES_REPAIRS_DIR}/${page}`,
      filename: `./repairs/${page.replace(/\.pug/,'.html')}`,
    })),    
    ...PAGES_REVIEWS.map(page => new HtmlWebpackPlugin({
      template: `${PAGES_REVIEWS_DIR}/${page}`,
      filename: `./reviews/${page.replace(/\.pug/,'.html')}`,
    })),
    

    new HtmlWebpackPugPlugin(),
    
    new CopyWebpackPlugin([
      { from: `${PATHS.src}/img`, to: `${PATHS.assets}img` },
      { from: `${PATHS.src}/fonts/font-files`, to: `${PATHS.assets}fonts` },
      { from: `${PATHS.src}/static`, to: '' },
      { from: `${PATHS.src}/php`, to: '' },
      { from: `${PATHS.src}/.htaccess`, to: '' }
    ]),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
 
  ],
}

