import Navbar from "../../components/navbar/Navbar";
import SearchInput from "../../components/search-input/SearchInput";
import SelectMenu from '../../components/select-menu/SelectMenu';
import Countries from "../../components/countries/Countries";
import data from '../../../data'

const HomePage = () => {
  return (
    <section>
      <Navbar />
      <div className="container">
        <div className="filter">
        <div className="input">
        <SearchInput />
        </div>

        <div className="input">
        <SelectMenu />

        </div>


        </div>

        <Countries data ={data} />
        </div>
    </section>
  );
};

export default HomePage;
