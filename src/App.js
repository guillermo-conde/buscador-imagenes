import { useState} from "react";
import { Field, Form, Formik } from "formik";
import './Header.css';

function App() {
  const [photos, setPhotos] = useState([]);
  console.log({photos});
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
            <Field name='search' />
          </Form>
        </Formik>
      </header>
    </div>
  );
}

export default App;
