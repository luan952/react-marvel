import React, { useEffect, useState } from "react";
import { getCharacters, proxPage, getCharacter } from "../../api/marvel";
import { Header, Container, Content, Cards } from "./styles";
import { ReactComponent as MarvelLogo } from '../../assets/marvel.svg';
import { Card } from "../../components/Card";
import { Search } from "../../components/Search";

interface Character {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  description: string;
}

export function Home() {
  const [characters, setCharacters] = useState<Character[]>();
  const [offset, setOffset] = useState(10);

  const handleSearchSubmit = (search: string) => {
    getCharacter(search).then((response) => {
      setCharacters(response);
    });
  };

  const handleProxPage = () => {
    proxPage(offset).then((response) => {
      setCharacters(characters ? [...characters, ...response] : response);
      setOffset(offset + 10);
    });
  };

  useEffect(() => {
    getCharacters().then((response) => {
      setCharacters(response);
    });
  }, []);

  return (
    <Container>
      <Header>
        <div className="logo">
          <MarvelLogo />
        </div>
        <div className="profile">
          <img src="https://avatars.githubusercontent.com/u/48728501?v=4" alt="Luan Felipe" />
          <div className="profile_name">
            <span>Welcome</span>
            <strong>Luan Felipe</strong>
          </div>
        </div>
      </Header>
      <Content>
        <Search onSubmit={handleSearchSubmit} />
        <Cards>
          {
            characters && (
              characters.map(character => (
                <Card character={character} key={character.id} />
              ))
            )
          }
        </Cards>
        <div className="button">
          <button onClick={handleProxPage}>Mais personagens</button>
        </div>
      </Content>
    </Container>

  );
}

