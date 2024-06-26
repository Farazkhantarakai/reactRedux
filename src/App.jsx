import "./App.css";
import { useGetAllProductsQuery } from "../src/products";

function App() {
  // const count = useSelector((state) => state.counter.count);
  // const dispatch = useDispatch();
  const { data: products, error, loading } = useGetAllProductsQuery();

  console.log(products);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Some error exists{error.message}</div>;
  }

  if (products) {
    return (
      <>
        {/* <div>counter here ${count} </div> */}
        {/* <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button> */}
        <h2>Products</h2>
        {products.map((items) => (
          <li key={items.id}> <div style={{margin :"20px", boxShadow:"1px"}}>

                <p>{items.id}</p>
                <p>{items.title}</p>
                <p>{items.price}</p>
                <p>{items.description}</p>
                <p>{items.category}</p>
                <p>{items.rate}</p>1
              <img src={items.image} width={50}/>  
              
          </div> </li>
        ))}
      </>
    );
  }
}

export default App;
