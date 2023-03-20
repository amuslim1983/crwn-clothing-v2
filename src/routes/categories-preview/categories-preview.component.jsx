import { useContext } from 'react';
import { CategoriesContext } from '../../components/contexts/categories.context';

import CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <>
      {Object.keys(categoriesMap).map(title => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview
            key={title}
            title={title.toUpperCase()}
            products={products}
          />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
