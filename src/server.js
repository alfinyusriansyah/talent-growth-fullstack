const Hapi = require('@hapi/hapi');

const init = async () => {
  const server = Hapi.server({
    port: 3001, // Ganti dengan port yang Anda inginkan
    host: 'localhost',
  });

  // Endpoint untuk login
  server.route({
    method: 'POST',
    path: '/api/login',
    handler: (request, h) => {
      // Logika untuk memeriksa kredensial login
      // Misalnya, memeriksa kredensial di database

      const { username, password } = request.payload;

      // Lakukan validasi login
      if (username === 'admin' && password === 'password') {
        // Login berhasil
        return { success: true, message: 'Login successful' };
      } else {
        // Login gagal
        return h.response({ success: false, message: 'Invalid credentials' }).code(401);
      }
    },
  });

  // Endpoint untuk register
  server.route({
    method: 'POST',
    path: '/api/register',
    handler: (request, h) => {
      // Logika untuk mendaftarkan pengguna baru
      // Misalnya, menyimpan data pengguna ke database

      const { username, password } = request.payload;

      // Simulasikan registrasi berhasil
      // Anda dapat menyesuaikan logika ini dengan database atau penyimpanan data yang Anda gunakan
      return { success: true, message: 'Registration successful' };
    },
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();