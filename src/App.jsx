import Menyapa from './Menyapa.jsx';



function Biodata({ nama , NIM }){
  return <>
        <table border={1}>
            <tr>
              <td>nama</td>
              <td>NIM</td>
            </tr>
            <tr>
              <td>{nama}</td>
              <td>{NIM}</td>
            </tr>
          </table> 
  </>
}


function App(){
  return(
    <>
      <Menyapa/>
      <Biodata 
      nama="setooo" 
      NIM="A11.2024.15725"
      />
    </>
  );
}
export default App;