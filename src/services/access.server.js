"use strict";

const bcrypt = require("bcrypt");
const shopModal = require("../models/shop.model");
const crypto = require("crypto");

const RoleShop = {
  SHOP: "SHOP",
  WRITER: "WRITER",
  EDITOR: "EDITOR",
  ADMIN: "ADMIN",
};

class AccessService {
  static signUp = async ({ name, email, password }) => {
    try {
      const hodelShop = await shopModal.findOne({ email }).lean();
      if (hodelShop) {
        return {
          code: "xxx",
          message: "Email already exists",
          status: "error",
        };
      }

      const passwordHash = await bcrypt.hash(password, 10);

      const newShop = await shopModal.create({
        name,
        email,
        password: passwordHash,
        status: "inactive",
        roles: [RoleShop.SHOP],
      });

      if (newShop) {
        // created private key, public key
        const { privateKey, publicKey } = await crypto.generateKeyPairSync(
          "rsa",
          {
            modulusLength: 4096,
          }
        );
      }
    } catch (error) {
      return {
        code: "xxx",
        message: error.message,
        status: "error",
      };
    }
  };
}

module.exports = AccessService;
