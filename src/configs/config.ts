// import dotenv from 'dotenv';
// dotenv.config();
export default () => ({
  database: {
    connectionString: process.env.DATABASE_URL,
  },
});
