import { Field, Form, Formik } from "formik";
import './Header.css';

function App() {
  return (
    <div>
      <header>
        <Formik
          initialValues={{search: ''}}
          onSubmit={async values => {
            console.log(values);
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
