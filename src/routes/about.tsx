import { Flex, Card, Text, Box } from "@radix-ui/themes";

export default function About() {
  return (
    <Flex direction="column" gap="4" align="center">
      <Box maxWidth="540px">
        <Card variant="surface" size="3" >
          <Text as="div" size="4" weight="bold">
            Sobre mim
          </Text>
          <Text as="div" color="gray" size="3">
            Sou desenvolvedor fullstack com sólida experiência em ReactJS, NextJS, Laravel, MySQL e SQL Server. Ao longo da minha carreira, tenho trabalhado tanto no front-end quanto no back-end, criando aplicações web dinâmicas, escaláveis e orientadas à performance. Tenho paixão por resolver problemas complexos, aplicando soluções tecnológicas modernas e sempre buscando as melhores práticas de desenvolvimento.
          </Text>
        </Card>

        <Card variant="surface" size="3" style={{ marginTop: '10px' }}>
          <Text as="div" size="4" weight="bold">
            Front
          </Text>
          <Text as="div" color="gray" size="3">
            No front-end, sou especializado em ReactJS, onde crio interfaces interativas e responsivas, focando na experiência do usuário e na otimização de desempenho. Utilizo NextJS para desenvolver aplicações server-side rendering (SSR) e static site generation (SSG), proporcionando aplicações rápidas e eficientes.        
          </Text>
        </Card>

        <Card variant="surface" size="3" style={{ marginTop: '10px' }}>
          <Text as="div" size="4" weight="bold">
            Back
          </Text>
          <Text as="div" color="gray" size="3">
          No back-end, minha expertise está em Laravel e Node/Express, onde desenvolvo APIs robustas, seguras e de fácil manutenção. Trabalho também com banco de dados relacionais, sendo MySQL e SQL Server minhas principais ferramentas para manipulação e otimização de dados, garantindo que as aplicações sejam eficientes e escaláveis. E também utilizando bancos NoSql com firebase</Text>
        </Card>

        <Card variant="surface" size="3" style={{ marginTop: '10px' }}>
          <Text as="div" size="4" weight="bold">
            Tem mais..
          </Text>
          <Text as="div" color="gray" size="3">
            Estou sempre buscando novos desafios e oportunidades de crescimento, com interesse em aprender novas tecnologias e melhorar minhas habilidades de desenvolvimento. Além de minha experiência técnica, sou colaborativo, gosto de trabalhar em equipe e acredito na importância da comunicação clara para o sucesso de qualquer projeto.
          </Text>      
        </Card>
      </Box>
    </Flex>
  )
}