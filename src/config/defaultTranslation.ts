export const defaultTranslationsEmailPassword = {
  en: {
    EMAIL_PASSWORD_EMAIL_LABEL: 'Email',
    EMAIL_PASSWORD_EMAIL_PLACEHOLDER: 'Email address',

    EMAIL_PASSWORD_PASSWORD_LABEL: 'Password',
    EMAIL_PASSWORD_PASSWORD_PLACEHOLDER: 'Password',

    EMAIL_PASSWORD_SIGN_IN_HEADER_TITLE: 'Sign In',
    EMAIL_PASSWORD_SIGN_IN_HEADER_SUBTITLE_START: 'Not registered yet?',
    EMAIL_PASSWORD_SIGN_IN_HEADER_SUBTITLE_SIGN_UP_LINK: 'Sign Up',
    EMAIL_PASSWORD_SIGN_IN_HEADER_SUBTITLE_END: '',
    EMAIL_PASSWORD_SIGN_IN_FOOTER_FORGOT_PW_LINK: 'Forgot password?',
    EMAIL_PASSWORD_SIGN_IN_SUBMIT_BTN: 'SIGN IN',
    EMAIL_PASSWORD_SIGN_IN_WRONG_CREDENTIALS_ERROR:
      'Incorrect email and password combination',

    EMAIL_PASSWORD_SIGN_UP_HEADER_TITLE: 'Sign Up',
    EMAIL_PASSWORD_SIGN_UP_HEADER_SUBTITLE_START: 'Already have an account?',
    EMAIL_PASSWORD_SIGN_UP_HEADER_SUBTITLE_SIGN_IN_LINK: 'Sign In',
    EMAIL_PASSWORD_SIGN_UP_HEADER_SUBTITLE_END: '',
    EMAIL_PASSWORD_SIGN_UP_FOOTER_START: 'By continuing, you agree to our ',
    EMAIL_PASSWORD_SIGN_UP_FOOTER_TOS: 'Terms of Service',
    EMAIL_PASSWORD_SIGN_UP_FOOTER_AND: ' and ',
    EMAIL_PASSWORD_SIGN_UP_FOOTER_PP: 'Privacy Policy',
    EMAIL_PASSWORD_SIGN_UP_FOOTER_END: '',
    EMAIL_PASSWORD_SIGN_UP_SUBMIT_BTN: 'SIGN UP',

    EMAIL_PASSWORD_EMAIL_ALREADY_EXISTS:
      'This email already exists. Please sign in instead',

    EMAIL_PASSWORD_RESET_HEADER_TITLE: 'Reset your password',
    EMAIL_PASSWORD_RESET_HEADER_SUBTITLE:
      'We will send you an email to reset your password',
    EMAIL_PASSWORD_RESET_SEND_FALLBACK_EMAIL: 'your account',
    EMAIL_PASSWORD_RESET_SEND_BEFORE_EMAIL:
      'A password reset email has been sent to ',
    EMAIL_PASSWORD_RESET_SEND_AFTER_EMAIL: ', if it exists in our system. ',
    EMAIL_PASSWORD_RESET_RESEND_LINK: 'Resend or change email',
    EMAIL_PASSWORD_RESET_SEND_BTN: 'Email me',
    EMAIL_PASSWORD_RESET_SIGN_IN_LINK: 'Sign In',

    EMAIL_PASSWORD_RESET_SUBMIT_PW_SUCCESS_HEADER_TITLE: 'Success!',
    EMAIL_PASSWORD_RESET_SUBMIT_PW_SUCCESS_DESC:
      'Your password has been updated successfully',
    EMAIL_PASSWORD_RESET_SUBMIT_PW_SUCCESS_SIGN_IN_BTN: 'SIGN IN',

    EMAIL_PASSWORD_NEW_PASSWORD_LABEL: 'New password',
    EMAIL_PASSWORD_NEW_PASSWORD_PLACEHOLDER: 'New password',
    EMAIL_PASSWORD_CONFIRM_PASSWORD_LABEL: 'Confirm password',
    EMAIL_PASSWORD_CONFIRM_PASSWORD_PLACEHOLDER: 'Confirm your password',

    EMAIL_PASSWORD_RESET_SUBMIT_PW_HEADER_TITLE: 'Change your password',
    EMAIL_PASSWORD_RESET_SUBMIT_PW_HEADER_SUBTITLE:
      'Enter a new password below to change your password',
    EMAIL_PASSWORD_RESET_SUBMIT_PW_CHANGE_PW_BTN: 'CHANGE PASSWORD',
    EMAIL_PASSWORD_RESET_PASSWORD_INVALID_TOKEN_ERROR:
      'Invalid password reset token',

    ERROR_EMAIL_NON_STRING: 'Email must be of type string',
    ERROR_EMAIL_INVALID: 'Email is invalid',

    ERROR_PASSWORD_NON_STRING: 'Password must be of type string',
    ERROR_PASSWORD_TOO_SHORT:
      'Password must contain at least 8 characters, including a number',
    ERROR_PASSWORD_TOO_LONG:
      "Password's length must be lesser than 100 characters",
    ERROR_PASSWORD_NO_ALPHA: 'Password must contain at least one alphabet',
    ERROR_PASSWORD_NO_NUM: 'Password must contain at least one number',
    ERROR_CONFIRM_PASSWORD_NO_MATCH: "Confirmation password doesn't match",

    ERROR_NON_OPTIONAL: 'Field is not optional',
    BRANDING_POWERED_BY_START: 'Bounce',
    BRANDING_POWERED_BY_END: '',
    MY_CUSTOM_LABEL: 'Circular',

    /*
     * The following are error messages from our backend SDK.
     * These are returned as full messages to preserver compatibilty, but they work just like the keys above.
     * They are shown as is by default (setting the value to undefined will display the raw translation key)
     */
    'This email already exists. Please sign in instead.': undefined,
    'Field is not optional': undefined,
    'Password must contain at least 8 characters, including a number':
      undefined,
    "Password's length must be lesser than 100 characters": undefined,
    'Password must contain at least one alphabet': undefined,
    'Password must contain at least one number': undefined,
    'Email is invalid': undefined,
  },
  fr: {
    EMAIL_PASSWORD_EMAIL_LABEL: 'Email',
    EMAIL_PASSWORD_EMAIL_PLACEHOLDER: 'Adresse email',

    EMAIL_PASSWORD_PASSWORD_LABEL: 'Mot de passe',
    EMAIL_PASSWORD_PASSWORD_PLACEHOLDER: 'Mot de passe',

    EMAIL_PASSWORD_SIGN_IN_HEADER_TITLE: 'Me connecter à mon espace club',
    EMAIL_PASSWORD_SIGN_IN_HEADER_SUBTITLE_START:
      "Votre club n'est pas encore isncrit?",
    EMAIL_PASSWORD_SIGN_IN_HEADER_SUBTITLE_SIGN_UP_LINK: "M'inscrire",
    EMAIL_PASSWORD_SIGN_IN_HEADER_SUBTITLE_END: '',
    EMAIL_PASSWORD_SIGN_IN_FOOTER_FORGOT_PW_LINK: 'Mot de passe oublié?',
    EMAIL_PASSWORD_SIGN_IN_SUBMIT_BTN: 'Me connecter',
    EMAIL_PASSWORD_SIGN_IN_WRONG_CREDENTIALS_ERROR:
      "Le mot de passe ou l'email est incorrecte",

    EMAIL_PASSWORD_SIGN_UP_HEADER_TITLE: "M'inscrire",
    EMAIL_PASSWORD_SIGN_UP_HEADER_SUBTITLE_START: 'Déjà un compte?',
    EMAIL_PASSWORD_SIGN_UP_HEADER_SUBTITLE_SIGN_IN_LINK: 'Me connecter',
    EMAIL_PASSWORD_SIGN_UP_HEADER_SUBTITLE_END: '',
    EMAIL_PASSWORD_SIGN_UP_FOOTER_START: 'By continuing, you agree to our ',
    EMAIL_PASSWORD_SIGN_UP_FOOTER_TOS: 'Terms of Service',
    EMAIL_PASSWORD_SIGN_UP_FOOTER_AND: ' and ',
    EMAIL_PASSWORD_SIGN_UP_FOOTER_PP: 'Privacy Policy',
    EMAIL_PASSWORD_SIGN_UP_FOOTER_END: '',
    EMAIL_PASSWORD_SIGN_UP_SUBMIT_BTN: "M'inscrire",

    EMAIL_PASSWORD_EMAIL_ALREADY_EXISTS: 'Cette adresse email existe déjà.',

    EMAIL_PASSWORD_RESET_HEADER_TITLE: 'Changez votre mot de passe',
    EMAIL_PASSWORD_RESET_HEADER_SUBTITLE:
      'Nous allons envoyer un email pour mettre à jour votre mot de passe.',
    EMAIL_PASSWORD_RESET_SEND_FALLBACK_EMAIL: 'Votre compte',
    EMAIL_PASSWORD_RESET_SEND_BEFORE_EMAIL:
      'Une demande de mise à jour de votre mot a été envoyé ',
    EMAIL_PASSWORD_RESET_SEND_AFTER_EMAIL:
      ', si il existe dans notre système. ',
    EMAIL_PASSWORD_RESET_RESEND_LINK: "Renvoyez ou changez d'email",
    EMAIL_PASSWORD_RESET_SEND_BTN: "M'envoyer un email",
    EMAIL_PASSWORD_RESET_SIGN_IN_LINK: 'Me connecter',

    EMAIL_PASSWORD_RESET_SUBMIT_PW_SUCCESS_HEADER_TITLE: 'Validé!',
    EMAIL_PASSWORD_RESET_SUBMIT_PW_SUCCESS_DESC:
      'Votre mot de passe a bien été enregistré',
    EMAIL_PASSWORD_RESET_SUBMIT_PW_SUCCESS_SIGN_IN_BTN: 'Me connecter',

    EMAIL_PASSWORD_NEW_PASSWORD_LABEL: 'Nouveau mot de passe',
    EMAIL_PASSWORD_NEW_PASSWORD_PLACEHOLDER: 'Nouveau mot de passe',
    EMAIL_PASSWORD_CONFIRM_PASSWORD_LABEL: 'Confirmez votre mot de passe',
    EMAIL_PASSWORD_CONFIRM_PASSWORD_PLACEHOLDER: 'Confirmez votre mot de passe',

    EMAIL_PASSWORD_RESET_SUBMIT_PW_HEADER_TITLE:
      'Entrez un nouveau mot de passe', // 'Changer votre mot de passe',
    EMAIL_PASSWORD_RESET_SUBMIT_PW_HEADER_SUBTITLE: '', // 'Entrer un nouveau mot de passe',
    EMAIL_PASSWORD_RESET_SUBMIT_PW_CHANGE_PW_BTN: 'Changez votre mot de passe',
    EMAIL_PASSWORD_RESET_PASSWORD_INVALID_TOKEN_ERROR:
      'Mise à jour du mot de passe invalide',

    ERROR_EMAIL_NON_STRING: "L'email doit être dans un bon format",
    ERROR_EMAIL_INVALID: "L'email est invalide",

    ERROR_PASSWORD_NON_STRING: "L'email doit être dans un bon format",
    ERROR_PASSWORD_TOO_SHORT:
      'Le mot de passe doit au moins contenir 8 caractères, incluant un chiffre.',
    ERROR_PASSWORD_TOO_LONG:
      'Le mot de passe doit ne peut pas dépasser 100 caractères',
    ERROR_PASSWORD_NO_ALPHA:
      'Le mot de passe doit contenir au moins une lettre',
    ERROR_PASSWORD_NO_NUM: 'Le mot de passe doit contenir au moins un chiffre',
    ERROR_CONFIRM_PASSWORD_NO_MATCH: 'Les mots de passe ne sont pas identiques',

    ERROR_NON_OPTIONAL: 'Champ non optionel',

    BRANDING_POWERED_BY_START: 'Bounce Circular. Connexion sécurisé par ',
    BRANDING_POWERED_BY_END: '',
    MY_CUSTOM_LABEL: 'Circular',

    SOMETHING_WENT_WRONG_ERROR: 'Une erreur est survenue',

    /*
     * The following are error messages from our backend SDK.
     * These are returned as full messages to preserver compatibilty, but they work just like the keys above.
     * They are shown as is by default (setting the value to undefined will display the raw translation key)
     */
    'This email already exists. Please sign in instead.': undefined,
    'Field is not optional': undefined,
    'Password must contain at least 8 characters, including a number':
      undefined,
    "Password's length must be lesser than 100 characters": undefined,
    'Password must contain at least one alphabet': undefined,
    'Password must contain at least one number': undefined,
    'Email is invalid': undefined,
  },
};
