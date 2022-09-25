import dotenv from 'dotenv/config';
import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool();

export default function query(text, params) {
  return pool.query(text, params);
}
