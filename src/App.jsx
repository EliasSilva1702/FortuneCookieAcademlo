import { useState } from "react";
import "./App.css";
import { Title } from "./components/title/Title";
import ContainerPhrase from "./components/containerPhrase/ContainerPhrase";
import AddPhrase from "./components/addPhrase/AddPhrase";

function App() {
  const arrayImagenes = [
    "./Imgs/fondo1.png",
    "./Imgs/fondo2.png",
    "./Imgs/fondo3.png",
    "./Imgs/fondo4.png",
  ];

  const [phrases, setPhrases] = useState("");

  // Función para agregar una nueva frase al estado
  const handleAddPhrase = (newPhrase) => {
    setPhrases((prevPhrases) => [...prevPhrases, newPhrase]);
  };


  const [image, setImage] = useState(arrayImagenes[1]);

  // Función para obtener una imagen aleatoria
  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * arrayImagenes.length);
    return arrayImagenes[randomIndex];
  };

  // Cambiar imagen cuando se llama a este método
  const changeImage = () => {
    setImage(getRandomImage());
  };

  const backgroundImage = `url(${image})`;

  return (
    <div
      style={{ backgroundImage }}
      className="bg-cover bg-center bg-no-repeat h-screen flex flex-col gap-4 justify-center items-center text-center w-full"
    >
      <Title />
      <div className=" flex flex-col gap-24">
      <ContainerPhrase onChangeImage={changeImage} />
      <AddPhrase onAddPhrase={handleAddPhrase} />
      </div>
    </div>
  );
}

export default App;
