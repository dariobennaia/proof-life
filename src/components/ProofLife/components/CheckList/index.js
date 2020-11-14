import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import Button from '~/components/Button';

import {
  Container,
  Content,
  Footer,
  CheckListTitle,
  CheckList,
  Item,
  ItemDescription,
} from './styles';
import colors from '~/styles/colors';

const Biometry = ({next}) => {
  const [checklist] = useState([
    'Posicione seu rosto corretamente',
    'Siga as instruções do desafio',
    'Fique em um local bem iluminado para fazer o teste',
  ]);

  return (
    <Container>
      <Content>
        <CheckListTitle>Instruções</CheckListTitle>
        <CheckList
          showsVerticalScrollIndicator={false}
          data={checklist}
          keyExtractor={(item) => String(item)}
          renderItem={({item}) => (
            <Item>
              <Icon name="check" color={colors.success} size={22} />
              <ItemDescription>{item}</ItemDescription>
            </Item>
          )}
        />
      </Content>

      <Footer>
        <Button onPress={next}>CONTINUAR</Button>
      </Footer>
    </Container>
  );
};

Biometry.propTypes = {
  next: PropTypes.func.isRequired,
};

export default Biometry;
