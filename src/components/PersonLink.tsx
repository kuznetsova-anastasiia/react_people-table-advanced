import classNames from 'classnames';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Person } from '../types';

type Props = {
  person: Person;
};

export const PersonLink: React.FC<Props> = ({ person }) => {
  const { name, sex, slug } = person;
  const { search } = useLocation();

  return (
    <Link
      to={{
        pathname: `/people/${slug}`,
        search,
      }}
      className={classNames({ 'has-text-danger': sex === 'f' })}
    >
      {name}
    </Link>
  );
};