import MagicString from "magic-string";

export interface Options {
  /**
   * Entry file path
   * @example
   * "src/main.tsx"
   * ["src/main.tsx", "src/main.jsx"],
   * /(src\/main\.tsx)|(src\/main\.jsx)/
   * @default "src/main.tsx"
   */
  injectClientEntryFile?: string | string[] | RegExp;

  /**
   * Default enable state
   * @default false
   */
  enabled?: boolean;
}

export interface CompileOptions {
  code: string;
  id?: string;
  port?: number;
  injectClientEntryFile?: string | string[] | RegExp;
}

export type InjectClientOptions = Omit<CompileOptions, "code"> & {
  parseCode: MagicString;
};
