export default function Personajes(props) {
  const {characters, setCharacters} = props;

  const resetcharacter = () => {
    setCharacters(null);

  };

  return (
    <div className="characters">
      <h1>Personajes</h1>
      <span className="back-home" onClick={resetcharacter}>Volver a la Home</span>
      <div className="container-characters">      
      {characters.map((character,index) => (
        <div className="container-characters" key={index}>
        <div>
        <img src={character.image} alt={character.name}/>
        </div>
        <div>
          <h3>{character.name}</h3>
          <h6>{character.status === "Alive" ? ( 
            <>          
            <span className="alive" >Alive</span>
            </>        
            ):
            (
              <>
              <span className="dead" >Dead</span>
              </>
              ) }            
            </h6>
            <p>
              <span className="text-grey">Episodio: </span>
              <span>{character.episode.length}</span>            
            </p>
            <p>
              <span className="text-grey">Especie: </span>
              <span>{character.species}</span>  
              
              
              </p>
              </div>
        </div>

      ))}
      
      </div>
      <span className="back-home" onClick={resetcharacter}>Volver a la Home</span>
    </div>
  );
}
