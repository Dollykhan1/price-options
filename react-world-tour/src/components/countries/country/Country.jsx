
import './country.css';
const Country = ({country}) => {
const {name, flags} = country;
    return (
        <div className='country'>
            <h3>Name.common</h3>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;