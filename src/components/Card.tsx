import { Box, Card, Text } from "@radix-ui/themes";

type CardProps = {
  titleCardItem: string;
  position: string;
  descriptionCardItem: string;
  infoList: string[] | object[];
  nameInfoList: string;
}

export default function CardItem( { titleCardItem, position, descriptionCardItem, nameInfoList, infoList }: CardProps ) {
  return (
    <Box maxWidth="450px" >
      <Card asChild variant="surface" size="3">
        <a href="https://www.linkedin.com/in/jorgelucaslima/" target="_blank">
          <Text as="div" size="3" weight="bold">
            {titleCardItem}
          </Text>
          <Text as="div" size="2" weight="bold" style={{ marginTop: '10px' }}>
            {position}
          </Text>
          <Text as="div" color="gray" size="2">
            {descriptionCardItem}
          </Text>
          <Text as="div" color="gray" size="2" style={{ marginTop: '10px' }}>
            <Text as="div" size="2" weight="bold">{nameInfoList}</Text>
            {infoList.map((item, index) => <li key={index}>{item.toString()}</li>)}
          </Text>
        </a>
      </Card>
    </Box>
  )
}