import { Request, Response } from "express";
import { CognitoIdentityService } from "../service/CognitoIdentityService";

export class AuthController {
  async signup(req: Request, res: Response) {
    const cognitoIdentityService = new CognitoIdentityService();

    const { name, email, phone_number, password } = req.body;

    const cognitoParams = {
      name,
      email,
      phone_number,
      password,
    };

    try {
      const cognitoUser = await new Promise((resolve, reject) => {
        cognitoIdentityService.signup(cognitoParams, (err, user) => {
          if (err) {
            reject(err);
          } else {
            resolve(user);
          }
        });
      });

      res.status(200).send({
        success: true,
        message: "User created successfully",
        user: cognitoUser,
      });
    } catch (error: any) {
      res.status(400).send({ success: false, message: error.message, error });
    }
  }
}
