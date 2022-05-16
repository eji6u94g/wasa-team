import { apiHelper } from "../helpers/axiosSetting.js"

export default {
  getUsers() {
    return apiHelper.get("")
  }
}