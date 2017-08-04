# React desde el principio

Si querés probar la aplicación de este proyecto, ejecutá los siguientes comandos en una terminal.

```
git clone https://github.com/ReactJS-BA/react-desde-el-principio.git
cd react-desde-el-principio
npm install
npm start
```

## 01 Primeros pasos

Creamos un directorio nuevo y nos movemos dentro

```
mkdir app && cd $_
```

Inicializamos el proyecto

```
npm init -y
```

Instalamos React como dependencia de desarrollo

```
npm install --save-dev react react-dom prop-types
```

Instalamos el transpilador Babel y los presets

```
npm install --save-dev babel-core babel-preset-es2015 babel-preset-react babel-preset-stage-2

```

Configuramos el transpilador
```
echo '{ "presets": ["es2015", "react", "stage-2"] }' > .babelrc
```

Instalamos el empaquetador WebPack 2 o superior
```
npm install --save-dev webpack webpack-dev-server babel-loader
```

Creamos el archivo de configuración webpack.config.js
```
var config = {
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  },
  modules: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' }
    ]
  }
}

module.exports = config
```

Para comodidad, se pueden agregar los scripts para construir la aplicación y para iniciar un servidor local de desarrollo. Para esto se puede editar el archivo ```package.json``` en la sección ```scripts``` deben quedar las siguientes líneas.

```
  "scripts": {
    "start": "webpack-dev-server --open",
    "build": "webpack -p",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```
