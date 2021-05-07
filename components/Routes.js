import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const Routes = ({ routes }) => {
  if (routes === "undefined") return null;

  return (
    <div>
      {(!routes || routes.length == 0) && <div>No routes!</div>}

      <ul>
        {routes &&
          routes.map((route) => {
            return (
              <li key={route.slug}>
                <Link href={{ pathname: `/route/${route.slug}` }}>
                  {route.title}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

Routes.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};

export default Routes;
