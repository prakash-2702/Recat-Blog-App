import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

  /*
  // let name = 'mario';
  const [name, setName] = useState('mario');
  const [age, setAge] = useState(25);

  const handleClick = () => {
    // name = 'luigi';
    setName('luigi');
    setAge(30);
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{ name } is { age } years old</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
  */


  /*
  return (
    <div className="home">
    <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
    <BlogList blogs={blogs.filter((blog)=>blog.author==="mario")} title="Mario's Blog"/>
    </div>
  );
  */

  /*
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])

  const handleDelete=(id)=>
  {
      const newBlogs=blogs.filter((blog)=>blog.id !== id);
      setBlogs(newBlogs);
  }

  const [name,setName]=useState("Prakash");

  useEffect(()=>
  {
    console.log("useEffect");
  
  },[name]);


  return (
    <div className="home">
    <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
    <button onClick={()=>setName("Paku")}>Click Here to change name</button>
    <p>{name}</p>
    </div>
  );
  */

  /*
  const handleDelete=(id)=>
  {
      const newBlogs=blogs.filter((blog)=>blog.id !== id);
      setBlogs(newBlogs);
  }
  */

  const {data:blogs,isPending,error}=useFetch('http://localhost:8000/blogs');

  return (
    <div className="home">
    {error && <div>{error}</div>}
    {isPending && <div className="loading">Loading....</div>}
    { blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );

}
 
export default Home;