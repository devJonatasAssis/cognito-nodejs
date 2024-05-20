import {
  CognitoUserAttribute,
  CognitoUserPool,
} from "amazon-cognito-identity-js";

const attributes = (key, value) => ({
  Name: key,
  Value: value,
});

export const signup = (poolData, body, cb) => {
  const userPool = new CognitoUserPool(poolData);

  const { password, email, phone_number, name } = body;

  const attributesList = [
    attributes("name", name),
    attributes("email", email),
    attributes("phone_number", phone_number),
  ];

  const cognitoAttributeList = attributesList.map(
    (element) => new CognitoUserAttribute(element)
  );

  userPool.signUp(
    name,
    password,
    cognitoAttributeList,
    null,
    (err: any, res: any) => {
      if (err) {
        cb(err);
        return;
      }

      const data = {
        user_id: res.userSub,
        email: res.email,
        user_confirmed: res.userConfirmed,
      };

      cb(null, data);
    }
  );
};
