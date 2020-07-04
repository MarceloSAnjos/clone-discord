import React from 'react';
import {
  Container,
  Title,
  HashtagIcon,
  Separator,
  Description,
} from './styles';

const ChannelName: React.FC = () => {
  return (
    <Container>
      <HashtagIcon />

      <Title>Chat-livre</Title>

      <Separator />

      <Description>Canal aberto para conversa</Description>
    </Container>
  );
};

export default ChannelName;
