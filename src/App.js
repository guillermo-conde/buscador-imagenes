import { useState} from "react";
import { Field, Form, Formik } from "formik";
import './Header.css';
import './Content.css';
import './Article.css';
import './Boton.css';

const Button = ({children}) => {
  return (
    <button type="submit" className='boton'>{ children }</button>
  )
}

function App() {
  const [photos, setPhotos] = useState([]);
  const open = url => window.open(url);
  return (
    <div>
      <header>
        <Formik
          initialValues={{search: ''}}
          onSubmit={async values => {
            const response = await fetch(`https://api.unsplash.com/search/photos?per_page=20&query=${values.search}`,{
              headers: {
                'Authorization': 'Client-ID Ld0C8pYwYpBKJEiutHBAQdpj9XLRgcoDaC_o7LLutVM',
              }
            });
            const data = await response.json();
            setPhotos(data.results);
          }}>
          <Form>
            <label>Ingrese una palabra para buscar una imagen en la API de unsplash: </label>
            <Field  name='search' />
            <Button>Buscar</Button>
          </Form>
        </Formik>
      </header>
      <div className='container'>
        <div className='center'>
          {photos.map(photo =>
            <article key={photo.id} onClick={() => open(photo.links.html)}>
              <img src={photo.urls.regular} loading="lazy"/>
              <p>{[photo.description, photo.alt_description].join(' - ')}</p>
            </article>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
