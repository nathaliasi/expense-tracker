import * as C from './style';
import { Item } from '../../types/Item';

type Props = {
  onAdd: (item: Item) => void;
};

export const InputArea = ({ onAdd }: Props) => {
  const handleAddEvent = () => {
    let newItem: Item = {
      date: new Date(2023, 1, 10),
      category: 'food',
      title: 'Item de teste',
      value: 250.15,
    };
    onAdd(newItem);
  };
  return (
    <C.Container>
      <button onClick={handleAddEvent}>Adicionar</button>
    </C.Container>
  );
};
