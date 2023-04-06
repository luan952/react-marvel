import axios from 'axios';
import CryptoJS from 'crypto-js';

const API_BASE_URL = 'https://gateway.marvel.com/v1/public/';
const PUBLIC_KEY = 'cf46732a5a2cee3ee105008793c0eda5';
const PRIVATE_KEY = '437e822edc8e74c26ee440b6ecca46fd83c74110';

const api = axios.create({
  baseURL: API_BASE_URL,
  params: {
    apikey: PUBLIC_KEY,
    ts: Number(new Date()),
    hash: CryptoJS.MD5(Number(new Date()) + PRIVATE_KEY + PUBLIC_KEY).toString(),
  }
});

export const getCharacters = async () => {
  const response = await api.get(`/characters?limit=10`);
  return response.data.data.results;
};

export const proxPage = async (offset: number) => {
  const response = await api.get(`/characters?limit=10&offset=${offset}`);
  return response.data.data.results;
};

export const getCharacter = async (nameStartsWith: string) => {
  const response = await api.get(`/characters?nameStartsWith=${nameStartsWith}`);
  return response.data.data.results;
}






