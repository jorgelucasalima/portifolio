import { Flex } from "@radix-ui/themes";
import CardItem from "../components/Card";

export default function Works() {

  const listWorks = [
    {
      id: 1,
      titleCardItem: "Qualinfo Tecnologias",
      position: "Fullstack Developer",
      descriptionCardItem: "Trabalhei em projetos voltado para área educacional onde tive integrar o front-end e o back-end, criando interfaces interativas e responsivas, focando na experiência do usuário e na otimização de desempenho.",
      technologies: ["Vuejs", "Laravel", "Laravel Nova", "Bootstrap", "API", "MySql", "SQL Server"],
    },
    {
      id: 2,
      titleCardItem: "Qualinfo Tecnologias",
      position: "Frontend Developer",
      descriptionCardItem: "Trabalhei em projetos frontend onde tive que realizar criação de telas, componentes e funcionalidades focadas na usabilidade do usuário e na experiência do usuário para migração de um sistema desktop para um sistema mobile.",
      technologies: ["ReactJS", "NextJS", "AntDesign", "Styled-Components", "Redux", "Axios", "Yup", "Formik"],
    },
    {
      id: 3,
      titleCardItem: "IS Integrando Soluções - Freelancer",
      position: "Fullstack Developer",
      descriptionCardItem: "Trabalhei em um projeto do qual tive que criar uma API para consumir dados de um banco de dados já criado e diante disso exibir os dados de forma dinâmica e eficiente.",
      technologies: ["ReactJS", "Styled-Components", "React Router Dom", "Axios", "Yup", "Formik", "API", "NodeJS", "ExpressJs","SqlServer"],
    },
    
  ];


  return (
    <Flex direction="column" gap="4" align="center">
      {listWorks.map((item) => (
        <CardItem
          key={item.id}
          titleCardItem={item.titleCardItem}
          position={item.position}
          descriptionCardItem={item.descriptionCardItem}
          nameInfoList="Tecnologias:"
          infoList={item.technologies}
        />
      ))}
    </Flex>
  )
}