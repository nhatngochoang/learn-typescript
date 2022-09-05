// 1.REMOVE a member of a Union Type
type Letters = 'a' | 'b' | 'c'

type RemoveC<T> = T extends 'c' ? never : T

type WithoutC = RemoveC<Letters>

// 2.Improving OBJECT.KEYS in TypeScript
const myObject = {
  a: 1,
  b: 2,
  c: 3,
}

const objectKeys = <Obj>(obj: Object) => Object.keys(obj) as Array<keyof Obj>

objectKeys(myObject).forEach((key) => console.log(myObject[key]))

// 3. UNION TYPES
type UserRoleAttribute =
  | {
      role: 'admin'
      adminPassword?: string
    }
  | {
      role: 'user'
    }
  | {
      role: 'super-admin'
      superAdminPassword: string
    }

type Role = UserRoleAttribute['role']

type TUser = {
  id: number
  name: string
} & UserRoleAttribute

const userObj: TUser = {
  id: 1,
  name: 'John',
  role: 'admin',
}
