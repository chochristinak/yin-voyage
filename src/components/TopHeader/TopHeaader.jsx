import SearchComponent from '../../components/SearchComponent/SearchComponent';
import './TopHeader.css';

export default function TopHeader() {
  return (
    <div className="container-fluid">
      <div
        className="Top-div"
        style={{
          position: 'relative',
          backgroundImage: `url(https://images.unsplash.com/photo-1591228127791-8e2eaef098d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8)`,
        }}
      >
        <div className="box-content">
          <h4>Unleash your inner power. Find tranquility. Rejuvenate your spirit.</h4>
          <p>Book your transformative yoga retreat today 🧘‍♀️🌿</p>
          <div className="search-component" >
            <SearchComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
