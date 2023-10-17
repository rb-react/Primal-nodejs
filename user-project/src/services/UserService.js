import API from "../api/API";
import endpoints from "../api/endpoints";

class UserService {
  static createUser(user) {
    //http://localhost:9090/api
    return API.post(endpoints.api.user.create, user);
  }
  static updateUser(id, user) {
    //http://localhost:9090/api /users/ ksjdflhshdof
    return API.put(endpoints.api.user.update + id, user);
  }
  static deleteUser(id) {
    return API.delete(endpoints.api.user.delete + id);
  }
  static fetchOne(id) {
    return API.get(endpoints.api.user.getOne, id);
  }
  static fetchAll() {
    return API.get(endpoints.api.user.getAll);
  }
}

export default UserService;
