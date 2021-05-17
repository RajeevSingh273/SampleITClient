import React, { memo } from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import PropsRoute from "../../shared/components/PropsRoute";
import Home from "./home/Home";
import Blog from "./blog/Blog";
import BlogPost from "./blog/BlogPost";
import AboutUs from "./aboutus";
import Faqs from "./faqs";
import useLocationBlocker from "../../shared/functions/useLocationBlocker";

function Routing(props) {
  const { selectHome, selectAbout, selectFaqs, blogPosts, selectBlog } = props;
  useLocationBlocker();
  return (
    <Switch>
      {blogPosts.map((post) => (
        <PropsRoute
          path={post.url}
          component={BlogPost}
          title={post.title}
          key={post.title}
          src={post.src}
          date={post.date}
          content={post.content}
          otherArticles={blogPosts.filter(
            (blogPost) => blogPost.id !== post.id
          )}
        />
      ))}
      <PropsRoute
        exact
        path="/blog"
        component={Blog}
        selectBlog={selectBlog}
        blogPosts={blogPosts}
      />
      <PropsRoute
        exact
        path="/about"
        component={AboutUs}
        selectAbout={selectAbout}
      />
      <PropsRoute path="/faqs" component={Faqs} selectFaqs={selectFaqs} />
      <PropsRoute path="/" component={Home} selectHome={selectHome} />
    </Switch>
  );
}

Routing.propTypes = {
  blogposts: PropTypes.arrayOf(PropTypes.object),
  selectHome: PropTypes.func.isRequired,
  selectAbout: PropTypes.func.isRequired,
  selectFaqs: PropTypes.func.isRequired,
  selectBlog: PropTypes.func.isRequired,
};

export default memo(Routing);
