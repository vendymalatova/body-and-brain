import React from "react";
import styles from "./BrowseCategory.module.css";

const categories = [
  { label: "All category", value: "allCategory" },
  { label: "Nutrition", value: "nutrition" },
  { label: "Training", value: "training" },
  { label: "Code", value: "code" },
];

interface Props {
  currentCategory: string;
  setCurrentCategory: React.Dispatch<React.SetStateAction<string>>;
}

const BrowseCategory = ({ currentCategory, setCurrentCategory }: Props) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Browse by Categories</h3>
      <ul className={styles.list}>
        {categories.map((category: any) => (
          <li
            key={category.value}
            className={
              currentCategory === category.value
                ? styles.categorySelected
                : styles.category
            }
            onClick={() => setCurrentCategory(category.value)}
          >
            {category.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrowseCategory;
