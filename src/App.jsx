import { useEffect } from "react";
import { MonacoService } from "./monaco";
import Editor, { useMonaco } from "@monaco-editor/react";
import "./App.css";
const monacoService = new MonacoService();
const defaultValue = `
class Program {
  public static void Main(string[] args) {

  }
}
`;
function App() {
  const monaco = useMonaco();
  useEffect(() => {
    if (!monaco) {
      return;
    }
    monacoService.initialize(monaco);
  }, [monaco]);

  return (
    <Editor
      theme={"vs-dark"}
      height="100vh"
      width={"100vw"}
      defaultLanguage="csharp"
      defaultValue={defaultValue}
    />
  );
}

export default App;
