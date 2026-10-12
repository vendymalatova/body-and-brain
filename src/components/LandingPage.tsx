import React from "react";
import SearchBar from "./SearchBar";
import BrowseCategory from "./BrowseCategory";
import { useState } from "react";
import { mockData } from "../constants/mockData";
import PostPreview from "./PostPreview";
import styles from "./LandingPage.module.css";
import Header from "./Header";
import Footer from "./Footer";

const LandingPage = () => {
  const [data, setData] = useState(mockData);
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = (e: any) => setSearchValue(e.target.value);
  const newData = data.filter((post) =>
    post.heading.toLowerCase().includes(searchValue.toLowerCase()),
  );

  const [currentCategory, setCurrentCategory] = useState("allCategory");
  const newMockData = mockData.filter(
    (item) =>
      item.category === currentCategory || currentCategory === "allCategory",
  );

  return (
    <div>
      <Header />
      <div className={styles.header}>
        <span className={`badge text-bg ${styles.blogBadge}`}>
          Read Our Blog
        </span>
        <h1 className={styles.headerTitle}>
          Body and Brain: Nutrition, Training & Code
        </h1>
        <p className={styles.headertext}>
          Welcome! This blog is where good food, hard training, and clean code
          meet. Here you'll find practical nutrition tips, workout ideas and
          coding tutorials, all built on one belief: the habits that keep your
          body strong also keep your mind sharp. Whether you're meal prepping,
          lifting, or debugging, there's something here for you.
        </p>
      </div>
      <div className={styles.content}>
        <div className={styles.main}>
          <div className={styles.searchBar}>
            <SearchBar onSearch={handleSearch} />
          </div>
          <div>
            <BrowseCategory
              currentCategory={currentCategory}
              setCurrentCategory={setCurrentCategory}
            />
          </div>
        </div>
        {searchValue && newData.length === 0 && (
          <div className={styles.error}>No article found...</div>
        )}
        <div className={styles.posts}>
          {searchValue &&
            newData.map((post) => <PostPreview key={post.id} {...post} />)}
          {searchValue.length === 0 &&
            newMockData.map((post) => <PostPreview key={post.id} {...post} />)}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
