export class UserService {
  getInputUser( name, classs, time ) {
    return {
      name: name,
      class: classs,
      time: time,
    };
  }
}
