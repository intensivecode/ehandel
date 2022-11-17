import axios from "axios";
import { IProduct } from "../types/Product";

const baseUrl = "http://localhost:8000/api/";

export function getProducts() {
  return axios.get<IProduct[]>(baseUrl + "foods");
}
