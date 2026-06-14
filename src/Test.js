import './App.css';

function App() {
  const name = 'code lab';
  const myArr = ['one', 'two', 'three'];
  const myObj = {
    'name': 'Mg Mg',
    'location': 'Yangon'
  }
  function greeting() {
    return 'hi, welcome from code lab'
  }
  return (
    <div>
      <h1 className='title'>Hello World</h1>
      <label htmlFor='userEmail'>Email</label>
      <input type='text' id='userEmail' />
      <hr />
      <h1>
        { name } <br />
        { myArr } <br />
        { myObj.name } <br />
        { 100+7 } <br />
        { myObj.name == 'code lab' ? 'This is code lab' : 'This is not' } <br />
        { greeting() }
      </h1>
    </div>  
  );
}

export default App;
