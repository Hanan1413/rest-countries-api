
import styles from './Country.module.css'

const Country = ({country}) => {
    const {name, region, population, flag , capital} = country
    return (
      <div>
        <div className={styles.card}>
          <img className={styles.cardImge} src={flag} alt="Avatar" 
          />
          <div className={styles.cardContainer}>
              <h4>{name}</h4>
            <p><strong>Region: </strong>R{region}</p>
            <p><strong>Population:</strong>{population}</p>
            <p><strong>Capital:</strong>{capital}</p>


          </div>
        </div>
      </div>
    );
  };
  
  export default Country;
  