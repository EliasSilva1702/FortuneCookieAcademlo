import { useState } from "react";
import phrases from "../../../phrase.json";
import { Button } from "../button/Button";
import { motion } from "framer-motion";

export const ContainerPhrase = ({ onChangeImage }) => {
  const initialPhrase = "Abrir galleta de la fortuna";
  const [phrase, setPhrase] = useState(initialPhrase);
  const [animationKey, setAnimationKey] = useState(0);

  // Función para obtener una frase aleatoria
  const getRandomPhrase = () => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    return `${phrases[randomIndex].phrase} - ${phrases[randomIndex].author}`;
  };

  // Cambiar contenido cuando se llama a este método
  const changeContent = () => {
    setPhrase(getRandomPhrase());
    setAnimationKey(prevKey => prevKey + 1);  // Actualiza el key para reiniciar la animación
    onChangeImage();
  };

  return (
    <motion.div
      className="relative m-2 md:m-0"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <img
        src="./Imgs/rectangle2.svg"
        alt="Rectangle"
        className="w-full h-full -z-10 object-contain"
      />
      {phrase && (
        <motion.div
          key={animationKey}  // Clave única que se actualiza cada vez que cambia la frase
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-sm sm:text-base md:text-base lg:text-xl font-bold absolute max-w-lg px-2 md:px-4 py-0 md:py-6 top-14 md:top-10 left-2 md:left-4"
        >
          <p>{phrase}</p>
        </motion.div>
      )}
      <Button onClick={changeContent} />
    </motion.div>
  );
};

export default ContainerPhrase;
