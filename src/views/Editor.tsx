import {
  RichTextEditorComponent,
  Inject,
  Toolbar,
  Image,
  Link,
  HtmlEditor,
  QuickToolbar,
} from '@syncfusion/ej2-react-richtexteditor';
import { Header } from '../components';
import { EditorData } from '../components/GridEmployeeProfile';

const Editor = () => {
  return (
    <div className='m-2 mt-24 rounded-3xl bg-white p-2 md:m-10 md:p-10'>
      <Header category='App' title='Calendar' />
      <RichTextEditorComponent>
        <EditorData />
        <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
      </RichTextEditorComponent>
    </div>
  );
};

export default Editor;
