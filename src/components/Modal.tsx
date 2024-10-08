import { GitHubLogoIcon, GlobeIcon } from "@radix-ui/react-icons";
import { Dialog, Button, Link, Flex, Text, Heading } from "@radix-ui/themes";

interface ModalProps {
  titleButton: string;
  titleProject: string;
  descriptionProject: string;
  projectHaveApi: boolean;
  nameApi: string;
  urlApi: string;
  libraries: string[]
  urlGithub: string;
  urlWebsite: string;
}

export default function Modal(props: ModalProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button variant="soft">{props.titleButton}</Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title>{props.titleProject}</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          {props.descriptionProject}
        </Dialog.Description>

        <Flex direction="column" gap="3">
          {props.projectHaveApi && (
            <Flex direction="column" gap="3">
              <Heading size="3">API</Heading>
              <Text>
                <Link href={props.urlApi}>{props.nameApi}</Link>
              </Text>
            </Flex>
          )}

          <Heading size="3">Bibliotecas</Heading>
          <Text>
            {props.libraries.map((dependency, index) => (
              <li key={index}>{dependency}</li>
            ))}
          </Text>
        </Flex>

        <Flex gap="3" mt="4" justify="center" width={'100%'}>
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Sair
            </Button>
          </Dialog.Close>

          <Button variant="outline" color="blue">
            <Link
              href={props.urlGithub}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Flex gap="1" align="center">
                <GitHubLogoIcon />
                Github
              </Flex>

            </Link>
          </Button>
          
          <Button variant="outline" color="blue">
            <Link
              href={props.urlWebsite}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Flex gap="1" align="center">
                <GlobeIcon />
                Site
              </Flex>

            </Link>
          </Button>

        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}