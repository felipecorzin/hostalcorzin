const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');

const generarJWT = ( uid, name ) => {

    const payload = { uid, name };
    
    return new Promise( (resolve, reject) => {

        jwt.sign( payload, process.env.SECRET_JWT_SEED, {
            expiresIn: '24h'
        }, (err, token ) => {
    
            if ( err ) {
                // TODO MAL
                console.log(err);
                reject(err);
    
            } else {
                // TODO BIEN
                resolve( token  )
            }
        })
    });
};

const comprobarTokenUsuario = ( req, res, next) => {
  const userToken = req.get('x-token') || '';
  comprobarToken( userToken )
  .then(  (decoded) => {
      console.log('Decoded', decoded );
      req.usuario = decoded.usuario;
      next();
  })
  .catch( err => {

      res.json({
          ok: false,
          mensaje: 'Token no es correcto'
      });

  });

};

const checkUsuarioExisted = (req, res, next) => {
    if (req.body.usuarios) {
      for (let i = 0; i < req.body.usuarios; i++) {
        if (!Usuario.includes(req.body.usuarios[i])) {
          res.status(400).send({
            message: `Failed! Usuario ${req.body.usuarios[i]} does not exist!`
          });
          return;
        }
      }
    }
    next();
};

module.exports = { 
    generarJWT,
    comprobarTokenUsuario,
    checkUsuarioExisted
}
