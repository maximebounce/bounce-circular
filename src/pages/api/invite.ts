import type { SessionRequest } from 'supertokens-node/framework/express';
import EmailPassword from 'supertokens-node/recipe/emailpassword';
import { updateUserMetadata } from 'supertokens-node/recipe/usermetadata';

import { checkIfclubExist } from '@/utils/api/club';

// import UserRoles from 'supertokens-node/recipe/userroles';
import { appInfo } from '../../config/appInfo';

// ADD ROLE
// PUT IN USER REST API AS POST INVITE
export default async function createUser(req: SessionRequest, res: any) {
  // await superTokensNextWrapper(
  //   async (next) => {
  //     await verifySession({
  //       async overrideGlobalClaimValidators(globalClaimValidators) {
  //         return [
  //           ...globalClaimValidators,
  //           UserRoles.UserRoleClaim.validators.includes('admin'),
  //         ];
  //       },
  //     })(req, res, next);
  //   },
  //   req,
  //   res
  // );

  // we first verify the session
  // await superTokensNextWrapper(
  //   async (next) => {
  //     return verifySession()(req, res, next);
  //   },
  //   req,
  //   res
  // );

  const data = JSON.parse(req.body);
  const { email, firstName, lastName, clubId } = data;
  console.log('body', req.body);
  if (!clubId || clubId == null) {
    res.status(400).json({ message: 'We cannot link your account to a club' });
    return;
  }

  const clubFromNotion = await checkIfclubExist(clubId as string);
  console.log('clubFromNotion', clubFromNotion);
  if (!clubFromNotion || (clubFromNotion && clubFromNotion.id !== clubId)) {
    res.status(400).json({ message: 'We cannot link your account to a club' });
    return;
  }

  const signUpResult = await EmailPassword.signUp(email, appInfo.FAKE_PASSWORD);
  if (signUpResult.status === 'EMAIL_ALREADY_EXISTS_ERROR') {
    res.status(400).json({ message: 'User already exists' });
    return;
  }

  // we successfully created the user. Now we should send them their invite link
  const passwordResetToken = await EmailPassword.createResetPasswordToken(
    signUpResult.user.id
  );

  if (passwordResetToken.status === 'UNKNOWN_USER_ID_ERROR') {
    throw new Error('Should never come here');
  }

  const response = await updateUserMetadata(signUpResult.user.id, {
    clubId,
    first_name: firstName,
    last_name: lastName,
  }); // link club to the user
  if (response && response.status !== 'OK') {
    throw new Error('User created but not linked to a club');
  }

  // await setClubInfoInNotion(clubId, data);

  const inviteLink = `${appInfo.websiteDomain}/auth/reset-password?token=${passwordResetToken.token}`;
  // await EmailPassword.sendEmail({
  //   type: 'PASSWORD_RESET',
  //   passwordResetLink: inviteLink,
  //   user: {
  //     email: signUpResult.user.email,
  //     id: signUpResult.user.id,
  //   },
  // });
  // await resetPasswordEmail(inviteLink, signUpResult.user.email);
  res.status(200).json({ redirectUrl: inviteLink });
}
