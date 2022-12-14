import DynamicForm from './components/DynamicForm/DynamicForm';
import Introduction from './components/Introduction';
import NavbarMenu from './components/NavbarMenu'
import Services from './components/Services/Services';

function App() {
  return (
    <div>
      <NavbarMenu></NavbarMenu>
      <Introduction></Introduction>
      <Services></Services>
      <DynamicForm></DynamicForm>
    </div>
  );
}

export default App;
