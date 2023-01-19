interface HTTPResponse<T extends 'success' | 'failed'> {
  code: number;
  data: T extends 'success' ? string : Error;
}

const suc: HTTPResponse<'success'> = {
  code: 200,
  data: 'done'
}

const fail: HTTPResponse<'failed'> = {
  code: 500,
  data: new Error('test'),
}

class User {
  id: number;
  name: string;
}

class UserPersistant {
  dbId: string;
}

function getUser(id: number): User;
function getUser(dbId: string): UserPersistant;
function getUser(dbIdOrId: string | number): User | UserPersistant {
  if (typeof dbIdOrId === 'number') {
    return new User();
  } else {
    return new UserPersistant();
  }
}

console.log(getUser('s'))