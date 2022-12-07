declare module '*.scss' {
  const content: {[className: string]: string};
  export = content;
}

declare module '*.svg' {
  const content: any;
  export = content;
}

declare module '*.jpg' {
  const content: any;
  export = content;
}
