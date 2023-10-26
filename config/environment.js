const development = {
  name: 'development',
  db: 'qr-scanner-dev',
  jwt_secret_key: 'qr-scanner',
}

// eslint-disable-next-line no-unused-vars
const production = {
  name: 'production',
  db: process.env.QR_SCANNER_DB_NAME,
  jwt_secret_key: process.env.QR_SCANNER_JWT_SECRET_KEY,
}

// eslint-disable-next-line no-eval
export default eval(process.env.NODE_ENV ? eval(process.env.QR_SCANNER_ENVIRONMENT) : development)
