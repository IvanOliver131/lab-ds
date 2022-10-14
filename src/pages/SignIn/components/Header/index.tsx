import { Heading } from "../../../../components/Heading";
import { Logo } from "../../../../components/Logo";
import { Text } from "../../../../components/Text";

export function Header() {
  return (
    <header className="flex flex-col items-center">
      <Logo />

      <Heading size="lg" className="mt-4 font-bold">
        Ignite Lab
      </Heading>
      <Text size="lg" className="text-gray-400 mt-2">
        Faça login e começe a usar! 😎
      </Text>
    </header>
  );
}
