// Esta linha informa ao TypeScript para aceitar qualquer importação que termine com '.css'
declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}