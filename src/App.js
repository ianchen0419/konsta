import logo from './logo.svg';
import './App.css';
import { App, Page, Navbar, Block, Button } from 'konsta/react';


function ReactApp() {
  return (
    <App theme="ios">
      <Page>
        <Navbar title="My App" />
        <Block>
          <p>Here comes my app</p>
          <h1 className="text-3xl font-bold underline">
            Hello world!
          </h1>
          <Button>Action</Button>
        </Block>
      </Page>
    </App>
  );
}

export default ReactApp;
