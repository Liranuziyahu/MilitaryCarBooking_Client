export const isValidHebrewName = (name) => /^[א-ת\s]+$/.test(name);

export const isValidPhoneNumber = (phoneNumber) => /^([0]\d{1,3}[-])?\d{7,10}$/.test(phoneNumber);
