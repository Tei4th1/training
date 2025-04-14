import "styled-components";
import { Theme } from "../../context";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
