import {
  CategoryTitle,
  CategoryListItem,
  CategoryLink,
  CategoryList,
} from "./styles";

const Category = ({ name, options = [] }) => {
  return (
    <section>
      <CategoryTitle>{name}</CategoryTitle>
      <CategoryList>
        {options.map((singleOption, index) => (
          <CategoryListItem key={singleOption} index={index} type='primary'>
            <CategoryLink to={`/search/${singleOption}`}>
              {singleOption}
            </CategoryLink>
          </CategoryListItem>
        ))}
      </CategoryList>
    </section>
  );
};

export default Category;
