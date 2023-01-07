import './App.css';
import Menu from './componentes/menu';
import Timer from './componentes/timer';
import MyVideoSlider from './componentes/video';
import Footer from './componentes/footer';

function App() {
  return (
    <div className="App">
      <Menu 
        logoizq = 'logo-sochi.png'
        logoder = 'logo-claro-sports.png'
      />

      <Timer
        video = 'https://www.youtube.com/embed/owGHU-F0EfY'
      />

      <section className='video-wall'>
        <div className='container'>
          <div className='row justify-content-center mt-5 pb-4'>
            <div className='col-12'>
                <h3 className='pb-3'>CLARO SPORTS EN SOCHI 2014</h3>
            </div>
            <MyVideoSlider
              id = "1"
              linkvideo =  'https://www.youtube.com/embed/owGHU-F0EfY'
              thumb = 'team-latam.png'
              titulo = 'TEAM LATAMOS'
              descripcion = 'Los Deportistas Latinoamricanos que participaran en Sochi 2014'
              active = {true}
            />
            <MyVideoSlider
              id = "2"
              linkvideo =  'https://www.youtube.com/embed/d9dnkTOg4eE'
              thumb = 'travel-meets-fashion.png'
              titulo = 'TRAVEL MEETS FASHION'
              descripcion = 'Los Deportistas Latinoamricanos que participaran en Sochi 2014'
              active = {false}
            />
            <MyVideoSlider
              id = "3"
              linkvideo =  'https://www.youtube.com/embed/SEDitXT51M4'
              thumb = 'velocidad-riesgo.png'
              titulo = 'VELOCIDAD Y RIESGO'
              descripcion = 'Los Deportistas Latinoamricanos que participaran en Sochi 2014'
              active = {false}
            />
            <MyVideoSlider
              id = "4"
              linkvideo =  'https://www.youtube.com/embed/KC16ELLP50Y'
              thumb = 'experiencia.png'
              titulo = 'EXPERIENCIA MULTIMEDIA'
              descripcion = 'Los Deportistas Latinoamricanos que participaran en Sochi 2014'
              active = {false}
            />
          </div>
        </div>
      </section>

      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
