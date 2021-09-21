import Nav from './component/Nav';
import Header from './component/Header';
import Main from './component/Main';

export default function Home() {
  return (
    <div>
      <Nav />
      <Header />
      <main>
        <Main />
      </main>

      <footer></footer>
    </div>
  );
}
