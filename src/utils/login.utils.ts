import type { SignUpStruct } from "../structures/user.struct"

const SIGNUP_URL = "https://6923654a3ad095fb84706fd2.mockapi.io/api/unesawin/sign-up"

export const signup = async(data: SignUpStruct) => {
  const reqGetUser = await fetch(`${SIGNUP_URL}?NIK=${data.NIK}`);

  const existingUsers = await reqGetUser.json() as SignUpStruct[];
  const existingUser = existingUsers[0];

  if (
    existingUser &&
    existingUser.NIK === data.NIK &&
    existingUser.email === data.email &&
    existingUser.full_name === data.full_name
  ) {
    return {
      success: false,
      message: "User dengan NIK atau email atau nama lengkap ini sudah terdaftar!",
      user: existingUser
    };
  }

  const reqCreateUser = await fetch(SIGNUP_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  if (!reqCreateUser.ok) return {success: false, message: "Gagal membuat user baru"};

  const userCreated = await reqCreateUser.json() as SignUpStruct;

  return {
    success: true,
    message: "Berhasil membuat user",
    user: userCreated
  };
};
