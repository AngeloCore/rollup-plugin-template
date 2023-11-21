import { Plugin } from "rollup";

interface Options {
  [key: string]: string;
}

export default function plugin(options: Options = {}): Plugin {
  return {
    name: "template"
  };
}
