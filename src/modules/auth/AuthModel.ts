import { DataTypes, Model } from 'sequelize';
import moment from 'moment';
import sequelize from '../../configs/db';
import { IProfileParams } from './AuthInterface';
import { hashPassword } from '../../utility/Auth';
import { cleanObjectEmptyStr } from '../../utility/Util';

class User extends Model {
  id!: number;
  firstname!: string;
  lastname!: string;
  email!: string;
  password!: string | null;
  image_url!: string | null;
  birth_date!: string | Date | null;
  gender!: string | null;
  phone!: string | null;
  is_accept_terms!: boolean;
  is_accept_privacy!: boolean;
  is_accept_marketing!: boolean;
  static async getUserParams(data: IProfileParams) {
    const encodePassword = data.password
      ? await hashPassword(data.password)
      : null;
    let param = {
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email.toLocaleLowerCase(),
      password: encodePassword,
      phone: data.phone ?? null,
      image_url: data.image_url ?? null,
      gender: data.gender ?? null,
      is_accept_terms: data.is_accept_terms ?? false,
      is_accept_privacy: data.is_accept_privacy ?? false,
      is_accept_marketing: data.is_accept_marketing ?? false,
      birth_date: data.birth_date
        ? moment(data.birth_date).local().format('YYYY-MM-DD')
        : null,
    };
    return cleanObjectEmptyStr(param);
  }
  static validateRequired(data: IProfileParams){
    if(data.firstname) {
      return 'firstname is require field'
    }
    if(data.lastname) {
      return 'lastname is require field'
    }
    if(data.email) {
      return 'email is require field'
    }
    return null;
  }
}

User.init(
  {
    id: {
      type: DataTypes.NUMBER,
      autoIncrement: true,
      primaryKey: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'password',
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    birth_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    is_accept_terms: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    is_accept_privacy: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    is_accept_marketing: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: 'users',
  }
);

export default User;
