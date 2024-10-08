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
        <Button
          variant="soft"
          color="blue"
          style={{ width: '100%', marginTop: '15px' }}
        >
          {props.titleButton}
        </Button>
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

        <Flex
          direction="column"
          gap="3"
          mt="4"
          justify="center"
          width={'100%'}
          style={{ justifyContent: 'space-around' }}
        >
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Sair
            </Button>
          </Dialog.Close>

          <Link
            href={props.urlGithub}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              color: '#007BFF',
              width: '100%',
              alignItems: 'center',
              padding: '6px 10px', // Espessura do botão
              border: '1px solid #007BFF', // Cor e espessura da borda
              borderRadius: '4px', // Deixa as bordas arredondadas
              display: 'flex', // Torna o Flex responsivo
              justifyContent: 'center',
              gap: '8px', // Espaçamento entre ícone e texto
              fontSize: '14px', // Tamanho da fonte
              cursor: 'pointer', // Cursor de clique
              transition: 'border-color 0.3s ease, background-color 0.3s ease',
              backgroundColor: 'transparent', // Fundo transparente para efeito outline
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#66B2FF'; // Borda azul claro ao passar o mouse
              e.currentTarget.style.backgroundColor = '#E6F4FF'; // Fundo azul claro ao passar o mouse
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#007BFF'; // Volta para a borda azul original
              e.currentTarget.style.backgroundColor = 'transparent'; // Volta para fundo original
            }}
          >
            <Flex gap="1" align="center">
              <GitHubLogoIcon />
              Github
            </Flex>
          </Link>

          <Link
            href={props.urlWebsite}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              color: '#007BFF',
              width: '100%',
              alignItems: 'center',
              padding: '6px 10px', // Espessura do botão
              border: '1px solid #007BFF', // Cor e espessura da borda
              borderRadius: '4px', // Deixa as bordas arredondadas
              display: 'flex', // Torna o Flex responsivo
              justifyContent: 'center',
              gap: '8px', // Espaçamento entre ícone e texto
              fontSize: '14px', // Tamanho da fonte
              cursor: 'pointer', // Cursor de clique
              transition: 'border-color 0.3s ease, background-color 0.3s ease',
              backgroundColor: 'transparent', // Fundo transparente para efeito outline
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#66B2FF'; // Borda azul claro ao passar o mouse
              e.currentTarget.style.backgroundColor = '#E6F4FF'; // Fundo azul claro ao passar o mouse
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#007BFF'; // Volta para a borda azul original
              e.currentTarget.style.backgroundColor = 'transparent'; // Volta para fundo original
            }}
          >
            <Flex gap="1" align="center">
              <GlobeIcon />
              Site
            </Flex>
          </Link>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}