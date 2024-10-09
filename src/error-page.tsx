import { Flex, Link, Text } from "@radix-ui/themes";
import { useRouteError } from "react-router-dom";

interface RouteError {
  statusText?: string;
  message?: string;
}

export default function ErrorPage() {
  const error = useRouteError() as RouteError;
  console.error(error);

  return (
    <div id="error-page" role="alert" className="radix-themes" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Text size="5" weight="bold">Oops!</Text>
      <p>Desculpe por isso, mas parece que algo deu errado.</p>
      <p>
        <i>{error?.statusText || error?.message || "Unknown error"}</i>
      </p>
      <Link href="/">Voltar</Link>
    </div>
  );
}
