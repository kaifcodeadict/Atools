import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "./App.css";
import { Alert, Layout } from "antd";
import axios from "axios";
import Nav from "./components/Navbar/Nav";
import Home from "./components/Home/Home";
import { useState } from "react";
import { useEffect } from "react";
const { Header, Content } = Layout;
const App = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleLogin = async () => {
    try {
      await axios
        .post("https://reqres.in/api/login", {
          params: {
            email: "eve.holt@reqres.in",
            password: "5cityslicka",
          },
        })
        .then(() => {
          setMessage("token: QpwL5tke4Pnpja7X4");
          setResponse("success");
        });
    } catch (error) {
      setMessage("error: “Missing Password”");
      setResponse("error");
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setResponse("");
    }, 5000);
    return () => clearTimeout(timer);
  }, [response]);

  return (
    <>
      <div className="App">
        <Layout>
          <Header className="Header">
            {/* Resuable navbar */}
            <Nav
              Title={"ATools."}
              FirstBtnColor={"var(--first-color)"}
              SecondBtnColor={"var(--second-color)"}
              FirstBtnValue={"Start Free Trial"}
              SecondBtnValue={"Login"}
              BtnWidth={8.2}
              handleLogin={handleLogin}
            />
            {/* Alert for message show */}
            {response && <Alert message={message} type={response} />}
          </Header>

          <Layout>
            <Content>
              {/* Form and poster */}
              <Home handleClick={handleLogin} />
            </Content>
          </Layout>
        </Layout>
      </div>
    </>
  );
};

export default App;
