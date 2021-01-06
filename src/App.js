import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import SearchPage from "./components/Search/SearchPage";
import Article from "./components/Articles-Comment/Article";
import CategoryIdDetails from "./components/Params/CategoryIdDetails";
import ArticleIdDetails from "./components/Params/ArticleIdDetails";
import NavBar from "./components/NavBar/NavBar";
import "./App.scss";

function App() {
  return (
    <>
    <Router>
      <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/searchpage" component={SearchPage} />
          <Route path="/:articleId/articles" component={Article} />
          <Route path="/categories/:categoryId/" component={CategoryIdDetails} />
          <Route path="/:articleId/" component={ArticleIdDetails} />
        </Switch>
        </Router>
      </>
  );
}

export default App;
