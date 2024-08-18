import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <p className="py-96 bg-fuchsia-400 text-white text-center font-jura text-4xl">
      Erro Pagina não encontrada
    </p>
  );
}
