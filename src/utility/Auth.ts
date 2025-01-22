import bcrypt from 'bcryptjs';
import { Op } from 'sequelize';
import User from '../modules/auth/AuthModel';

export const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10); // สร้าง Salt
  return await bcrypt.hash(password, salt); // Hash รหัสผ่าน
};

export const comparePassword = async (
  password: string,
  hash: string
): Promise<boolean> => {
  return await bcrypt.compare(password, hash); // ตรวจสอบ Password กับ Hash
};

//* check exist by username or email
export const checkEmailExists = async (
  id: string | null,
  email: string | null
): Promise<string | null> => {
  try {
    const existEmail = await User.findOne({
      where: {
        [Op.or]: [{ email: email }],
        id: { [Op.ne]: id }, // Exclude current user
      },
    });
    if (existEmail) {
      return 'this email already exists';
    }
    return null;
  } catch (error) {
    console.error('Error checking user existence:', error);
    throw new Error('Failed to check user existence');
  }
};
