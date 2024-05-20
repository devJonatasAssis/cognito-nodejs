import { signup } from "../helpers";
import dotenv from "dotenv";

dotenv.config();

const poolData = {
  UserPoolId: process.env.AWS_COGNITO_USER_POOL_ID,
  ClientId: process.env.AWS_COGNITO_CLIENT_ID,
};

export class CognitoIdentityService {
  signup(body, cb) {
    return signup(poolData, body, cb);
  }
}
