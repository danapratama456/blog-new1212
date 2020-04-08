import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import _ from "lodash";

import style from "./Categories.module.scss";

const Categories = (props) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___categories) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  return (
    <ul className={style.test}>
      {data.allMarkdownRemark.group.map((category) => (
        <li className={style.listing} key={category.fieldValue}>
          <Link
            to={`/${_.kebabCase(category.fieldValue)}`}
            key={category.fieldValue}
            activeClassName={props.activeClassName}
          >
            {category.fieldValue}
            <strong> ({category.totalCount})</strong>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
