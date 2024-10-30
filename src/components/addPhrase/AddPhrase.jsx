import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export const AddPhrase = ({ onAddPhrase }) => {
  const [newPhrase, setNewPhrase] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPhrase && author) {
      const phraseObject = { phrase: newPhrase, author };
      onAddPhrase(phraseObject); 
      setNewPhrase(""); 
      setAuthor(""); 
      toast.success("Frase agregada exitosamente"); // Mensaje de confirmación
    } else {
      toast.error("Por favor, rellene todos los campos"); // Mensaje de error
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 m-4">
      <input
        type="text"
        placeholder="Nueva frase"
        value={newPhrase}
        onChange={(e) => setNewPhrase(e.target.value)}
        className="border rounded p-2"
        required
      />
      <input
        type="text"
        placeholder="Autor"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="border rounded p-2"
        required
      />
      <button type="submit" className="bg-blue-500 text-white py-2 rounded">
        Agregar frase
      </button>

      <Toaster position="top-right" reverseOrder={false} />
    </form>
  );
};

export default AddPhrase;
