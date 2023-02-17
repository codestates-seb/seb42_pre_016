import Head from "./components/Header/Head";
import HeadLogout from "./components/Header/HeadLogout";

function App() {
  return (
    <>
      <div>로그인 후</div>
      <Head />
      <div>로그인 전</div>
      <HeadLogout />
    </>
  );
}

export default App;
