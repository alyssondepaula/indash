import { Container, Text } from "./styles";

export function CustomTooltip ({ payload, label, active }: any) {
    if (active) {
      return (
        <Container>
          <Text>${ payload !== undefined && payload[0].value}</Text>
          </Container>
      );
    }
  
    return null;
  }