import { create } from "apisauce";
import Constants from "expo-constants";

export default create({
  baseURL: Constants.manifest?.extra?.baseUrl,
});
