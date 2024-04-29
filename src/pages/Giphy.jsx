//***--EXPLICACIÓN DE CÓDIGO PARA EQUIPO DE TRABAJO--********************************

// Estados: Se define el estado gif para almacenar la URL del GIF y el estado searchTerm para controlar el término de búsqueda.
// Constantes: Se define la API_KEY y la BASE_URL de la API de Giphy.
// useEffect: Se utiliza useEffect para realizar la llamada a la API cuando el componente se monta y cuando cambia el searchTerm.
// fetchGif: Se define una función fetchGif que construye la URL con el término de búsqueda y realiza la llamada a la API utilizando fetch.
// handleSearchChange: Esta función se encarga de actualizar el estado searchTerm cuando el usuario escribe en el input de búsqueda.
// Renderizado: Se muestra un input para la búsqueda y, si se ha obtenido un GIF, se muestra la imagen utilizando la URL almacenada en el estado gif.

// Estado isLoading: Se utiliza para mostrar un indicador de carga mientras se realiza la llamada a la API.
// Estado error: Se utiliza para almacenar un mensaje de error en caso de que la llamada a la API falle.
// fetchGifs con async/await: Se utiliza async/await para simplificar el manejo de promesas en la función fetchGifs.
// Manejo de errores: Se utiliza un bloque try...catch para capturar posibles errores y actualizar el estado error.
// Galería de GIFs: Se utiliza .map() para iterar sobre el array de gifs y mostrar cada GIF en una imagen.
// Indicador de carga y mensaje de error: Se muestran condicionalmente el indicador de carga y el mensaje de error si isLoading o error son verdaderos, respectivamente

import React, {useState, useEffect} from 'react';
import "../stylesheets/Giphy.css"

const Giphy = () => {
  // Estados para manejar la información del componente
  const [gifs, setGifs] = useState([]);        // Almacena el array de GIFs obtenidos de la API
  const [searchTerm, setSearchTerm] = useState('');  // El término de búsqueda actual
  const [isLoading, setIsLoading] = useState(false); // Indica si la llamada a la API está en curso
  const [error, setError] = useState(null);       // Almacena cualquier error que ocurra

  // Constantes para la API de Giphy
  const API_KEY = 'VQPVy1zKZE02DFBfdNjPokJe8jbZB8yQ';
  const BASE_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}`;

  // useEffect para realizar la búsqueda cuando cambia el término
  useEffect(() => {
    const fetchGifs = async () => {
      setIsLoading(true);      // Activamos el indicador de carga
      setError(null);         // Limpiamos cualquier error anterior

      try {
        const url = `${BASE_URL}&q=${searchTerm}&limit=15`; // URL con el término de búsqueda y limitamos a 12 resultados
        const response = await fetch(url);   // Llamada a la API de Giphy
        const data = await response.json();  // Convertimos la respuesta a JSON

        // Verificamos si hay resultados
        if (data.data.length === 0) {
          setError('No se encontraron GIFs para tu búsqueda.');
        } else {
          setGifs(data.data);  // Actualizamos el estado con los GIFs
        }
      } catch (error) {
        setError('Ocurrió un error al buscar GIFs. Inténtalo de nuevo.'); // Mensaje de error genérico
      } finally {
        setIsLoading(false);  // Ocultamos el indicador de carga
      }
    };

    // Solo buscamos si hay un término de búsqueda
    if (searchTerm) {
      fetchGifs();
    } else {
      setGifs([]);     // Limpiamos los GIFs si no hay término de búsqueda
      setError(null);  // Limpiamos cualquier error anterior
    }
  }, [searchTerm]); // El efecto se ejecuta cuando cambia searchTerm

  // Maneja el cambio en el input de búsqueda
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h2>Búsqueda de GIFs</h2>  {/* Título del componente */}

      {/* Formulario de búsqueda */}
      <form>
        <input
          type="text"
          placeholder="Busca GIFs divertidos..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </form>
  
      {/* Indicador de carga */}
      {isLoading && <p>Cargando GIFs increíbles...</p>}

      {/* Mensaje de error */}
      {error && <p className="error-message">Error: {error}</p>}

      {/* Galería de GIFs o mensaje si no hay resultados */}
      {gifs.length === 0 ? (
        <p>No se encontraron GIFs para tu búsqueda.</p>
      ) : (
        <div className="gif-grid"> {/* Contenedor para aplicar estilos a la galería */}
          {gifs.map((gif) => (
            <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} />
          ))}
        </div>
      )}

    </div>
    
  );
};

export default Giphy;

// Rommi , Ingrid En CSS pueden definir estilos para las clases error-message y gif-grid