import React from "react";
import axios from "axios";
import CryptoJS from "crypto-js";

export default class ApiService {
  static BASE_URL = "http://localhost:8080/api";

  //encrypt data using cryptojs
  static encrypt(data) {
    return CryptoJS.AES.encrypt(data, this.ENCRYPTION_KEY.toString());
  }

  //decrypt data using cryptojs
  static decrypt(data) {
    const bytes = CryptoJS.AES.decrypt(data, this.ENCRYPTION_KEY);
    return bytes.toString(CryptoJS.enc.Utf8);
  }
  static async addEmployee(formData) {
    const response = await axios.post(
      `${this.BASE_URL}/employees/add`,
      formData,
      {
        headers: {
          ...this.getHeader(),
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  }

  static async getAllEmployees() {
    const response = await axios.get(`${this.BASE_URL}/employees/all`, {
      headers: this.getHeader(),
    });
    return response.data;
  }
}
