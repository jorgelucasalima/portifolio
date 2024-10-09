import { Box, Card, Inset, Text, Strong, Flex } from "@radix-ui/themes";
import Modal from "../components/Modal";

export default function Projects() {
  return (
    <Flex direction="column" gap="4" align="center">
      <Box maxWidth="440px">
        <Card size="2">
          <Inset clip="padding-box" side="top" pb="current">
            <img
              src="https://yourmaps.netlify.app/assets/world-map-Cc-9Ird7.png"
              alt="YourMaps"
              style={{
                display: 'block',
                objectFit: 'cover',
                width: '100%',
                height: 180,
                backgroundColor: 'var(--gray-5)',
              }}
            />
          </Inset>
          <Text as="p" size="3">
            <Strong>YourMaps</Strong> esse projeto tem como finalidade exibir a localização
            das marcações que está sendo recebida em uma API. Diante disso, podendo ser filtrado
            por um ou mais tipos de marcação. 
            <Modal 
              titleButton="Ver mais"
              titleProject="YourMaps" 
              descriptionProject="YourMaps é um aplicativo web para visualizar localização das marcações que está sendo recebida em uma API."
              projectHaveApi={true}
              nameApi="jsonplaceholder"
              urlApi="https://jsonplaceholder.typicode.com/users"
              libraries={["react-google-maps", "formik", "yup", "react-router-dom", "tailwindcss"]}
              urlGithub="https://github.com/jorgelucasalima/yourmaps"
              urlWebsite="https://yourmaps.netlify.app/"
            />
          </Text>
        </Card>
      </Box>
      <Box maxWidth="440px">
        <Card size="2">
          <Inset clip="padding-box" side="top" pb="current">
            <img
              src="https://img.freepik.com/fotos-gratis/vista-do-predio-de-apartamentos-3d_23-2150259794.jpg?size=626&ext=jpg&ga=GA1.1.687316218.1728414467&semt=ais_hybrid"
              alt="AppCep"
              style={{
                display: 'block',
                objectFit: 'cover',
                width: '100%',
                height: 180,
                backgroundColor: 'var(--gray-5)',
              }}
            />
          </Inset>
          <Text as="p" size="3">
            <Strong>AppCep</Strong> Projeto desenvolvido para auxiliar na busca de CEP consultando API do viacep.
            <Modal 
              titleButton="Ver mais"
              titleProject="AppCep" 
              descriptionProject="AppCep é um aplicativo web para auxiliar na busca de CEP consultando API do viacep, exibindo dados principais como CEP, Logradouro, Cidade e Bairro."
              projectHaveApi={true}
              nameApi="ViaCep"
              urlApi="https://viacep.com.br/"
              libraries={["Styled Components", "React Icons", "react-router-dom"]}
              urlGithub="https://github.com/jorgelucasalima/appcep"
              urlWebsite="https://appcep.netlify.app/"
            />
          </Text>
        </Card>
      </Box>
    </Flex>
  )
}