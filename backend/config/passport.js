const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const { Usuario } = require('../models'); // Considerando que você tenha um modelo Usuario

passport.use(new LocalStrategy(
  async (username, password, done) => {
    try {
      const user = await Usuario.findOne({ where: { username } });

      if (!user) {
        return done(null, false, { message: 'Usuário não encontrado' });
      }

      // Verifica se a senha está correta
      const isMatch = await bcrypt.compare(password, user.password);

      if (isMatch) {
        return done(null, user);
      } else {
        return done(null, false, { message: 'Senha incorreta' });
      }
    } catch (err) {
      return done(err);
    }
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id); // Serializando o usuário por seu ID
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await Usuario.findByPk(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

module.exports = passport;