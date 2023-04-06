import React, { useState } from 'react';
import { Container } from './styles';

interface Character {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  description: string;
}

interface Props {
  character: Character;
}

export function Card({ character }: Props) {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <Container>
      <div className={`card ${flipped ? 'flipped' : ''}`} onClick={handleClick}>
        <div className="front">
          {
            character.thumbnail && character.thumbnail.path !== undefined && (
              <img src={character.thumbnail.path + '.' + character.thumbnail.extension} alt="CharacterPicture" />
            )
          }
        </div>
        <div className="back">
          <h2>{character.name}</h2>
          <p>{character.description}</p>
        </div>
      </div>
    </Container>
  );
}
